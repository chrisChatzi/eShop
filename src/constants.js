const login_str = "LOGIN"
const set_lang_str = "LANGUAGE"
const change_path_str = "PATH"
const get_products_frontend_str = "PRODUCT_FRONTEND"
const selected_product_str = "SELECTED_PRODUCT"
const update_cart_str = "UPDATE_CART"
const sort_products_str = "SORT_PRODUCTS"
const show_cart_str = "SHOW_CART"
const delete_item_str = "DELETE_ITEM_FROM_CART"
const change_quant_str = "CHANGE_QUANTITY"
const clear_cart_str = "CLEAR_CART"
const search_item_str = "SEARCH_ITEM"
// admin
const get_categories_str = "GET_CATEGORIES"
const get_products_str = "GET_PRODUCTS"
const rearrange_categories_str = "REARRANCE_CATEGORIES"
const popupCategory_status_str = "POPUPCATEGORY_STATUS"
const popupProducts_status_str = "POPUPPRODUCT_STATUS"
const popupComments_status_str = "POPUPCOMMENTS_STATUS"
const add_category_str = "ADD_CATEGORY"
const msg_str = "MESSAGE"
const popup_status_str = "POPUP_STATUS"
const add_contact_str = "ADD_CONTACT"
const edit_data_str = "EDIT_DATA"
const edit_contact_str = "EDIT_CONTACT"
const delete_contact_str = "DELETE_CONTACT"
//tags
const tags = ["skinny","slim","regular","classic","printed","round","v","polo",
			"winter","spring","jean","formal","casual","heavy","light","fit",
			"loose","ripped","chinno","jogger"]
