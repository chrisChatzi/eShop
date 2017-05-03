import ajax from 'ajax-query'
import { tags } from '../constants.js'

	//general post/get
		function loginAdmin(obj, callback){
			let options = {
				url : "/loginAdmin",
				type : "POST",
				contentType : "application/json; charset=utf-8",
				data : { "user" : obj.user, "pass" : obj.pass, "type" : "admin" }
			};
			ajax.ajaxRequest(options, (res) => {
				if(res.type == "ok") callback(res)
			}); 
		}
		function rearrange(obj, from, to){
			let array = [];
			for(let key in obj) array.push(obj[key])
			const newArray = array.slice();
			const temp = array[from];
			newArray[from] = array[to];
			newArray[to] = temp;

			return newArray;
		}
		function getItems(path, callback){
			let options = {
				url : "/"+path,
				type : "GET"
			};
			ajax.ajaxRequest(options, (res) => {
				if(res.type == "ok") callback(res)
			}); 
		}
		function makeOrder(data, callback){
			let options = {
				url : "/makeOrder",
				type : "POST",
				contentType : "application/json; charset=utf-8",
				data : { "data" : data }
			};
			ajax.ajaxRequest(options, (res) => {
				if(res.type == "ok") callback(res)
			}); 
		}
		function deleteItem(path, name, callback){
			let options = {
				url : "/delete"+path,
				type : "POST",
				contentType : "application/json; charset=utf-8",
				data : { "title" : name }
			};
			ajax.ajaxRequest(options, (res) => {
				if(res.type == "ok") callback(true)
				else callback(false)
			});  
		}

	//categories
		function addCategory(name, descr, img, callback){
			let p1 = new Promise(function(resolve, reject) {
				getItems("categories", (res) => {
					let check = false;
					if(res){
						res.categories.map( (v) => {
							if(v.title[0] == name[0] || v.img == img) check = true;
						});
					}
					if(check) reject("Name");
					else resolve();
				})
			});
			p1.then( () => {
				let options = {
					url : "/addCategory",
					type : "POST",
					contentType : "application/json; charset=utf-8",
					data : { "title" : name, "descr" : descr, "img" : img}
				};
				ajax.ajaxRequest(options, (res) => {
					if(res.type == "ok") callback(true)
					else callback(false)
				});  
			}).catch( () => {
				alert("Name or image already exists")
			})
			
		}
		function updateCategory(oldName, oldDescr, oldImg, name, descr, img, callback){
			let p1 = new Promise(function(resolve, reject) {
				getItems("categories", (res) => {
					let check = false;
					if(res){
						res.categories.map( (v) => {
							if(oldName != name[0] && v.title[0] == name[0]) check = true;
						});
					}
					if(check) reject("Name");
					else resolve();
				})
			});
			p1.then( () => {
				let options = {
					url : "/updateCategory",
					type : "POST",
					contentType : "application/json; charset=utf-8",
					data : { "oldName":oldName, "title" : name, "descr" : descr, "img" : img}
				};
				ajax.ajaxRequest(options, (res) => {
					if(res.type == "ok") callback(true)
					else callback(false)
				});
			}).catch( () => {
				alert("Name or image already exists")
			})
		}

	//products
		function addProduct(id, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments, notify, callback){
			let p1 = new Promise(function(resolve, reject) {
				getItems("products", (res) => {
					let check = false;
					if(res){
						res.products.map( (v) => {
							if(v.title[0] == name[0] || v.id == id) check = true;
						});
					}
					if(check) reject("Name");
					else resolve();
				})
			});
			p1.then( () => {
				let options = {
					url : "/addProduct",
					type : "POST",
					contentType : "application/json; charset=utf-8",
					data : { 
						"id" : id,
						"title" : name,
						"price" : price,
						"category" : category,
						"descr" : descr,
						"size" : size,
						"color" : color,
						"tag" : tag,
						"fabric" : fabric,
						"quality" : qual,
						"dims" : dims,
						"img" : img,
						"comments" : comments,
						"notify" : notify
					}
				};
				ajax.ajaxRequest(options, (res) => {
					if(res.type == "ok") callback(true)
					else callback(false)
				});  
			}).catch( () => {
				alert("Name or ID already exists")
			})
			
		}
		function updateProduct(id, oldName, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments, notify, callback){
			let p1 = new Promise(function(resolve, reject) {
				getItems("products", (res) => {
					let check = false;
					if(res){
						res.products.map( (v) => {
							if(oldName[0] != name[0]) check = true;
						});
					}
					if(check) reject("Name");
					else resolve();
				})
			});
			p1.then( () => {
				let options = {
					url : "/updateProduct",
					type : "POST",
					contentType : "application/json; charset=utf-8",
					data : { 
						"id" : id,
						"oldName" : oldName,
						"title" : name, 
						"price" : price, 
						"category" : category, 
						"descr" : descr, 
						"size" : size, 
						"color" : color, 
						"tag" : tag,
						"fabric" : fabric,
						"quality" : qual,
						"dims" : dims,
						"img" : img,
						"comments" : comments,
						"notify" : notify,
					}
				};
				ajax.ajaxRequest(options, (res) => {
					if(res.type == "ok") callback(true)
					else callback(false)
				});
			}).catch( () => {
				alert("Το όνομα χρησιμοποιείται από κάποιο άλλο προϊόν");
			})
		}

	//general
		//get index of product
		function getCategoryIdx(category, product){
			let idx = -1;
			switch(category){
				case "tops":
					switch(product){
						case "short": idx = 0; break;
						case "long": idx = 1; break;
						case "knitwear": idx = 2; break;
						case "tanktop": idx = 3; break;
					}
				break;
				case "cardigans":
					switch(product){
						case "knitwear": idx = 4; break;
						case "hoodies": idx = 5; break;
					}
				break;
				case "shirts":
					switch(product){
						case "short": idx = 6; break;
						case "long": idx = 7; break;
					}
				break;
				case "jackets":
					switch(product){
						case "tanktop": idx = 8; break;
						case "normal": idx = 9; break;
					}
				break;
				case "trousers":
					switch(product){
						case "jeans": idx = 10; break;
						case "chinnos": idx = 11; break;
						case "joggers": idx = 12; break;
						case "shorts": idx = 13; break;
					}
				break;
			}
			return idx
		}
		//get tags for each product
		function getTags(category, product){
			let array = [];
			switch(category){
				case "tops":
					switch(product){
						case "short": array = [tags[4],tags[5],tags[6],tags[7]]; break;
						case "long": array = [tags[4],tags[5],tags[6],tags[7]]; break;
						case "knitwear": array = []; break;
						case "tanktop": array = []; break;
					}
				break;
				case "cardigans":
					switch(product){
						case "knitwear": array = []; break;
						case "hoodies": array = []; break;
					}
				break;
				case "shirts":
					switch(product){
						case "short": array = [tags[10],tags[11],tags[12]]; break;
						case "long": array = [tags[10],tags[11],tags[12]]; break;
					}
				break;
				case "jackets":
					switch(product){
						case "tanktop": array = [tags[13],tags[14]]; break;
						case "normal": array = [tags[8],tags[9],tags[13],tags[4]]; break;
					}
				break;
				case "trousers":
					switch(product){
						case "jeans": array = [tags[0],tags[1],tags[2],tags[3],tags[16],tags[17]]; break;
						case "chinos": array = [tags[0],tags[1],tags[2],tags[3]]; break;
						case "joggers": array = []; break;
						case "shorts": array = [tags[10],tags[16], tags[18], tags[19]]; break;
					}
				break;
			}
			return array
		}
		function sortArray(array, by, type){
			if(type == "asc"){
				array.sort(function(a, b) {
					return parseFloat(a[by]) - parseFloat(b[by]);
				});
			}else if(type == "desc"){
				array.sort(function(a, b) {
					return parseFloat(b[by]) - parseFloat(a[by]);
				});
			}
			return array
		}
		//get number of undefined elements in array
		function getUndefined(array){
			let count = 0;
			for(let i=0; i<array.length; i++){
				if(array[i] === "") count++
			}
			return count;
		}

export { loginAdmin, getCategoryIdx, getUndefined, getTags, sortArray,
	rearrange, getItems, makeOrder, deleteItem, addCategory, updateCategory, addProduct, updateProduct }