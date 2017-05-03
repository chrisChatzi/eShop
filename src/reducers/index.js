import { combineReducers } from 'redux'
import main from './main'
import categories from './categories'
import products from './products'
import popup from './popup'
import general from './general'

const reducer = combineReducers({
	main,
	categories,
	products,
	popup,
	general
})

export default reducer