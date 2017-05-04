/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductsC from '../components/Products.js'
import Header from './Header.js'
import history from '../history.js'
import { get_products_frontend, selected_product, sort_products } from '../actions.js'

function mapStateToProps(state, ownProps) {
	return {
		category : state.main.selectedCategory.name,
		sub : state.main.selectedProduct.name,
		prodIdx : state.main.selectedProduct.idx,
		catIdx : state.main.selectedCategory.idx,
		products : state.main.products,
		noProducts : state.main.noProducts,
		tags : state.main.tags,
		lang : state.main.lang,
		langIdx : state.main.langIdx
	};
}

function mapDispatchToProps(dispatch) {
	return {
		get_products: (path) => {
			dispatch(get_products_frontend(path));
		},
		selectedProduct: (v) => {
			dispatch(selected_product(v));
		},
		sortProducts: (products, by, type) => {
			dispatch(sort_products(products, by, type));
		}
	};
}

class Categories extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.prodNum = this.props.products.length;

		this.state = {
			productsRecieved : false,
			sortShow : false,
			sorted : "",
			filterShow : false,
			color : [],	//holds color filtered
			size : [],
			tag : [],
			colorFlag : [],	//check if 
			sizeFlag : [],
			tagFlag : [],
		};

		this.productClick = this.productClickHandler.bind(this);
		this.sortAction = this.sortActionHandler.bind(this);
		this.sortClick = this.sortClickHandler.bind(this);
		this.filterClick = this.filterClickHandler.bind(this);
		this.colorClick = this.colorClickHandler.bind(this);
		this.sizeClick = this.sizeClickHandler.bind(this);
		this.tagClick = this.tagClickHandler.bind(this);
	}

	componentDidMount(){
		let h = window.innerHeight;
		document.getElementById("productsBody").style.minHeight = h+"px";
	}
	componentDidUpdate(){
		if(this.props.products.length == 0)
			document.getElementById("result").innerHTML = this.props.lang.noProducts
		let line = document.getElementById('line');
		let wSort = document.getElementById('sort').offsetWidth;
		let wFilter = document.getElementById('filter').offsetWidth;
		line.style.opacity = 1;
		if(this.state.sortShow){
			line.style.left = 0;
			line.style.right = "auto";
			line.style.width = wSort+"px";
		}
		else if(this.state.filterShow){
			line.style.right = 0;
			line.style.left = "auto";
			line.style.width = wFilter+"px";
		}else line.style.opacity = 0;
	}
	//helper func to get array of if filters are applied(true) per filter type
	checkFilter(type){
		let array = []
		this.props.products.map( (v, i) => {
			let res = (this.state[type].length > 0) ? false : true;
			array.push(res)
			v[type].map( (v2) => {
				if(this.state[type].indexOf(v2) >= 0) array[i] = true;
			});
		});
		return array
	}
	//click on product
	productClickHandler(v){
		this.props.selectedProduct(v);
		history.push("/product/:"+v._id)
	}
	//sort action
	sortActionHandler(by, type){
		this.props.sortProducts(this.props.products, by, type);
		this.setState({sorted : type})
	}
	//show sort div
	sortClickHandler(){
		this.setState({
			sortShow : !this.state.sortShow,
			filterShow : false
		});
	}
	//show filter div
	filterClickHandler(){
		this.setState({
			sortShow : false,
			filterShow : !this.state.filterShow
		});
	}
	// filter color click
	colorClickHandler(v){
		let array = this.state.color;
		if(array.indexOf(v) < 0) array.push(v)
		else array.splice(array.indexOf(v), 1)
		this.setState({color : array});
		this.setState({colorFlag : this.checkFilter("color")})
	}
	// filter size click
	sizeClickHandler(v){
		let array = this.state.size;
		if(array.indexOf(v) < 0) array.push(v)
		else array.splice(array.indexOf(v), 1)
		this.setState({size : array});
		this.setState({sizeFlag : this.checkFilter("size")})
	}
	// filter tag click
	tagClickHandler(v){
		let array = this.state.tag;
		if(array.indexOf(v) < 0) array.push(v)
		else array.splice(array.indexOf(v), 1)
		this.setState({tag : array});
		this.setState({tagFlag : this.checkFilter("tag")})
	}

	render() {
		let { category, sub, products, tags, prodIdx, catIdx, lang, langIdx } = this.props
		let { productClick, sortAction, sortClick, filterClick, colorClick, sizeClick, tagClick } = this

		return (
			<div className="">
				<ProductsC products={products} state={this.state} tags={tags}
					category={category} sub={sub}
					productClick={productClick} sortClick={sortClick}
					sortAction={sortAction}
					filterClick={filterClick} colorClick={colorClick}
					sizeClick={sizeClick} tagClick={tagClick}
					lang={lang} langIdx={langIdx}
					prodIdx={prodIdx} catIdx={catIdx} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);