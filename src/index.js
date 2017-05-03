import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router';
import history from './history.js'
import {en} from './constants.js'

import Main from './routes/Main'
import Admin from './routes/Admin'
import AdminCategories from './routes/AdminCategories'
import AdminProducts from './routes/AdminProducts'
import Categories from './routes/Categories'
import Products from './routes/Products'
import Details from './routes/Details'
import Cart from './routes/Cart'
import Checkout from './routes/Checkout'
import Order from './routes/Order'
import Legal from './routes/Legal'

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

let store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware)
)

//clear cache
for(let i=0; i<en.categories.length; i++){
	for(let j=0; j<en.sub[i].length; j++)
		localStorage.setItem("sub-"+en.categories[i].toLowerCase()+"-"+en.sub[i][j].toLowerCase(), "");
}

desktop()
function desktop(){
	render(
		<Provider store={store}>
			<Router history={history}><div>
				<Route exact path='/' component={Main} />
				<Route path='/admin' component={Admin} />
				<Route path='/admin/products' component={AdminProducts} />
				<Route path='/categories' component={Categories} />
				<Route path='/products' component={Products} />
				<Route path='/product/:title' component={Details} />
				<Route path='/cart' component={Cart} />
				<Route path='/checkout' component={Checkout} />
				<Route path='/order' component={Order} />
				<Route path='/legal' component={Legal} />
			</div></Router>
		</Provider>,
		document.getElementById('app')
	)
}