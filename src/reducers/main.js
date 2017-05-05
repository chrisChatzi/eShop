import init from '../initialState'
import { el, en, login_str, set_lang_str, change_path_str, sort_products_str, delete_item_str,
	change_quant_str, clear_cart_str, search_item_str,
		get_products_frontend_str, selected_product_str, update_cart_str, show_cart_str
} from '../constants.js'
import history from '../history.js'

const state_update = (state = init.main, action) => {
	let newstate = Object.assign({}, state);
	switch (action.type) {
		//login (not there)
		case login_str: {
			newstate.login = action.res.flag
			return newstate
		}
		//show cart on hover
		case show_cart_str: {
			newstate.showCart = action.flag
			return newstate
		}
		//set language
		case set_lang_str: {
			let lang;
			let langIdx;
			switch(action.lang){
				case "el" : 
					lang = el; 
					langIdx = 0;
				break;
				case "en" : 
					lang = en;
					langIdx = 1;
				break;
				// case "de" : 
				// 	lang = de;
				// 	langIdx = 2;
				// break;
			}
			newstate.langStr = action.lang;
			newstate.langIdx = langIdx;
			newstate.lang = lang;
			return newstate
		}
		//change path
		case change_path_str: {
			let sub = [];
			let name = "";
			let idx = -1;
			if(action.categories){
				action.categories.map( (v, i) => {
					if(v.id == action.category){
						sub = v.sub;
						idx = i
					}
				});
			}
			newstate.selectedCategory.idx = idx
			newstate.selectedCategory.name = action.category
			newstate.subCategories = sub;
			idx = -1;
			if(action.product){
				sub.map( (v, i) => {
					if(v == action.product){
						name = v;
						idx = i
					}
				});
			}
			newstate.selectedProduct.idx = idx
			newstate.selectedProduct.name = name
			return newstate
		}
		//get products
		case get_products_frontend_str: {
			newstate.products = action.products;
			newstate.tags = action.tags;
			return newstate
		}
		//select one product
		case selected_product_str: {
			newstate.product = action.product;
			return newstate
		}
		//sort
		case sort_products_str: {
			let array = action.products.slice(0,action.products.length)
			newstate.products = array;
			return newstate
		}
		//search
		case search_item_str: {
			newstate.productSearch = action.products;
			return newstate
		}
		//update cart
		case update_cart_str: {
			let array = newstate.cart.slice()
			let sizes = newstate.cartSizes.slice()
			let colors = newstate.cartColors.slice()
			let quant = newstate.cartQuant.slice()
			if(action.flag){
				array.push(action.product);
				sizes.push(action.size);
				colors.push(action.color);
				quant.push(1);
			}
			newstate.cart = array
			newstate.cartSizes = sizes
			newstate.cartColors = colors
			newstate.cartQuant = quant
			let c = newstate.cartItems;
			c++;
			let total = 0;
			for(let i=0; i<array.length; i++)
				total += array[i].price * quant[i];
			newstate.cartTotal = total;
			newstate.cartItems = c;
			return newstate
		}
		//delete item from cart
		case delete_item_str: {
			let array = newstate.cart.slice()
			let sizes = newstate.cartSizes.slice()
			let colors = newstate.cartColors.slice()
			let quant = newstate.cartQuant.slice()
			array.splice(action.i, 1);
			sizes.splice(action.i, 1);
			colors.splice(action.i, 1);
			quant.splice(action.i, 1);
			newstate.cart = array
			newstate.cartSizes = sizes
			newstate.cartColors = colors
			newstate.cartQuant = quant
			let c = newstate.cartItems;
			c--;
			let total = 0
			console.log(q)
			for(let i=0; i<array.length; i++)
				total += array[i].price * quant[i];
			newstate.cartTotal = total;
			newstate.cartItems = c;
			return newstate
		}
		//change quantity of item in cart
		case change_quant_str: {
			let array = newstate.cartQuant;
			let quant = array[action.i];
			quant += action.val;
			if(quant > 5) quant = 5;
			if(quant < 1) quant = 1;
			array[action.i] = quant;
			newstate.cartQuant = array
			let total = 0
			let arrayC = newstate.cart.slice()
			for(let i=0; i<arrayC.length; i++)
				total += arrayC[i].price * array[i];
			newstate.cartTotal = total;
			return newstate
		}
		//clear cart
		case clear_cart_str: {
			let array = [];
			newstate.cart = array
			newstate.cartSizes = array
			newstate.cartColors = array
			newstate.cartQuant = array
			newstate.cartItems = 0
			newstate.cartTotal = 0
			return newstate
		}
		default:
			return state || init.main
	}
}

export default state_update