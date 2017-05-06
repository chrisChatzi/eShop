import { login_str, set_lang_str, change_path_str, selected_product_str, search_item_str,
        get_categories_str, get_products_str, rearrange_categories_str, 
        popupCategory_status_str, popupProducts_status_str, popupComments_status_str, msg_str,
        get_products_frontend_str, update_cart_str, sort_products_str,
        show_cart_str, delete_item_str, change_quant_str, clear_cart_str
} from './constants.js'
import { loginAdmin, getItems, makeOrder, addCategory, deleteItem, updateCategory, 
        addProduct, updateProduct, getCategoryIdx, getTags,sortArray } from './general/logic.js'

// FRONTEND
    export const login_user = (item) => {
        return (dispatch) => {
            loginAdmin(item, (res) => {
                dispatch(login_action(res.res))
            })
        };
    };
    //login
    export const login_action = (res) => {
        return {
            type: login_str,
            res
        };
    };
    //message
    export const msg = (text) => {
        return {
            type: msg_str,
            text
        };
    };
    //search item
    export const search_item = (val, langIdx) => {
         return (dispatch) => {
            getItems("products", (res) => {
                let products = [];
                res.products.map( (v) => {
                    if(v.title[langIdx].toLowerCase().indexOf(val.toLowerCase()) >= 0){
                        products.push(v);
                    }
                });
                if(val == "") products = []
                dispatch(search_item_action(products))
            })
        }
    }
    export const search_item_action = (products) => {
        return {
            type: search_item_str,
            products
        };
    };
    //change language
    export const set_lang = (lang) => {
        return {
            type: set_lang_str,
            lang
        };
    };
    //change path
    export const change_path = (category, product, categories) => {
        return {
            type: change_path_str,
            category, product, categories
        };
    };
    //get products for clicked category
        export const get_products_frontend = (category, product) => {
            let idx = getCategoryIdx(category, product);
            return (dispatch) => {
                //try to cache the request and use cached data if they exist
                let cached = localStorage.getItem("sub-"+category+"-"+product);
                if(cached != null){
                    let cachedParsed = JSON.parse(cached)
                    dispatch(fetch_products(cachedParsed.products, cachedParsed.tags))
                }
                else{
                    getItems("products", (res) => {
                        let products = [];
                        res.products.map( (v) => {
                            if(v.category === idx.toString()){
                                products.push(v);
                            }
                        });
                        let tags = getTags(category, product);

                        let obj = {
                            products, tags
                        }
                        localStorage.setItem("sub-"+category+"-"+product, JSON.stringify(obj));

                        dispatch(fetch_products(products, tags))
                    })
                }
            }    
        };
        export const fetch_products = (products, tags) => {
            return {
                type: get_products_frontend_str,
                products, tags
            };
        };
    //
    export const selected_product = (product) => {
        return {
            type: selected_product_str,
            product
        };
    };
    //update cart
    export const update_cart = (product, flag, size, color) => {
        return {
            type: update_cart_str,
            product, flag, size, color
        };
    };
    //sort products
        export const sort_products = (products, by, v) => {
            return (dispatch) => {
                let res = sortArray(products, by, v)
                dispatch(sort_products_action(res, v))
            };
        };
        export const sort_products_action = (products) => {
            return {
                type: sort_products_str,
                products
            };
        };
    //show/hide cart on top menu
    export const show_cart = (flag) => {
        return {
            type: show_cart_str,
            flag
        };
    };
    //delete item from cart
    export const delete_item = (i) => {
        return {
            type: delete_item_str,
            i
        }
    }
    //change quantity
    export const change_quant = (i, val) => {
        return {
            type: change_quant_str,
            i, val
        }
    }
    //make order
    export const make_order = (obj) => {
        return (dispatch) => {
            makeOrder(obj, (flag) => {
                if(flag.res) dispatch(clear_cart());
            })
        }
    }
    //clear cart
    export const clear_cart = () => {
        return {
            type: clear_cart_str
        }
    }
// ADMIN
    //PRODUCTS
        export const get_products = (res) => {
            return {
                type: get_products_str,
                res
            };
        };
        export const rearrange_products = (from, to) => {
            return {
                type: rearrange_categories_str,
                from, to
            };
        };
        export const delete_product = (item) => {
            return (dispatch) => {
                deleteItem("Product", item.title[0], (flag) => {
                    if(flag){
                        getItems("products", (res) => {
                            dispatch(get_products(res.products))
                            dispatch(msg("'"+item.title[0]+"' αφαιρέθηκε"));
                            setTimeout( () => { dispatch(msg("")) }, 3000);
                        })
                    }
                })
            };
        };
        export const add_product = (id, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments) => {
            return (dispatch) => {
                addProduct(id, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments, "", (flag) => {
                    if(flag){
                        getItems("products", (res) => {
                            dispatch(get_products(res.products))
                            dispatch(popupProducts_status(false, ""))
                            dispatch(msg("'"+name[0]+"' προστέθηκε"));
                            setTimeout( () => { dispatch(msg("")) }, 3000);
                        })
                        
                    }
                })
            };
        };
        export const update_product= (id, oldName, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments, notify) => {
            return (dispatch) => {
                updateProduct(id, oldName, name, price, category, descr, size, color, tag, fabric, qual, dims, img, comments, notify, (flag) => {
                    if(flag){
                        getItems("products", (res) => {
                            dispatch(get_products(res.products))
                            dispatch(popupProducts_status(false, ""))
                            dispatch(msg("'"+name[0]+"' ανανεώθηκε"));
                            setTimeout( () => { dispatch(msg("")) }, 3000);
                        })
                        
                    }
                })
            };
        };
    //CATEGORIES
        export const get_categories = (res) => {
            return {
                type: get_categories_str,
                res
            };
        };
        export const rearrange_categories = (from, to) => {
            return {
                type: rearrange_categories_str,
                from, to
            };
        };
        export const delete_category = (item) => {
            return (dispatch) => {
                deleteItem("Category", item.title, (flag) => {
                    if(flag){
                        getItems("categories", (res) => {
                            dispatch(get_categories(res.categories))
                            dispatch(msg("'"+item.title+"' deleted"));
                            setTimeout( () => { dispatch(msg("")) }, 3000);
                        })
                    }
                })
            };
        };
        export const add_category = (name, descr, img) => {
            return (dispatch) => {
                addCategory(name, descr, img, (flag) => {
                    if(flag){
                        getItems("categories", (res) => {
                            dispatch(get_categories(res.categories))
                            dispatch(popupCategory_status(false, ""))
                            dispatch(msg("'"+name+"' added"));
                            setTimeout( () => { dispatch(msg("")) }, 3000);
                        })
                        
                    }
                })
            };
        };
        export const update_category = (oldName, oldDescr, oldImg, name, descr, img) => {
            return (dispatch) => {
                updateCategory(oldName, oldDescr, oldImg, name, descr, img, (flag) => {
                    if(flag){
                        getItems("categories", (res) => {
                            dispatch(get_categories(res.categories))
                            dispatch(popupCategory_status(false, ""))
                            dispatch(msg("'"+name+"' updated"));
                            setTimeout( () => { dispatch(msg("")) }, 3000);
                        })
                        
                    }
                })
            };
        };
    // POPUP
        export const popupCategory_status = (show, idx) => {
            return {
                type: popupCategory_status_str,
                show,
                idx
            }
        };
        export const popupProducts_status = (show, idx) => {
            return {
                type: popupProducts_status_str,
                show,
                idx
            }
        };
        export const popupComments_status = (show, idx) => {
            return {
                type: popupComments_status_str,
                show,
                idx
            }
        };
        