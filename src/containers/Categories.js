/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoriesC from '../components/Categories.js'
import Header from './Header.js'

function mapStateToProps(state, ownProps) {
	return {
		path : state.main.path,
		lang : state.main.lang,
		selectedCategory : state.main.selectedCategory,
		categories : state.main.subCategories
	};
}

function mapDispatchToProps(dispatch) {
	return {

	};
}

class Categories extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		let { lang, categories, selectedCategory } = this.props

		return (
			<div className="">
				<CategoriesC lang={lang} categories={categories} selectedCategory={selectedCategory} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);