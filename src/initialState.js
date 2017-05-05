import { el } from './constants.js'

let main = {
	path : "main",
	login : false,
	langIdx : 0,
	lang : el,
	langStr : "el",
	selectedCategory : {
		idx : -1,
		name : ""
	},
	selectedProduct : {
		idx : -1,
		name : ""
	},
	product : {},		//product opened in page
	productSearch : [],	//products returned after search
	categories : [
		{
			id : "tops",
			img : "./img/categories/blouzes.jpg",
			sub : ["short","long","knitwear","tanktop"]
		},
		{
			id : "cardigans",
			img : "./img/categories/zaketes.jpg",
			sub : ["knitwear", "hoodies"]
		},
		{
			id : "shirts",
			img : "./img/categories/shirts.jpg",
			sub : ["short","long"]
		},
		{
			id : "jackets",
			img : "./img/categories/jackets.jpg",
			sub : ["tanktop", "normal"]
		},
		{
			id : "trousers",
			img : "./img/categories/trousers.jpg",
			sub : ["jeans", "chinos", "joggers", "shorts"]
		},
	],
	subCategories : [],
	products : [],
	sorted : "",
	tags : [],
	cart : [],
	cartSizes : [],
	cartColors : [],
	cartQuant : [],
	cartItems : 0,
	cartTotal : 0,
	showCart : false
}

let popup = {
	categories : false,
	categoriesIdx : "",
	products : false,
	productsIdx : "",
	comments : false,
	commentsIdx : ""
};

let general = {
	msg : ""
};

let categories = []
let products = []

export default { main, categories, products, popup, general }