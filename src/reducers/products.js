import init from '../initialState'
import { get_products_str } from '../constants.js'

const state_update = (state = init.products, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case get_products_str: {
			newstate = action.res
			return newstate
		}
		default:
			return state || init.categories
	}
}

export default state_update