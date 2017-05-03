/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../history.js'
import Category from './Category.js'
import { login_user } from '../actions.js'
import ajax from 'ajax-query'

function mapStateToProps(state) {
	return {
		login : state.main.login
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (user, pass) => {
			dispatch(login_user({user, pass}));
		}
	};
}

class Main extends Component {
	static get propTypes() {
		return { }
	}

	constructor(props) {
		super(props);

		this.state = {
			"user" : "",
			"pass" : ""
		}

		this.clickEvent = this.clickHandler.bind(this);
		this.loginEvent = this.loginHandler.bind(this);
		this.inputEvent = this.inputHandler.bind(this);
	}

	componentDidMount() {
		document.title = "Admin";
	}

	clickHandler (path){
		// let path = e.currentTarget.textContent;
		history.push('/admin/'+path.toLowerCase())
	}
	inputHandler (e, user){
		if(user) this.setState({"user" : e.target.value})
		else this.setState({"pass" : e.target.value})
	}
	loginHandler (e){
		this.props.loginUser(this.state.user, this.state.pass);
	}

	render() {
		let { clickEvent, inputEvent, loginEvent } = this

		return (
			<div className="admin">
				{(this.props.login) ? 
					<div>
						<div onClick={()=>clickEvent("products")} className="option">Προϊόντα</div>
						<div onClick={()=>clickEvent("stats")} className="option">Στατιστικά</div>
					</div>
				:
					<div>
						<input onChange={(e) => this.inputEvent(e, true)} placeholder="Username" />
						<input type="password" 
							onChange={(e) => this.inputEvent(e, false)} placeholder="Password" />
						<button onClick={this.loginEvent} >OK</button>
					</div>
				}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);