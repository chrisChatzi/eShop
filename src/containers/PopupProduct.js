/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PopupProduct from '../components/PopupProduct.js'
import { get_categories, add_product, update_product } from '../actions.js'
import ajax from 'ajax-query'
import { getUndefined } from '../general/logic.js'

function mapStateToProps(state, ownProps) {
	return {
		data : ownProps.data,
		categories : state.categories,
		item : state.products[ownProps.data]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getData: (res) => {
			dispatch(get_categories(res))
		},
		add_product: (id, name, price, category, descr, size, color, tag, fabric, quality, dims, img) => {
			dispatch(
				add_product(
					id, name, price, category, descr, size, color, tag, fabric, quality, dims, img))
		},
		update_product:
			(id, oldName, name, price, category, descr, size, color, tag, fabric, quality, dims, img) => {
			dispatch(
				update_product(
					id, oldName, name, price, category, descr, size, color, tag, fabric, quality, dims, img))
		}
	};
}

class Main extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		let id = (this.props.item) ? this.props.item.id : "";
		let name = (this.props.item) ? this.props.item.title : ["","",""];
		let price = (this.props.item) ? this.props.item.price : "";
		let category = (this.props.item) ? this.props.item.category : "default";
		let descr = (this.props.item) ? this.props.item.descr : ["","",""];
		let size = (this.props.item) ? this.props.item.size : [];
		let color = (this.props.item) ? this.props.item.color : [];
		let tag = (this.props.item) ? this.props.item.tag : [];
		let fabric = (this.props.item) ? this.props.item.fabric : ["","",""];
		let quality = (this.props.item) ? this.props.item.quality : "default";
		let dims = (this.props.item) ? this.props.item.dims : [];
		let img = (this.props.item) ? this.props.item.img : new Array(5);
		let imageIdx = (this.props.item) ? this.getArrayIdx(this.props.item.img) : 0;
		this.state = {
			id,
			name,
			price,
			category,
			descr,
			size,
			color,
			tag,
			fabric,
			dims,
			quality,
			file : "",
			imagePreviewUrl : img,
			imageIdx,
			idCheck : "",
			nameCheck : "",
			priceCheck : "",
			categoryCheck : "",
			descrCheck : "",
			sizeCheck : "",
			colorCheck : "",
			fabricCheck : "",
			tagCheck : "",
			imageCheck : "",
			dimensionsCheck : ""
		}

		this.changeId = this.changeIdHandler.bind(this)
		this.changeImage = this.changeImageHandler.bind(this)
		this.changeName = this.changeNameHandler.bind(this)
		this.changePrice = this.changePriceHandler.bind(this)
		this.changeCategory = this.changeCategoryHandler.bind(this)
		this.changeDescr = this.changeDescrHandler.bind(this)
		this.changeColor = this.changeColorHandler.bind(this)
		this.changeSize = this.changeSizeHandler.bind(this)
		this.changeTag = this.changeTagHandler.bind(this)
		this.changeFabric = this.changeFabricHandler.bind(this)
		this.changeQuality = this.changeQualityHandler.bind(this)
		this.changeDims = this.changeDimsHandler.bind(this)
		this.changeImageIdx = this.changeImageIdxHandler.bind(this)
		this.action = this.actionHandler.bind(this)
	}

	componentDidMount() {
		let options = {
			url : "/categories",
			type : "GET"
		};
		ajax.ajaxRequest(options, (res) => {
			if(res.type == "ok") this.props.getData(res.categories)
		}); 
	}

	getArrayIdx (array){
		let idx = 0;
		for(let i=0; i<array.length; i++){
			if(array[i] == null){
				idx = i;
				break;
			}
		}
		return idx
	}

	changeNameHandler (e, i){
		let nameArray = this.state.name
		nameArray[i] = e.target.value
		this.setState({name : nameArray})
	}
	changeIdHandler (e){
		this.setState({id : e.target.value})
	}
	changePriceHandler (e){
		this.setState({price : e.target.value})
	}
	changeCategoryHandler (e){
		this.setState({category : e.target.value})
	}
	changeDescrHandler (e, i){
		let descrArray = this.state.descr
		descrArray[i] = e.target.value
		this.setState({descr : descrArray})
	}
	changeSizeHandler (v){
		let sizeArray = this.state.size
		let dimsArray = this.state.dims
		if(sizeArray.indexOf(v) < 0){
			sizeArray.push(v);
			let obj = {};
			obj[v] = ["0","0","0"];
			dimsArray.push(obj);
		}else{
			sizeArray.splice(sizeArray.indexOf(v), 1)
			let idx = 0;
			for(let i=0; i<dimsArray.length; i++){
				if(dimsArray[i][v]) idx = i;
			}
			dimsArray.splice(idx, 1);
		}
		this.setState({size : sizeArray})
		this.setState({dims : dimsArray})
	}
	changeColorHandler (v){
		let colorArray = this.state.color
		if(colorArray.indexOf(v) < 0) colorArray.push(v)
		else colorArray.splice(colorArray.indexOf(v), 1)
		this.setState({color : colorArray})
	}
	changeTagHandler (v){
		let tagArray = this.state.tag;
		if(tagArray.indexOf(v) < 0) tagArray.push(v);
		else tagArray.splice(tagArray.indexOf(v), 1);
		this.setState({tag : tagArray});
	}
	changeDimsHandler (e, key, i){
		let dimsArray = this.state.dims;
		let idx = 0;
		for(let i=0; i<dimsArray.length; i++){
			if(dimsArray[i][key]) idx = i;
		}
		dimsArray[idx][key][i] = e.target.value;
		this.setState({dims : dimsArray});
	}
	changeImageHandler (e){
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			var img = new Image;
			img.onload = () => {
				let ratio = img.height/img.width;
				if(ratio > 1.4 || ratio < 1.3)
					alert("Οι διαστάσεις της εικόνας δεν είναι καλές...\nυψος/μήκος πρέπει να είναι 1.3~1.4 και είναι "+ratio);
				else{
					let array = this.state.imagePreviewUrl;
					array[this.state.imageIdx] = reader.result;
					this.setState({
						file: file,
						imagePreviewUrl: array
					});
				}
			};
			img.src = reader.result;
			
		}

		if(file) reader.readAsDataURL(file)
	}
	changeImageIdxHandler (i){
		this.setState({imageIdx : i})
	}
	changeQualityHandler (e){
		this.setState({quality : e.target.value})
	}
	changeFabricHandler (e, i){
		let fabricArray = this.state.fabric
		fabricArray[i] = e.target.value
		this.setState({fabric : fabricArray})
	}
	actionHandler (){
		this.setState({
			idCheck : "",
			nameCheck : "",
			priceCheck : "",
			categoryCheck : "",
			descrCheck : "",
			sizeCheck : "",
			colorCheck : "",
			tagCheck : "",
			imageCheck : "",
			fabricCheck : "",
			dimensionsCheck : ""
		});
		let error = false;
		//check name
		if(getUndefined(this.state.name) > 0){
			this.setState({nameCheck : true});
			error = true;
		}
		//check id
		if(this.state.id.length <= 0){
			this.setState({idCheck : true});
			error = true;
		}
		//check price
		if(this.state.price.length <= 0 || isNaN(this.state.price)){
			this.setState({priceCheck : true});
			error = true;
		}
		//check category
		if(this.state.category === "default"){
			this.setState({categoryCheck : true});
			error = true;
		}
		//check description
		if(getUndefined(this.state.descr) > 0){
			this.setState({descrCheck : true});
			error = true;
		}
		//check fabric
		if(getUndefined(this.state.fabric) > 0){
			this.setState({fabricCheck : true});
			error = true;
		}
		//check size
		if(this.state.size.length < 1){
			this.setState({sizeCheck : true});
			error = true;
		}
		//check image
		if(this.getArrayIdx(this.state.imagePreviewUrl) == 0){
			this.setState({imageCheck : true});
			error = true;
		}
		//dimensions check
		let err = false
		for(let key in this.state.dims){
			for(let i=0; i<this.state.dims[key].length; i++){
				if(this.state.dims[key][i] < 0  || isNaN(this.state.dims[key][i])) err = true
			}
		}
		if(err){
			this.setState({dimensionsCheck : true});
			error = true;
		}
		//color check
		if(this.state.color.length < 1){
			this.setState({colorCheck : true});
			error = true;
		}

		if(!error){
			if(this.props.data !== "") 
				this.props.update_product(
					this.state.id,
					this.props.item.title,
					this.state.name, 
					this.state.price,
					this.state.category,
					this.state.descr, 
					this.state.size, 
					this.state.color,
					this.state.tag,
					this.state.fabric,
					this.state.quality,
					this.state.dims,
					this.state.imagePreviewUrl
				);
			else
				this.props.add_product(
					this.state.id,
					this.state.name, 
					this.state.price,
					this.state.category,
					this.state.descr, 
					this.state.size,
					this.state.color,
					this.state.tag,
					this.state.fabric,
					this.state.quality,
					this.state.dims,
					this.state.imagePreviewUrl
				);
		}
	}


	render() {
		let { data, categories, item } = this.props
		let { changeImage, changeName, changePrice, changeColor, changeId,
				changeImageIdx, changeTag, changeDims, changeQuality,
				changeDescr, changeSize, changeCategory, changeFabric, action } = this
		let state = this.state
		let flag = (data !== "") ? true : false

		return (
			<div className="main">
				<PopupProduct 
					data={flag} item={item} categories={categories} state={state} 
					changeImage={changeImage} changeColor={changeColor} changeImageIdx={changeImageIdx} 
					changeFabric={changeFabric} changeCategory={changeCategory} changePrice={changePrice} 
					changeSize={changeSize} changeName={changeName} changeDescr={changeDescr} 
					changeTag={changeTag} changeDims={changeDims} changeQuality={changeQuality}
					changeId={changeId}
					action={action} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);