//languages
const el = {
	//head
		search : "Αναζήτηση",
		categories : ["ΜΠΛΟYΖΕΣ","ΖΑΚEΤΕΣ","ΠΟΥΚAΜΙΣΑ","ΜΠΟΥΦAΝ","ΠΑΝΤΕΛOΝΙΑ"],
		sub : [
			["ΚΟΝΤΟΜΑΝΙΚΕΣ","ΜΑΚΡΥΜΑΝΙΚΕΣ","ΠΛΕΚΤΕΣ","ΑΜΑΝΙΚΕΣ"],
			["ΠΛΕΚΤΕΣ", "ΦΟΥΤΕΡ"],
			["ΚΟΝΤΟΜΑΝΙΚΑ","ΜΑΚΡΥΜΑΝΙΚΑ"],
			["ΑΜΑΝΙΚΑ", "ΜΠΟΥΦΑΝ"],
			["ΤΖΙΝΣ", "ΚΑΠΑΡΝΤΙΝΕ", "ΦΟΥΤΕΡ", "ΒΕΡΜΟΥΔΕΣ"]
		],
	//main
		home1 : "Τόσο φθηνά, όσο πουθενά",
		homeInfo : [
			"Παράδοση εντός 3 ημέρων με ___ courrier",
			"Δωρεάν μεταφορικά με αγορές άνω των 30\u20AC",
			"Επιστροφές εντός 7 ημερών",
			"Δυνατότητα παραλαβής από το κατάστημα"
		],
		carousel : [
			"Μπλούζες κοντομάνικες απο 7\u20AC",
			"Τζιν παντελόνια απο 19\u20AC",
			"Μπλούζες από 14\u20AC"
		],
		moreInfo : "Δες περισσότερα",
	//products
		products : "προϊόντα",
		sort : "Ταξινόμηση",
		sortDefault : "Χωρίς",
		sortAsc : "Τιμή αύξουσα",
		sortDesc : "Τιμή φθίνουσα",
		filter : "Φίλτρα",
		color : "Χρώμα",
		size : "Μέγεθος",
		quantity: "Ποσότητα",
		tag : "Ετικέτα",
		tags : {
			"skinny":"Skinny",
			"slim":"Slim",
			"regular":"Regular",
			"classic":"Classic",
			"printed":"Στάμπα",
			"round":"Στρόγγυλο",
			"v":"V",
			"polo":"Πόλο",
			"winter":"Χειμωνιάτικο",
			"spring":"Ανοιξιάτικο",
			"jean":"Τζιν",
			"formal":"Βραδυνό",
			"casual":"Καθημερινό",
			"heavy":"Βαρύ",
			"light":"Ελαφρύ",
			"fit":"Εφαρμοστό",
			"loose":"Φαρδύ",
			"ripped":"Σκισμένο"	,
			"chinno": "Καπαρντινέ",
			"jogger":"Φούτερ"
		},
		colors : {
			"red" : "Κόκκινο",
			"bordeaux" : "Μπορντό",
			"coral" : "Κοραλί",
			"orange" : "Πορτοκαλί",
			"apple" : "Σάπιο μήλο",
			"camel" : "Κάμελ",
			"mustard" : "Μουσταρδί",
			"yellow" : "Κίτρινο",
			"blue" : "Ρουά",
			"turquoise" : "Τυρκουάζ",
			"indigo" : "Ίντιγκο",
			"green" : "Πράσινο",
			"veraman" : "Βεραμάν",
			"oil" : "Λαδί",
			"cypress" : "Κυπαρισί",
			"white" : "Άσπρο",
			"grey" : "Γκρι",
			"black" : "Μαύρο"
		},
		noProducts : "Δεν υπάρχουν προϊόντα",
	//product details
		addCart : "Προσθήκη στο καλάθι",
		addedCart : "Προστέθηκε στο καλάθι",
		imgLabel : "Πατήστε για μεγέθυνση",
		sizeTag : "Μέγεθος",
		colorTag : "Χρώμα",
		descrTag : "Περιγραφή",
		fabricTag : "Ύφασμα",
		dimsTag : "Διαστάσεις",
		more : "ακόμα",
		cart : "Καλάθι",
		buy : "Αγορά",
		total : "Σύνολο αγορών",
		checkout : "Ολοκλήρωση αγοράς",
		noCart : "Δεν υπάρχουν προϊόντα στο καλάθι",
		comments : "Σχόλια",
		leaveComment : "Αφήστε ένα σχόλιο",
		commSent : "Το σχόλιο σας εστάλη.\nΘα αναρτηθεί μετά από έγκριση του διαχειριστή",
		name : "Όνομα",
		send : "Αποστολή",
		noComments : "Δεν υπάρχουν ακόμα σχόλια για αυτό το προϊόν",
		productInCart : "Το συγκεκριμένο προϊόν σε αυτό το μέγεθος και χρώμα έχει ήδη προστεθεί στο καλάθι",
	//checkout
		personal : "Στοιχεία",
		delivery : "Αποστολή",
		billing : "Πληρωμή",
		review : "Ολοκλήρωση",
		next : "Επόμενο",
		info : ["Τίτλος","Κος","Κα","Όνομα","Επίθετο","Ηλ. ταχυδρομείο","Τηλέφωνο","Οδός","Αριθμός",
					"Επιπλέον πληροφορίες","Τ.Κωδικός","Πόλη"],
		method : "Μέθοδος πληρωμής",
		methodVal : ["Αντικαταβολή", "Κατάθεση","Πιστωτική κάρτα","Παραλαβή από το κατάστημα"],
		payatdelivery : "Η παραγγελία θα ολοκληρωθεί με πληρώμη κατά την αποστολή σε",
		fromstore : "Η αγορά θα ολοκληρωθεί με την παραλαβή της παραγγελίας από το κατάστημα μας",
		bank1 : "Παρακαλούμε αποστείλετε τα χρήματα στον ακόλουθο τραπεζικό λογαριασμό",
		bank2 : "Εισάγετε ως αιτιολογία κατάθεσης το 'Κέντρο JEANS'",
		bank3 : "Η παραγγελία σας θα αποσταλεί οτάν επιβεβαιωθεί η πληρωμή",
		paymentfinal : "Πληρωμή με",
		courier : "Μέθοδος αποστολής",
		courierVal : ["Με courrier", "Με courrier express"],
		cost : "Κόστος",
		reviewInfo : "Πληροφορίες παραγγελίας",
		reviewTo : "Προς",
		reviewAddr : "Αποστολή",
		reviewPay : "Πληρωμή",
		reviewPrice : "Τιμή",
		reviewMake : "Ολοκλήρωση παραγγελίας",
		orderDone : "Η παραγγελία σας ολοκληρώθηκε",
		orderInfo1 : "Ενα email θα σταλεί με τις λεπτομέρειες",
		orderInfo2 : "(Εάν μας δώσατε το email σας)",
		orderTY : "Ευχαριστούμε",
		orderBack : "Πίσω στην αρχική σελίδα",
	//footer
		contact : "Επικοινωνία",
		infoFooter : ["Πληροφορίες","Παραγγελίες/Παραδόσεις","Οδηγός μεγέθους","Όροι χρήσης"],
	//delivery
		deliHead : ["Παραδόσεις","Παραγγελίες",";ςε;ςε"],
		deliTxt : [
			"Οι παραδόσεις πραγματοποιούνται με χχχ courrier και εντός 1 με 3 ημερών.",
			"Οι παραγγελίες ...",
			";ςε;ςε;ςε"
		]
}
const en = {
	//header
		search : "Search",
		categories : ["TOPS","CARDIGANS","SHIRTS","JACKETS","TROUSERS"],
		sub : [
			["SHORT SLEEVE","LONG SLEEVE","KNITWEAR","TANKTOP"],
			["KNITWEAR", "HOODIES"],
			["SHORT SLEEVE","LONG SLEEVE"],
			["TANKTOP", "NORMAL"],
			["JEANS", "CHINNOS", "JOGGERS", "SHORTS"]
		],
	//main
		home1 : "Really cheap",
		homeInfo : [
				"Delivery within 3 days with ___ courrier",
				"Free delivery on orders over 30\u20AC",
				"Return within 7 days",
				"Pick up at the store"
			],
		carousel : [
			"T-shirts from 7\u20AC",
			"Jeans from 19\u20AC",
			"Tops from 14\u20AC"
		],
		moreInfo : "Check it out",
	//products
		products : "products",
		sort : "Sort",
		sortDefault : "Default",
		sortAsc : "Price (low to high)",
		sortDesc : "Price (high to low)",
		filter : "Filters",
		color : "Colour",
		size : "Size",
		quantity : "Quantity",
		tag : "Tag",
		tags : {
			"skinny":"Skinny",
			"slim":"Slim",
			"regular":"Regular",
			"classic":"Classic",
			"printed":"Printed",
			"round":"Plain",
			"v":"V",
			"polo":"Polo",
			"winter":"Winter",
			"spring":"Spring",
			"jean":"Jean",
			"formal":"Formal",
			"casual":"Casual",
			"heavy":"Βαρύ",
			"light":"Ελαφρύ",
			"fit":"Εφαρμοστό",
			"loose":"Loose",
			"ripped":"Ripped",
			"chinno": "Chinnos",
			"jogger":"Joggers"
		},
		colors : {
			"red" : "Red",
			"bordeaux" : "Burgundy",
			"coral" : "Coral",
			"orange" : "Orange",
			"apple" : "Puce",
			"camel" : "Camel",
			"mustard" : "Mustard",
			"yellow" : "Yellow",
			"blue" : "Blue",
			"turquoise" : "Turquoise",
			"indigo" : "Indigo",
			"green" : "Green",
			"veraman" : "Veraman",
			"oil" : "Olive",
			"cypress" : "Cypress",
			"white" : "White",
			"grey" : "Grey",
			"black" : "Black"
		},
		noProducts : "No products",
		addCart : "Add to cart",
		addedCart : "Added to cart",
		imgLabel : "Click to enlarge",
		sizeTag : "Size",
		colorTag : "Color",
		descrTag : "Description",
		fabricTag : "Fabric",
		dimsTag : "Dimensions",
		more : "more",
		cart : "Cart",
		buy : "Checkout",
		total : "Total",
		checkout : "Checkout",
		noCart : "There are no items in the cart",
		comments : "Comments",
		leaveComment : "Leave a comment",
		commSent : "Your comment has been sent.\nIt will be posted after moderation",
		name : "Name",
		send : "Send",
		noComments : "There are no comments for this product yet",
		productInCart : "This product in this size and color has already been added to the cart",
	//product details
		personal : "Details",
		delivery : "Delivery",
		billing : "Billing",
		review : "Review",
		next : "Next",
		info : ["Title","Mr","Mrs","First name","Last name","Email","Phone","Street","Nr",
				"Addition address info","Postcode","City"],
		methodVal : ["On delivery", "Deposit to bank","Online payment","Pay to store"],
		method : "Payment method",
		payatdelivery : "Will be paid with delivery at",
		fromstore : "The order can be picked from our store",
		bank1 : "Please deposit the money to the following bank account",
		bank2 : "Name of deposit should be 'Κέντρο JEANS'",
		bank3 : "Your order will be sent after the confirmation of the payment",
		paymentfinal : "Paid with",
		courier : "Send method",
		courierVal : ["With courrier", "With courrier express"],
		cost : "Cost",
		reviewInfo : "Info",
		reviewTo : "To",
		reviewAddr : "Address",
		reviewPay : "Billing",
		reviewPrice : "Price",
		reviewMake : "Make order",
		orderDone : "Your order has been concluded",
		orderInfo1 : "An email will be sent with the details",
		orderInfo2 : "(If you're given one)",
		orderTY : "Thank you",
		orderBack : "Back to home page",
	//footer
		contact : "Contact",
		infoFooter : ["Info","Help","Guide","Legal"],
	//delivery
		deliHead : ["Delivery","Order","qweqweqwe"],
		deliTxt : [
			"Οι παραδόσεις πραγματοποιούνται με χχχ courrier και εντός 1 με 3 ημερών.",
			"Οι παραγγελίες ...",
			"qweqweqwwe"
		]
}

const sub =  [
	["SHORT","LONG","KNITWEAR","TANKTOP"],
	["KNITWEAR", "HOODIES"],
	["SHORT","LONG"],
	["TANKTOP", "NORMAL"],
	["JEANS", "CHINNOS", "JOGGERS", "SHORTS"]
];

export { login_str, set_lang_str, change_path_str, selected_product_str, search_item_str,
			get_categories_str, get_products_str, rearrange_categories_str, 
			popupCategory_status_str, popupProducts_status_str, popupComments_status_str,
			add_category_str, msg_str, show_cart_str, delete_item_str, change_quant_str,
			el, en, tags, sub,
			get_products_frontend_str, update_cart_str, sort_products_str, clear_cart_str
}