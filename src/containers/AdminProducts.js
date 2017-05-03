/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../history.js'
import AdminProducts from '../components/AdminProducts.js'
import Message from '../components/Message.js'
import Popup from '../containers/PopupProduct.js'
import PopupComm from '../containers/PopupComm.js'
import { get_products, get_categories,
	delete_product, rearrange_products, popupProducts_status, popupComments_status } from '../actions.js'
import ajax from 'ajax-query'

function mapStateToProps(state) {
	return {
		login : state.main.login,
		products : state.products,
		categories : state.categories,
		popup : state.popup,
		msg : state.general.msg
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getData: (res, flag) => {
			if(flag) dispatch(get_products(res))
			else dispatch(get_categories(res))
		},
		rearrange: (from, to) => {
			dispatch(rearrange_products(from, to))
		},
		deleteCategory: (item) => {
			dispatch(delete_product(item))
		},
		popupState: (idx) => {
			dispatch(popupProducts_status(true, idx))
		},
		popupStateComm: (idx) => {
			dispatch(popupComments_status(true, idx))
		},
		closePopup: (e) => {
			if(!e.target.classList.contains("pop")){
				dispatch(popupProducts_status(false, ""))
				dispatch(popupComments_status(false, ""))
			}
		}
	};
}

class Main extends Component {
	static get propTypes() {
		return { 
			products : PropTypes.array.isRequired
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			dragged : "",
			category : "default"
		}
		this.deleteC = this.deleteHandler.bind(this);
		this.edit = this.editHandler.bind(this);
		this.changeCategory = this.changeCategoryHandler.bind(this);
		this.drop = this.dropHandler.bind(this);
		this.drag = this.dragHandler.bind(this);
		this.openPopup = this.openPopupHandler.bind(this);
		this.comments = this.commentsHandler.bind(this);
	}

	componentDidMount() {
		document.title = "Admin Products";
		(!this.props.login) ? history.push("/admin") : ""
		let options = {
			url : "/products",
			type : "GET"
		};
		ajax.ajaxRequest(options, (res) => {
			if(res.type == "ok") this.props.getData(res.products, true)
			options = {
				url : "/categories",
				type : "GET"
			};
			ajax.ajaxRequest(options, (res) => {
				if(res.type == "ok") this.props.getData(res.categories, false)
			});
		});
	}

	getCategoryTxt (v){
		let txt;
		switch(v){
			case "0" : txt = "Κοντομάνικες μπλούζες"; break;
			case "1" : txt = "Μακρυμάνικες μπλούζες"; break;
			case "2" : txt = "Πλεκτές μπλούζες"; break;
			case "3" : txt = "Αμάνικες μπλούζες"; break;
			case "4" : txt = "Πλεκτές ζακέτες"; break;
			case "5" : txt = "Φούτερ ζακέτες"; break;
			case "6" : txt = "Κοντομάνικα πουκάμισα"; break;
			case "7" : txt = "Μκρυμάνικα πουκάμισα"; break;
			case "8" : txt = "Αμάνικα μπουφάν"; break;
			case "9" : txt = "Μπουφάν"; break;
			case "10" : txt = "Τζίνς"; break;
			case "11" : txt = "Καπαρντινέ παντελόνια"; break;
			case "12" : txt = "Φούτερ παντελόνια"; break;
			case "13" : txt = "Βερμούδες"; break;
		}
		return txt;
	}
	//delete product
	deleteHandler (e, i){
		let res = confirm("Are you sure you want to delete '"+this.props.products[i].title+"'?");
		if(res) this.props.deleteCategory(this.props.products[i])
	}
	//open edit mode for product
	editHandler (e, i){
		if(!e.target.classList.contains("product-del") && 
			!e.target.classList.contains("product-comments")) 
			this.props.popupState(i)
	}
	//category filter on top, change category
	changeCategoryHandler (e){
		this.setState({category: e.target.value})
	}
	//drag'n'drop
		dropHandler (e, i){
			this.props.rearrange(this.state.dragged, i)
		}
		dragHandler (e, i){
			this.setState({dragged : i})
		}
	//new product click
	openPopupHandler (){
		this.props.popupState("")
	}
	//open comments
	commentsHandler(e, i){
		if(e.target.classList.contains("product-comments")) this.props.popupStateComm(i)
	}

	render() {
		let { products, categories, popup, msg } = this.props;
		let { getCategoryTxt, deleteC, edit, changeCategory, drop, drag, openPopup, comments } = this;

		return (
			<div>
			{(this.props.login) ? 
				<div className="admin"
					onClick={(popup.products || popup.comments) ? this.props.closePopup : ""} >
					{(msg) ? <Message text={msg} /> : "" }
					<AdminProducts products={products} getCategoryTxt={getCategoryTxt}
						categories={categories} changeCategory={changeCategory}
						comments={comments}
						onClick={(popup.products) ? this.props.closePopup : ""} deleteC={deleteC}
						edit={edit} drop={drop} drag={drag} openPopup={openPopup} state={this.state} />
					{(popup.products) ? <Popup data={popup.productsIdx} /> : "" }
					{(popup.comments) ? <PopupComm data={popup.commentsIdx} /> : "" }
				</div>
			: ""}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);