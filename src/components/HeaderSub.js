import React, { PropTypes } from 'react'

const Sub = ( { state, lang, categories, categoryIdx, productIdx, clickSub, showSub } ) => (
	<div className={(state.subShow) ? "subMenu" : "subMenu off"} 
		onMouseOver={(e)=>showSub(true, false)} onMouseOut={(e)=>showSub(false, false)}>
		{categories.map( (v,i) => 
			<div className={(categoryIdx == i) ? "item" : "item"} key={i}>
				{v.sub.map( (vSub, iSub) => 
					<div className={(categoryIdx == i && productIdx == iSub) ? "row active" : "row"} 
						key={iSub} 
						onClick={()=>clickSub(v.id, vSub)}>
						{lang.sub[i][iSub]}
					</div>
				)}
			</div>
		)}
	</div>
)

export default Sub