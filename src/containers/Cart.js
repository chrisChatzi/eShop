/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CartC from '../components/Cart.js'
import { delete_item, change_quant } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state, ownProps) {
	return {
		cart: state.main.cart,
		cartSizes: state.main.cartSizes,
		cartColors: state.main.cartColors,
		cartQuant: state.main.cartQuant,
		cartTotal: state.main.cartTotal,
		lang : state.main.lang,
		langIdx : state.main.langIdx
	};
}

function mapDispatchToProps(dispatch) {
	return {
		deleteItem: (i) => {
			dispatch(delete_item(i));
		},
		changeQuant: (i, val) => {
			dispatch(change_quant(i, val));
		}
	};
}

class Cart extends Component {
	static get propTypes() {
		return {}
	}

	constructor(props) {
		super(props);

		let array = [];
		for(let i=0; i<this.props.cart.length; i++){
			array.push(this.props.cart[i].price * this.props.cartQuant[i]);
		}
		this.state = {
			totalItem : array,
			quant : this.props.cartQuant
		}

		this.checkout = this.checkoutHandler.bind(this)
		this.changeQuant = this.changeQuantHandler.bind(this)
		this.deleteItem = this.deleteItemHandler.bind(this)
	}

	componentDidMount() {
		let h = window.innerHeight;
		document.getElementById("cartBody").style.minHeight = h+"px";
	}
	//go to checkout
	checkoutHandler(){
		history.push("/checkout");
	}
	//change quantity of product
	changeQuantHandler(v, i){
		this.props.changeQuant(i, v);
		this.calcPrices(i);
	}
	//remove product
	deleteItemHandler(i){
		let quant = this.state.quant;
		quant[i] = 0;
		this.calcPrices(i);
		this.props.deleteItem(i);
	}
	//calculate prices
	calcPrices(i){
		let quant = this.state.quant;
		let total = this.state.totalItem;
		let totalAll = this.state.total;
		total[i] = this.props.cart[i].price * quant[i];
		totalAll = total.reduce( (a, b) => {
			return parseInt(a, 10)+parseInt(b, 10);
		});
		this.setState({quant : quant, total : totalAll})
	}

	render() {
		let { cart, cartSizes, cartColors, cartQuant, cartTotal, lang, langIdx } = this.props
		let { changeQuant, deleteItem, checkout } = this

		return (
			<div className="">
				<CartC state={this.state} checkout={checkout}
					cart={cart} cartSizes={cartSizes} cartColors={cartColors} cartQuant={cartQuant}
					cartTotal={cartTotal}
					changeQuant={changeQuant} deleteItem={deleteItem}
					lang={lang} langIdx={langIdx} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);