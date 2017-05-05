/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DeliveryC from '../components/Delivery.js'

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

class Delivery extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);
	}

	render() {
		let { lang, langIdx } = this.props

		return (
			<div className="">
				<DeliveryC lang={lang} langIdx={langIdx} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);