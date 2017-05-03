/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CheckoutC from '../components/Checkout.js'
import { make_order } from '../actions.js'
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
		makeOrder: (obj) => {
			dispatch(make_order(obj))
		}
	};
}

class Checkout extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.id = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});

		this.state = {
			checkoutProcess : 1,	//1. delivery 2. billing 3. review
			title : "1",
			email : "",
			phone : "",
			name : "",
			lastName : "",
			street : "",
			number : "",
			info : "",
			postcode : "",
			city : "",
			processDone : [false, false, false, false],
			deliveryErrors : [false, false, false, false, false, false, false, false],
			paymentType : 0,
			sendType : 0,
			sendCost : 0
		}

		this.header = this.headerHandler.bind(this);
		this.delivery = this.deliveryHandler.bind(this);
		this.deliveryDone = this.deliveryDoneHandler.bind(this);
		this.payment = this.paymentHandler.bind(this);
		this.sendOrder = this.sendOrderHandler.bind(this);
		this.makeOrder = this.makeOrderHandler.bind(this);
	}

	componentDidMount() {
		let h = window.innerHeight;
		document.getElementById("checkoutBody").style.minHeight = h+"px";
	}
	//header click change type (delivery, billing or review)
	headerHandler(val){
		this.setState({checkoutProcess : val})
	}
	//delivery form inputs type
	deliveryHandler(e, type){
		switch(type){
			case "title" : this.setState({"title" : e.target.value}); break;
			case "name" : this.setState({"name" : e.target.value}); break;
			case "lastName" : this.setState({"lastName" : e.target.value}); break;
			case "email" : this.setState({"email" : e.target.value}); break;
			case "phone" : this.setState({"phone" : e.target.value}); break;
			case "street" : this.setState({"street" : e.target.value}); break;
			case "number" : this.setState({"number" : e.target.value}); break;
			case "info" : this.setState({"info" : e.target.value}); break;
			case "postcode" : this.setState({"postcode" : e.target.value}); break;
			case "city" : this.setState({"city" : e.target.value}); break;
		}
	}
	//delivery next button clicked
	deliveryDoneHandler(i){
		switch(i){
			case 1:{ 	//details
				let array = [false, false, false, false, false, false, false, false];
				if(this.state.name.length < 2) array[0] = true;
				if(this.state.lastName.length < 2) array[1] = true;
				if(this.state.email.length < 2) array[2] = true;
				if(this.state.phone.length != 10 || isNaN(this.state.phone)) array[3] = true;
				if(this.state.street.length < 2) array[4] = true;
				if(this.state.number.length < 1) array[5] = true;
				if(this.state.postcode.length < 5 || isNaN(this.state.postcode)) array[6] = true;
				if(this.state.city.length < 1) array[7] = true;
				this.setState({ deliveryErrors : array });
				let processDone = [true, true, false, false]
				if(array.join("").indexOf("true") < 0) this.setState({checkoutProcess : 2, processDone});
				break;
			}
			case 2:{
				if(this.state.paymentType != 0){
					let processDone = [true, true, true, false]
					if(this.state.paymentType == 4){
						processDone = [true, true, false, false] 
						this.setState({checkoutProcess : 4, processDone});
					}else this.setState({checkoutProcess : 3, processDone});
				}
				break;
			}
			case 3:{
				if(this.state.sendType != 0){
					let processDone = [true, true, true, false]
					this.setState({checkoutProcess : 4, processDone});
				}
				break;
			}
		}
	}
	//choose payment type
	paymentHandler(i){
		this.setState({paymentType : i});
	}
	//choose courrier type
	sendOrderHandler(i){
		this.setState({sendType : i});
		if(i == 1) this.setState({sendCost : 5})
		if(i == 2) this.setState({sendCost : 9})
	}
	//make order
	makeOrderHandler(){
		let products = [], sizes =[], colors = [], names=[], ids =[], prices = []
		for(let i=0; i<this.props.cart.length; i++){
			products.push(this.props.cart[i]._id);
			ids.push(this.props.cart[i].id)
			prices.push(this.props.cart[i].price)
			names.push(this.props.cart[i].title[0])
			sizes.push(this.props.cart[i].size[this.props.cartSizes[i]])
			colors.push(this.props.cart[i].color[this.props.cartColors[i]])
		}
		let obj = {
			id : this.id,
			title : this.state.title,
			name : this.state.name,
			lastName : this.state.lastName,
			email : this.state.email,
			phone : this.state.phone,
			street : this.state.street,
			number : this.state.number,
			info : this.state.info,
			postcode : this.state.postcode,
			city : this.state.city,
			sendType : this.state.sendType,
			sendCost : this.state.sendCost,
			paymentType : this.state.paymentType,
			totalCost : this.props.cartTotal,
			products,
			cartIds : ids,
			cartNames : names,
			cartSizes : sizes,
			cartColors : colors,
			cartQuant : this.props.cartQuant,
			cartPrices : prices
		}
		this.props.makeOrder(obj)
		history.push("/order")
	}

	render() {
		let { cart, cartSizes, cartColors, cartQuant, cartTotal, lang, langIdx } = this.props
		let { header, delivery, deliveryDone, payment, sendOrder, makeOrder } = this

		return (
			<div className="">
				<CheckoutC state={this.state}
					cart={cart} cartSizes={cartSizes} cartColors={cartColors} 
					cartQuant={cartQuant} cartTotal={cartTotal}
					header={header} delivery={delivery} deliveryDone={deliveryDone} 
					payment={payment} sendOrder={sendOrder} makeOrder={makeOrder}
					lang={lang} langIdx={langIdx} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);