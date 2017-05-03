import React, { PropTypes } from 'react'

const Category = ( { data } ) => (
	<div className="category">
		<div className="img" style={{"backgroundImage" : "url("+data.img+")"}}></div>
		<div className="text">
			<div className="title">{data.title}</div>
			<div className="descr">{data.descr}</div>
		</div>
	</div>
)

export default Category