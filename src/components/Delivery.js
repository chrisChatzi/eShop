import React, { PropTypes } from 'react'

const Delivery = ( {lang, langIdx} ) => (
	<div className="delivery">
		<h3>{lang.deliHead[0]}</h3>
		<p>{lang.deliTxt[0]}</p>
		<br/>
		<h3>{lang.deliHead[1]}</h3>
		<p>{lang.deliTxt[1]}</p>
		<br/>
		<h3>{lang.deliHead[2]}</h3>
		<p>{lang.deliTxt[2]}</p>
		<br/>
	</div>
)

export default Delivery