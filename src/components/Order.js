import React, { PropTypes } from 'react'

const Order = ( {lang, langIdx, home} ) => (
	<div className="order">
		<div className="txt animated slideInLeft">{lang.orderDone}</div>
		<div className="txt animated slideInRight">{lang.orderInfo1}</div>
		<br/>
		<div className="txt animated slideInUp">{lang.orderTY}</div>
		<br/>
		<div className="btn txt animated fadeIn" onClick={home}>{lang.orderBack}</div>
		<div className="social txt fb animated fadeIn">
			<a href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target" target="_blank">f</a>
		</div>
	</div>
)

export default Order