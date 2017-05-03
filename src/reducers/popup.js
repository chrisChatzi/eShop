import init from '../initialState'
import { rearrange } from '../general/logic.js'
import { popupCategory_status_str, popupProducts_status_str, popupComments_status_str } from '../constants.js'

const state_update = (state = init.popup, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case popupCategory_status_str: {
			newstate.categories = action.show;
			newstate.categoriesIdx = action.idx;
			return newstate;
		}
		case popupProducts_status_str: {
			newstate.products = action.show;
			newstate.productsIdx = action.idx;
			return newstate;
		}
		case popupComments_status_str: {
			newstate.comments = action.show;
			newstate.commentsIdx = action.idx;
			return newstate;
		}
		default:
			return state || init.categories
	}
}

export default state_update