/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoriesC from '../components/Categories.js'
import Header from './Header.js'
import { get_products_frontend, change_path } from '../actions.js'
import history from '../history.js'
import { sub } from '../constants.js'

function mapStateToProps(state, ownProps) {
	return {
		path : state.main.path,
		lang : state.main.lang,
		selectedCategory : state.main.selectedCategory,
		categories : state.main.categories,
		sub : state.main.subCategories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		change_path: (category, product, categories) => {
			if(product) dispatch(get_products_frontend(category, product))
			dispatch(change_path(category, product, categories))
		},
	};
}

class Categories extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.clickCategory = this.clickCategoryHandler.bind(this);
	}

	componentDidMount() {

	}

	clickCategoryHandler(i){
		this.props.change_path(this.props.selectedCategory.name, this.props.sub[i], this.props.categories);
		history.push("/products");
	}

	render() {
		let { lang, sub, selectedCategory } = this.props
		let { clickCategory } = this

		return (
			<div className="">
				<CategoriesC lang={lang} categories={sub} 
					selectedCategory={selectedCategory} clickCategory={clickCategory} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);