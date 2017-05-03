/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FooterC from '../components/Footer.js'
import history from '../history.js'

function mapStateToProps(state, ownProps) {
	return {
		lang : state.main.lang
	};
}

function mapDispatchToProps(dispatch) {
	return {

	};
}

class Footer extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.delivery = this.deliveryHandler.bind(this);
		this.size = this.sizeHandler.bind(this);
		this.legal = this.legalHandler.bind(this);
	}

	componentDidMount() {

	}

	deliveryHandler(){

	}
	sizeHandler(){

	}
	legalHandler(){
		history.push("/legal")
	}

	render() {
		let {delivery, size, legal} = this
		return (
			<div className="">
				<FooterC lang={this.props.lang} 
				delivery={delivery} size={size} legal={legal}/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);