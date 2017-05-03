import React, { PropTypes } from 'react'

const PopupComm = ( { product, show } ) => (
	<div className="popup pop comment">
		{(product) ? product.comments.map( (v,i) =>
			<div key={i} className="comm-item pop">
				<div className="comm-txt pop">{"Ο "+v.name+" στις "+
				v.date[0]+"/"+v.date[1]+"/"+v.date[2]+" "+v.date[3]+":"+v.date[4]+" έγραψε\n"+v.txt}</div>
				<div className="comm-choose pop">
					{(v.show)
						? <button className="pop comm-show" onClick={()=>show(false, i)}>Ορατό</button>
						: <button className="pop comm-hide" onClick={()=>show(true, i)}>Κρυφό</button>
					}
				</div>
			</div>
		) : ""}
	</div>
)

export default PopupComm