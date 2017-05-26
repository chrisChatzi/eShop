import React, { PropTypes } from 'react'
import HeaderLanguage from './HeaderLanguage.js'
import HeaderCart from './HeaderCart.js'
import HeaderCategories from './HeaderCategories.js'
import HeaderSub from './HeaderSub.js'

const Header = ( { clickEvent, state, path, lang, langStr, langIdx, categories, cartItems,
					home, clickCat, clickSub,
					categoryIdx, productIdx, productSearch, searchIds,
					cartFlag, showCart, cart, cartSizes, cartColors, cartQuant,
					onCart, onCheckout,
					changeLang, showLang, showSub, changeHead, 
					changeSearch, loseFocus, searchClick } ) => (
	<div className="header">
		<div className="desktop">
		{/*top*/}
			<div className="headerMain">
			{/*search*/}
				<div className="left">
					<input placeholder={lang.search} value={state.searchVal} 
						onChange={changeSearch} onBlur={loseFocus} />
					<button>
						<i className="fa fa-search"></i>
					</button>
				</div>
			{/*logo*/}
				<div className="mid" onClick={home}>
					<img src="../img/general/logo.png" />
				</div>
			{/*right*/}
				<div className="right">
				{/*lang*/}
					<div className={(state.langShow) ? "item hover" : "item"} 
						onTouchStart={(e)=>showLang(false)}
						onMouseOver={(e)=>showLang(true)} onMouseOut={(e)=>showLang(false)}>
						<i className="fa fa-globe"></i>
					</div>
				{/*cart*/}
					<div id="cart" className={(cartFlag) ? "item hover" : "item"} onClick={onCart}
						onMouseOver={(e)=>showCart(true)} onMouseOut={(e)=>showCart(false)}>
						<i className="fa fa-shopping-cart">
							{(cartItems > 0) ? <div className="idx">{cartItems}</div>: "" }
						</i>
					</div>
				</div>
			</div>
		{/*search results*/}
			<div className={(productSearch.length > 0) ? "search" : "search off"}>
				{(productSearch.length > 0) ? productSearch.map( (v,i) => 
					<div key={i} className="row" onClick={()=>searchClick(v)}>
						<span>{v.title[langIdx]}</span>
						<span className="grey">
							{" - "+lang.sub[searchIds(v.category)[0]][searchIds(v.category)[1]]+" "
							+lang.categories[searchIds(v.category)[0]]}
						</span>
					</div>
				) : ""}
			</div>
		{/*language div*/}
			<HeaderLanguage state={state} langStr={langStr} showLang={showLang} changeLang={changeLang} />
		{/*cart*/}
			<HeaderCart cartFlag={cartFlag} showCart={showCart} lang={lang} langIdx={langIdx}
						cart={cart} cartSizes={cartSizes} cartColors={cartColors} cartQuant={cartQuant} 
						onCart={onCart} onCheckout={onCheckout} />
		{/*categories*/}
			<HeaderCategories lang={lang} categories={categories} categoryIdx={categoryIdx} 
								clickCat={clickCat} showSub={showSub} />
		{/*sub categories*/}
			<HeaderSub lang={lang} categories={categories} categoryIdx={categoryIdx} productIdx={productIdx}
						state={state} clickSub={clickSub} showSub={showSub} />
		</div>
	{/*mobile*/}
		<div className="headerMobile headerMain">
			{/*logo*/}
				<div className="logo-mobile" onClick={home}>logo</div>
			{/*buttons*/}
				<div className="buttons-mobile">
				{/*lang*/}
					<div className={(state.langShow) ? "item hover" : "item"} 
						onTouchStart={(e)=>showLang(false)}
						onMouseOver={(e)=>showLang(true)} onMouseOut={(e)=>showLang(false)}>
						<i className="fa fa-globe"></i>
					</div>
				{/*cart*/}
					<div id="cart" className={(cartFlag) ? "item hover" : "item"}
						onClick={(!state.mobile) ? onCart : ""}
						onMouseOver={(e)=>showCart(true)}
						onMouseOut={(e)=>showCart(false)}>
						<i className="fa fa-shopping-cart">
							{(cartItems > 0) ? <div className="idx">{cartItems}</div>: "" }
						</i>
					</div>
				{/*bars*/}
					<div className={(state.showHead) ? "item on" : "item"} onClick={changeHead}>
						<i className="fa fa-bars"></i>
					</div>
				</div>
			{(state.showHead) 
				? 	<HeaderCategories lang={lang} categories={categories} categoryIdx={categoryIdx} 
										clickCat={clickCat} showSub={showSub} />
			: ""}
			<HeaderLanguage state={state} langStr={langStr} showLang={showLang} changeLang={changeLang} />
			<HeaderCart state={state} cartFlag={cartFlag} showCart={showCart} lang={lang} langIdx={langIdx}
					cart={cart} cartSizes={cartSizes} cartColors={cartColors} cartQuant={cartQuant} 
					onCart={onCart} onCheckout={onCheckout} />
		</div>
	</div>
)

export default Header