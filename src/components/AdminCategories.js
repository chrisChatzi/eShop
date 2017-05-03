import React, { PropTypes } from 'react'

const AdminCategories = ( { categories, drop, drag, deleteC, edit, openPopup } ) => (
	<div className="adminCategories">
		<div className="top">
			<div className="left"><button onClick={ openPopup }>New</button></div>
			<div className="mid">Categories</div>
			<div className="right"><span>Last updated</span></div>
		</div>
		<div className="table">
				<div className="table-row table-head">
					<div className="col1">Image</div>
					<div className="col2">Name</div>
					<div className="col3">Description</div>
					<div className="col4">&nbsp;</div>
				</div>
			{(categories.length > 0) ? categories.map( (v, i) => 
				<div key={i} className="table-row" draggable="true" onClick={(e) => edit(e, i)}
					onDragOver={ (e) => e.preventDefault() } onDrop={ (e) => drop(e, i) } 
					onDragStart={ (e) => drag(e, i) } >
					<div className="table-row-col col1">
						<img className="img" src={v.img} />
					</div>
					<div className="table-row-col col2">{v.title}</div>
					<div className="table-row-col col3">{v.descr}</div>
					
					<div className="table-row-col col4 del" onClick={(e) => deleteC(e, i)}>
						<i className="fa fa-trash  fa-2x del"></i>
					</div>
				</div>
			) : <div className="tale-row">No categories yet, click New to create</div> }
		</div>
	</div>
)

export default AdminCategories