import React, { PropTypes } from 'react'

const Cart = ( { state, cart, cartSizes, cartColors, cartQuant, cartTotal, cartTotalItem, lang, langIdx, 
				checkout, changeQuant, deleteItem } ) => (
	<div id="cartBody" className="cart">
		<div className="head">{lang.cart}</div>
		{(cart.length > 0) ?
		<div>
			<div className="items">
				{cart.map( (v,i) =>
				<div className="row" key={i}>
					<div className="img">
						<img src={v.img[0]} />
					</div>
					<div className="main">
						<div className="name">{v.title[langIdx]}</div>
						<div className="price">{v.price} &euro;</div>
						<div className="size">{v.size[cartSizes[i]]}</div>
						<div className="color">{lang.colors[v.color[cartColors[i]]]}</div>
					</div>
					<div className="quantity">
						<div className="button" onClick={()=>changeQuant(-1, i)}>-</div>
						<div className="number">{cartQuant[i]}</div>
						<div className="button" onClick={()=>changeQuant(1, i)}>+</div>
					</div>
					<div className="delete" onClick={()=>deleteItem(i)}>
						<i className="fa fa-trash"></i>
					</div>
					<div className="total">{cartTotalItem[i]} &euro;</div>
				</div>
				)}
			</div>
			<div className="checkoutC">
				<div className="checkout-row">{lang.total+": "}<strong>{cartTotal} &euro;</strong></div>
				<div className="checkout-row">
					<button onClick={checkout}>{lang.checkout}</button>
				</div>
			</div>
		</div>
		: <div className="none">{lang.noCart}</div>}
	</div>
)

export default Cart