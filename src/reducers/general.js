import init from '../initialState'
import { msg_str } from '../constants.js'

const state_update = (state = init.general, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		case msg_str: {
			newstate.msg = action.text;
			return newstate
		}
		default:
			return state || init.categories
	}
}

export default state_update