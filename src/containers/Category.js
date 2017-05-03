/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category.js'

function mapStateToProps(state, ownProps) {
	return {
		data : ownProps.data
	};
}

function mapDispatchToProps(dispatch) {
	return {
		
	};
}

class Main extends Component {
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
		let { data } = this.props
		
		return (
			<div className="main">
				<Category data={data} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);