import React, { PropTypes } from 'react'

const Lang = ( {state, langStr, showLang, changeLang } ) => (
	<div className={(state.langShow) ? "lang" : "lang off"} 
		onMouseOver={(e)=>showLang(true)} onMouseOut={(e)=>showLang(false)}>
		<div className={(langStr == "el") ? "row on" : "row"} onClick={()=>changeLang("el")}>
			Ελληνικά
		</div>
		<div className={(langStr == "en") ? "row on" : "row"} onClick={()=>changeLang("en")}>
			English
		</div>
		<div className={(langStr == "de") ? "row on" : "row"} onClick={()=>changeLang("de")}>
			Deutsch
		</div>
	</div>
)

export default Lang