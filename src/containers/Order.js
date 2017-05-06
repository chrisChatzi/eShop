/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OrderC from '../components/Order.js'
import history from '../history.js'

function mapStateToProps(state, ownProps) {
	return {
		lang : state.main.lang,
		langIdx : state.main.langIdx
	};
}

function mapDispatchToProps(dispatch) {
	return {

	};
}

class Order extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.home = this.homeHandler.bind(this)
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	homeHandler(){
		history.push("/")
	}

	render() {
		let { lang, langIdx } = this.props

		return (
			<div className="">
				<OrderC lang={lang} langIdx={langIdx} home={this.home} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);