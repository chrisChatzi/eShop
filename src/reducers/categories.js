import init from '../initialState'
import { rearrange } from '../general/logic.js'
import { get_categories_str, rearrange_categories_str } from '../constants.js'

const state_update = (state = init.categories, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case get_categories_str: {
			if(action.res) newstate = action.res;
			return newstate
		}
		case rearrange_categories_str: {
			let newArray = rearrange(newstate, action.from, action.to);
			newstate = newArray;
			return newstate
		}
		default:
			return state || init.categories
	}
}

export default state_update