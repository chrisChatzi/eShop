import React, { PropTypes } from 'react'

const Categories = ( { lang, categories, categoryIdx, clickCat, showSub } ) => (
	<div className="headerMenu">
		{categories.map( (v,i) => 
			<div className={(categoryIdx == i) ? "item active" : "item"} 
				key={i} onClick={()=>clickCat(v.id)}
				onMouseOver={(e)=>showSub(true, true)} onMouseOut={(e)=>showSub(false, true)}>
				{lang.categories[i]}
			</div>
		)}
	</div>
)

export default Categories