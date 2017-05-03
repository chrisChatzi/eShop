/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Header.js'
import { get_categories } from '../actions.js'
import { el, en } from '../constants.js'
import ajax from 'ajax-query'

import Footer from '../containers/Footer'

function mapStateToProps(state) {
	return {
		path : state.main.path,
		lang : state.main.lang,
		categories : state.categories
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getData: (res) => {
			dispatch(get_categories(res))
		},
	};
}

class Main extends Component {
	static get propTypes() {
		return {
			path: PropTypes.string.isRequired,
			categories: PropTypes.array.isRequired
		}
	}

	constructor(props) {
		super(props);

		this.addContactHandler = this.addContactHandlerFunc.bind(this)
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

	addContactHandlerFunc() {
		this.props.addContact();
	}

	render() {
		let { path, lang, categories } = this.props;
		let { addContactHandler } = this;
		
		return (
			<div className="main">
				<div className="content">
					<div className="best">{lang.home1}</div>
				</div>
			</div>

		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);