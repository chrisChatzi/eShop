/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DetailsC from '../components/Details.js'
import { update_cart, update_product } from '../actions.js'

function mapStateToProps(state, ownProps) {
	return {
		product : state.main.product,
		cart : state.main.cart,
		cartSizes: state.main.cartSizes,
		cartColors: state.main.cartColors,
		category : state.main.selectedCategory.name,
		sub : state.main.selectedProduct.name,
		prodIdx : state.main.selectedProduct.idx,
		catIdx : state.main.selectedCategory.idx,
		lang : state.main.lang,
		langIdx : state.main.langIdx
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateCart: (product, size, color)=>{
			dispatch(update_cart(product, true, size, color))
		},
		sendComment: (id, oldName, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments)=>{
			dispatch(update_product(id, oldName, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments, true))
		}
	};
}

class Details extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.timeout = 0

		let num = 0;
		if(this.props.product.comments)
			for(let i=0; i<this.props.product.comments.length; i++)
				if(this.props.product.comments[i].show) num++;

		this.state = {
			hoverImg : false,
			imgIdx : 0,
			sizeIdx : -1,
			colorIdx : -1,
			imageView : false,
			dimImg : -1,
			noSize : false,
			noColor : false,
			commName : "",
			commTxt : "",
			commNameCheck : false,
			commTxtCheck : false,
			commNumber : num,
			addedToCart : false
		}

		this.hoverImg = this.hoverImgHandler.bind(this);
		this.clickThumb = this.clickThumbHandler.bind(this);
		this.clickSize = this.clickSizeHandler.bind(this);
		this.clickColor = this.clickColorHandler.bind(this);
		this.addProduct = this.addProductHandler.bind(this);
		this.clickImg = this.clickImgHandler.bind(this);
		this.dimImg = this.dimImgHandler.bind(this);
		this.changeCommName = this.changeCommNameHandler.bind(this);
		this.changeCommTxt = this.changeCommTxtHandler.bind(this);
		this.sendComm = this.sendCommHandler.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		let h = window.innerHeight;
		document.getElementById("detailsBody").style.minHeight = h+"px";
	}
	componentWillUnmount(){
		clearTimeout(this.timeout)
	}
	//hover image
	hoverImgHandler(flag){
		this.setState({hoverImg : flag})
	}
	//change image
	clickThumbHandler(i){
		this.setState({imgIdx : i})
	}
	//choose size
	clickSizeHandler(i){
		this.setState({noSize : false});
		if(i == this.state.sizeIdx) this.setState({sizeIdx : -1})
		else this.setState({sizeIdx : i})
	}
	//choose color
	clickColorHandler(i){
		this.setState({noColor : false});
		if(i == this.state.colorIdx) this.setState({colorIdx : -1})
		else this.setState({colorIdx : i})
	}
	//add to cart
	addProductHandler(){
		let idx = 0;
		this.props.cart.map( (v,i) => {
			if(v._id == this.props.product._id) idx = i
		})
		if(this.props.cartSizes[idx] == this.state.sizeIdx && 
			this.props.cartColors[idx] == this.state.colorIdx)
			alert(this.props.lang.productInCart)
		else{
			if(this.state.sizeIdx == -1) this.setState({noSize : true});
			if(this.state.colorIdx == -1) this.setState({noColor : true});
			if(this.state.sizeIdx != -1&&this.state.colorIdx != -1){
				this.props.updateCart(this.props.product, this.state.sizeIdx, this.state.colorIdx);
				this.setState({addedToCart : true});
				this.timeout = setTimeout( ()=>{
					this.setState({addedToCart : false});
				}, 3000);
			}
		}
	}
	//click on omage to enlarge
	clickImgHandler(flag){
		this.setState({imageView : flag})
	}
	//hover dimension's image
	dimImgHandler(i, flag){
		if(flag) this.setState({dimImg : i });
		else this.setState({dimImg : -1 });
	}
	//comments
	changeCommNameHandler(e){
		this.setState({commName : e.target.value})
		this.setState({commNameCheck : false})
	}
	changeCommTxtHandler(e){
		this.setState({commTxt : e.target.value})
		this.setState({commTxtCheck : false})
	}
	sendCommHandler(){
		let error = false;
		this.setState({commNameCheck : false, commTxtCheck : false})
		if(this.state.commName.length < 1){
			this.setState({commNameCheck : true})
			error = true;
		}
		if(this.state.commTxt.length < 1){
			this.setState({commTxtCheck : true})
			error = true;
		}
		if(!error){
			let prodComm = this.props.product.comments
			let d = new Date();
			let comment = {
				"name" : this.state.commName,
				"txt" : this.state.commTxt,
				"date" : [d.getDate(), d.getMonth()+1, d.getFullYear(), d.getHours(), d.getMinutes()],
				"show" : false
			}
			if(prodComm) prodComm.push(comment)
			else prodComm = [comment]
			this.props.sendComment(
				this.props.product.id, 
				this.props.product.title, 
				this.props.product.title, 
				this.props.product.price, 
				this.props.product.category, 
				this.props.product.descr, 
				this.props.product.size, 
				this.props.product.color, 
				this.props.product.tag, 
				this.props.product.fabric, 
				this.props.product.qual, 
				this.props.product.dims, 
				this.props.product.img, 
				prodComm
			);
			alert(this.props.lang.commSent);
		}
	}

	render() {
		let { product, lang, langIdx, prodIdx, catIdx } = this.props
		let { hoverImg, clickImg, clickThumb, clickSize, clickColor, addProduct, dimImg,
			changeCommName, changeCommTxt, sendComm } = this

		return (
			<div className="">
				<DetailsC product={product} lang={lang} langIdx={langIdx} state={this.state}
					prodIdx={prodIdx} catIdx={catIdx}
					hoverImg={hoverImg} clickThumb={clickThumb} clickImg={clickImg} dimImg={dimImg}
					clickSize={clickSize} clickColor={clickColor} addProduct={addProduct}
					changeCommName={changeCommName} changeCommTxt={changeCommTxt} sendComm={sendComm} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);