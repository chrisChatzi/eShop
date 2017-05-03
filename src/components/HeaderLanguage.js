import React, { PropTypes } from 'react'

const Order = ( {state, langStr, showLang, changeLang } ) => (
	<div className={(state.langShow) ? "lang" : "lang off"} 
		onMouseOver={(e)=>showLang(true)} onMouseOut={(e)=>showLang(false)}>
		<div className={(langStr == "el") ? "row on" : "row"} onClick={()=>changeLang("el")}>
			<img className="flagGr"/>
		</div>
		<div className={(langStr == "en") ? "row on" : "row"} onClick={()=>changeLang("en")}>
			<img className="flagEn"/>
		</div>
		<div className={(langStr == "de") ? "row on" : "row"} onClick={()=>changeLang("de")}>
			<img className="flagDe"/>
		</div>
	</div>
)

export default Order