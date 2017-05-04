import React, { PropTypes } from 'react'

const Categories = ( { lang, categories, selectedCategory, clickCategory } ) => (
	<div className="categories">
		{categories.map( (v, i) =>
			<div className="section animated zoomIn" 
				key={i} onClick={()=>clickCategory(i)}
				style={{backgroundImage : "url('../img/categories/"+selectedCategory.idx+"/"+v+".jpg')"}}>
				<div className="tag">{lang.sub[selectedCategory.idx][i]}</div>
			</div>
		)}
	</div>
)

export default Categories