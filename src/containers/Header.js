/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderC from '../components/Header.js'
import { set_lang, change_path, get_products_frontend, show_cart } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state, ownProps) {
	return {
		lang : state.main.lang,
		langIdx : state.main.langIdx,
		langStr : state.main.langStr,
		path : state.main.path,
		cartItems : state.main.cartItems,
		categories : state.main.categories,
		categoryIdx : state.main.selectedCategory.idx,
		productIdx : state.main.selectedProduct.idx,
		cart : state.main.cart,
		cartSizes : state.main.cartSizes,
		cartColors : state.main.cartColors,
		cartQuant : state.main.cartQuant,
		cartFlag : state.main.showCart
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setLang: (lang) => {
			dispatch(set_lang(lang))
		},
		change_path: (category, product, categories) => {
			if(product) dispatch(get_products_frontend(category, product))
			dispatch(change_path(category, product, categories))
		},
		showCart: (flag) => {
			dispatch(show_cart(flag));
		}
	};
}

class Header extends Component {
	static get propTypes() {
		return {
			path: PropTypes.string.isRequired,
			categories: PropTypes.array.isRequired,
			cartItems: PropTypes.number.isRequired
		}
	}

	constructor(props) {
		super(props);

		this.delay = 0;
		this.items = this.props.cartItems;

		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

		this.state = {
			mobile : check,		//check if mobile device
			showHead : false, 	//on mobile show categories
			langShow : false,	//show language menu
			subShow : false,	//show sub categories
			anime : false
		}

		this.home = this.homeHandler.bind(this)
		this.clickEvent = this.clickEventHandler.bind(this)
		this.showSub = this.showSubHandler.bind(this)
		this.showLang = this.showLangHandler.bind(this)
		this.changeHead = this.changeHeadHandler.bind(this)
		this.changeLang = this.changeLangHandler.bind(this)
		this.clickCat = this.clickCatHandler.bind(this)
		this.clickSub = this.clickSubHandler.bind(this)
		this.showCart = this.showCartHandler.bind(this)
		this.onCart = this.onCartHandler.bind(this)
		this.onCheckout = this.onCheckoutHandler.bind(this)
	}

	componentDidMount() {
		document.title = "eShop"
		
	}

	componentWillUnmount(){
		let path = location.pathname;
		const unlisten = history.listen((location, action) => {
			if(action == "POP"){
				
				if(path == "/") path = ""
				// if(path.indexOf("categories") >= 0){
				// 	path = path.substring(path.lastIndexOf(":")+1, path.length);
				// }
				if(path == "/") this.props.change_path(path, this.props.categories);
				unlisten()
			}
		});
	}
	componentDidUpdate(){
		let timeout = 0;
		clearTimeout(timeout)
		document.getElementById("cart").style.animation = ""
		if(this.items != this.props.cartItems){
			document.getElementById("cart").style.animation = "bounceIn 1s 1";
		}
		timeout = setTimeout( ()=> {
			document.getElementById("cart").style.animation = ""
		}, 1000);
		this.items = this.props.cartItems;
	}

	clickEventHandler() {
		
	}
	//show/hide sub categories
	showSubHandler(flag, type) {
		if(flag && type && this.state.subShow){
			this.flag = setTimeout(()=>{
				this.setState({subShow : flag})
			}, 500)
		}else{
			clearTimeout(this.flag)
			this.setState({subShow : flag})
		}
	}
	//show/hide language
	showLangHandler(flag) {
		this.setState({langShow : flag})
	}
	//select language
	changeLangHandler(lang) {
		this.setState({langShow : false})
		this.props.setLang(lang);
	}
	//go to home page
	homeHandler(){
		this.setState({subShow : false});
		this.props.change_path("", "", this.props.categories);
		history.push("/");
	}
	//click on bars (mobile only)
	changeHeadHandler(){
		let flag = this.state.showHead;
		this.setState({showHead : !flag})
	}
	//click category
	clickCatHandler(category) {
		this.setState({subShow : false});
		this.props.change_path(category, "", this.props.categories);
		history.push("/categories");
	}
	//click sub category
	clickSubHandler(category, product) {
		this.setState({subShow : false});
		this.props.change_path(category, product, this.props.categories);
		history.push("/products");
	}
	//show cart
	showCartHandler(flag){
		if(flag){
			if(this.props.cart.length > 0) this.props.showCart(flag);
		}else this.props.showCart(flag);
	}
	//go to cart
	onCartHandler(){
		this.props.showCart(false);
		this.props.change_path(0, 0, this.props.categories);
		history.push("/cart");
	}
	//go to checkout
	onCheckoutHandler(){
		this.props.showCart(false);
		this.props.change_path(0, 0, this.props.categories);
		history.push("/checkout");
	}

	render() {
		let { lang, langIdx, langStr, path, 
				cartItems, cart, cartFlag, cartSizes, cartColors, cartQuant,
				categories, categoryIdx, productIdx } = this.props;
		let { home, clickEvent, changeLang, showLang, showSub, changeHead,
				clickCat, clickSub, showCart, onCart, onCheckout } = this

		return (
			<div className="">
				<HeaderC state={this.state} home={home}
					categoryIdx={categoryIdx} productIdx={productIdx}
					clickEvent={clickEvent}  cartItems={cartItems}
					path={path} lang={lang} langIdx={langIdx} langStr={langStr} categories={categories}
					clickSub={clickSub} clickCat={clickCat} changeHead={changeHead}
					cart={cart} showCart={showCart} cartFlag={cartFlag} 
					cartSizes={cartSizes} cartColors={cartColors} cartQuant={cartQuant}
					onCart={onCart} onCheckout={onCheckout}
					changeLang={changeLang} showLang={showLang} showSub={showSub} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);