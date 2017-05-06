/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
import Footer from '../containers/Footer'
import { change_path, get_products_frontend } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		lang : state.main.lang,
		categories : state.main.categories
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

class Main extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.timer = 0;

		this.state = {
			carousel : 1
		}

		this.open = this.openHandler.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		//carousel
		this.carouselLoop();
		this.timer = setInterval( () => {
			this.carouselLoop();
		}, 5000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	carouselLoop(){
		let carEl = document.getElementById("carousel")
		let carTagEl = document.getElementById("carousel-tag")
		let carButtonEl = document.getElementById("carousel-button")
		setTimeout( () => {
			carEl.classList.remove("animated");
			carEl.classList.remove("fadeIn");
			carTagEl.classList.remove("animated");
			carTagEl.classList.remove("pulse");
		}, 1000);
		carEl.className += " animated fadeIn";
		carTagEl.className += " animated pulse";
		let idx = this.state.carousel;
		idx++;
		if(idx == 4) idx = 1;
		this.setState({carousel : idx});

		carTagEl.style.marginLeft = -(carTagEl.offsetWidth/2)+"px"
		carButtonEl.style.marginLeft = -(carButtonEl.offsetWidth/2)+"px"
	}
	//open carousel on img click
	openHandler(){
		switch(this.state.carousel){
			case 1:
				this.props.change_path("trousers", "short", this.props.categories);
			break;
			case 2:
				this.props.change_path("trousers", "jeans", this.props.categories);
			break;
			case 3:
				this.props.change_path("tops", "long", this.props.categories);
			break;
		}
		history.push("/products");
	}

	render() {	
		return (
			<div>
				<MainC lang={this.props.lang} state={this.state} open={this.open} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);