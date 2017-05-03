import React, { PropTypes } from 'react'

const Footer = ( { lang, delivery,size, legal } ) => (
	<div className="footer">
		<div className="sub">
			<div className="subHead">{lang.contact}</div>
			<div className="row">
				<a href="https://www.google.gr/maps/@41.149107,24.1457097,41m/data=!3m1!1e3" target="_blank">
					Καραϊσκάκη 5, Δράμα
				</a>
			</div>
			<div className="row">
				1234567890
			</div>
			<div className="row">
				<a href="mailto:kentro-jeans@gmail.com" target="_blank">kentro-jeans@gmail.com</a>
			</div>
		</div>
		<div className="sub">
			<div className="subHead">{lang.infoFooter[0]}</div>
			<div className="row" onClick={delivery}>{lang.infoFooter[1]}</div>
			{/*<div className="row" onClick={size}>{lang.infoFooter[2]}</div>*/}
			<div className="row" onClick={legal}>{lang.infoFooter[3]}</div>
		</div>
		<div className="sub">
			<div className="subHead">Social</div>
			<div className="row">
				<a target="_blank"><i className="fa fa-facebook-square"></i> facebook</a>
			</div>
			<div className="row">
				<a target="_blank"><i className="fa fa-twitter-square"></i> twitter</a>
			</div>
		</div>
		<div className="bottom">
			<div className="left">© Copyright kentro-jeans 2017. All Rights Reserved</div>
			<div className="right">createdby crooked</div>
		</div>
	</div>
)

export default Footer