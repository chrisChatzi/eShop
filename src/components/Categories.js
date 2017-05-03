import React, { PropTypes } from 'react'

const Categories = ( { lang, categories, selectedCategory } ) => (
	<div className="categories">
		{categories.map( (v, i) =>
			<div className="section" 
				key={i} 
				style={{backgroundImage : "url('../img/categories/"+selectedCategory.idx+"/"+v+".jpg')"}}>
				<div className="tag">{lang.sub[selectedCategory.idx][i]}</div>
			</div>
		)}
	</div>
)

export default Categories