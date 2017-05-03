/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PopupCategory from '../components/PopupCategory.js'
import { add_category, update_category } from '../actions.js'

function mapStateToProps(state, ownProps) {
	return {
		data : ownProps.data,
		item : state.categories[ownProps.data]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		add_category: (name, descr, img) => {
			dispatch(add_category(name, descr, img))
		},
		update_category: (oldName, oldDescr, oldImg, name, descr, img) => {
			dispatch(update_category(oldName, oldDescr, oldImg, name, descr, img))
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

		let name = (this.props.item) ? this.props.item.title : "";
		let descr = (this.props.item) ? this.props.item.descr : "";
		let img = (this.props.item) ? this.props.item.img : "";
		this.state = {
			name : name,
			descr : descr,
			file : "",
			imagePreviewUrl : img,
			nameCheck : "",
			descrCheck : "",
			imageCheck : ""
		}

		this.readFile = this.readFileHandler.bind(this)
		this.changeName = this.changeNameHandler.bind(this)
		this.changeDescr = this.changeDescrHandler.bind(this)
		this.action = this.actionHandler.bind(this)
	}

	componentDidMount() {
		
	}

	readFileHandler (e){
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result
			});
		}

		if(file) reader.readAsDataURL(file)
	}
	changeNameHandler (e){
		this.setState({name : e.target.value})
	}
	changeDescrHandler (e){
		this.setState({descr : e.target.value})
	}
	actionHandler (){
		this.setState({
			nameCheck : "",
			descrCheck : "",
			imageCheck : ""
		});
		let error = false;
		if(this.state.name.length <= 0){
			this.setState({nameCheck : true});
			error = true;
		}
		if(this.state.descr.length <= 0){
			this.setState({descrCheck : true});
			error = true;
		}
		if(this.state.imagePreviewUrl.length <= 0){
			this.setState({imageCheck : true});
			error = true;
		}

		if(!error){
			if(this.props.data !== "") 
				this.props.update_category(
					this.props.item.title, 
					this.props.item.descr, 
					this.props.item.imagePreviewUrl, 
					this.state.name, 
					this.state.descr, 
					this.state.imagePreviewUrl
				);
			else this.props.add_category(this.state.name, this.state.descr, this.state.imagePreviewUrl);
		}
	}


	render() {
		let { data, item } = this.props
		let { readFile, changeName, changeDescr, action } = this
		let state = this.state
		let flag = (data !== "") ? true : false

		return (
			<div className="main">
				<PopupCategory data={flag} item={item} readFile={readFile} state={state}
				changeName={changeName} changeDescr={changeDescr} action={action} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);