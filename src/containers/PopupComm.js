/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PopupComm from '../components/PopupComm.js'
import { update_product } from '../actions.js'
import ajax from 'ajax-query'
import { getUndefined } from '../general/logic.js'

function mapStateToProps(state, ownProps) {
	return {
		data : ownProps.data,
		categories : state.categories,
		item : state.products[ownProps.data]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		update_product:
			(id, oldName, name, price, category, descr, size, color, tag, fabric, quality, dims, img, comm) => {
			dispatch(
				update_product(
					id, oldName, name, price, category, descr, size, color, tag, fabric, quality, dims, img, comm))
		}
	};
}

class Main extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.show = this.showHandler.bind(this);
	}

	componentDidMount() {

	}

	showHandler(flag, i){
		let comm = this.props.item.comments;
		comm[i].show = flag;
		this.props.update_product(
			this.props.item.id, 
			this.props.item.title, 
			this.props.item.title, 
			this.props.item.price, 
			this.props.item.category, 
			this.props.item.descr, 
			this.props.item.size, 
			this.props.item.color, 
			this.props.item.tag, 
			this.props.item.fabric, 
			this.props.item.qual, 
			this.props.item.dims, 
			this.props.item.img, 
			comm
		);
	}

	render() {
		let { item } = this.props

		return (
			<div className="main">
				<PopupComm product={item} show={this.show} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);