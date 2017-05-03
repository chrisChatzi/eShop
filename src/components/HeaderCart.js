import React, { PropTypes } from 'react'

const Cart = ( { state, cartFlag, showCart, cart, cartSizes, cartColors, cartQuant, 
				lang, langIdx, onCart, onCheckout } ) => (
	<div className={(cartFlag) ? "cartHead" : "cartHead off"}
		onMouseOver={(e)=>showCart(true)} onMouseOut={(e)=>showCart(false)} >
		<div className="items">
		{cart.map( (v,i) =>
			<div className="row" key={i}>
				<div className="img">
					<img src={v.img[0]} />
				</div>
				<div className="main">
					<div className="name">{v.title[langIdx]}</div>
					<div className="price">{v.price} &euro;</div>
					<div className="size">{lang.size+": "+v.size[cartSizes[i]]}</div>
					<div className="color">{lang.color+": "+lang.colors[v.color[cartColors[i]]]}</div>
					<div className="quantity">{lang.quantity+": "+cartQuant[i]}</div>
				</div>
			</div>
			
		)}
		</div>
		<div className="end">
			<div className="half">
				<button className="cartB" onClick={onCart}>{lang.cart}</button>
			</div>
			<div className="half" onClick={onCheckout}>
				<button className="checkoutB">{lang.buy}</button>
			</div>
		</div>
	</div>
)

export default Cart