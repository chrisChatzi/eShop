/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AdminCategories from '../components/AdminCategories.js'
import Message from '../components/Message.js'
import Popup from '../containers/PopupCategory.js'
import { get_categories, delete_category, rearrange_categories, popupCategory_status } from '../actions.js'
import ajax from 'ajax-query'

function mapStateToProps(state) {
	return {
		categories : state.categories,
		popup : state.popup,
		msg : state.general.msg
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getData: (res) => {
			dispatch(get_categories(res))
		},
		rearrange: (from, to) => {
			dispatch(rearrange_categories(from, to))
		},
		deleteCategory: (item) => {
			dispatch(delete_category(item))
		},
		popupState: (idx) => {
			dispatch(popupCategory_status(true, idx))
		},
		closePopup: (e) => {
			if(!e.target.classList.contains("pop")) dispatch(popupCategory_status(false, ""))
		}
	};
}

class Main extends Component {
	static get propTypes() {
		return { 
			categories : PropTypes.array.isRequired
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			dragged : ""
		}

		this.deleteC = this.deleteHandler.bind(this);
		this.edit = this.editHandler.bind(this);
		this.drop = this.dropHandler.bind(this);
		this.drag = this.dragHandler.bind(this);
		this.openPopup = this.openPopupHandler.bind(this);
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

	deleteHandler (e, i){
		let res = confirm("Are you sure you want to delete '"+this.props.categories[i].title+"'?");
		if(res) this.props.deleteCategory(this.props.categories[i])
	}
	editHandler (e, i){
		if(!e.target.classList.contains("del")) this.props.popupState(i)
	}
	dropHandler (e, i){
		this.props.rearrange(this.state.dragged, i)
	}
	dragHandler (e, i){
		this.setState({dragged : i})
	}
	openPopupHandler (){
		this.props.popupState("")
	}

	render() {
		let { categories, popup, msg } = this.props;
		let { deleteC, edit, drop, drag, openPopup } = this;

		return (
			<div className="admin" onClick={(popup.categories) ? this.props.closePopup : ""} >
				{(msg) ? <Message text={msg} /> : "" }
				<AdminCategories categories={categories} 
					onClick={(popup.categories) ? this.props.closePopup : ""} deleteC={deleteC}
					edit={edit} drop={drop} drag={drag} openPopup={openPopup} />
				{(popup.categories) ? <Popup data={popup.categoriesIdx} /> : "" }
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);