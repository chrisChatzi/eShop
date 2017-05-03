import React, { PropTypes } from 'react'

const PopupCategory = ( { data, item, readFile, changeName, changeDescr, action, state } ) => (
	<div className="popup categ pop">
		<div className="title pop">{(data) ? "Update "+item.title : "Add a new category"}</div>
		<div className="row pop">
			<div className="left pop">Name</div>
			<div className="right pop">
				<input defaultValue={(data) ? item.title : "" } 
					className={(state.nameCheck) ? "valueError pop" : "pop" }  onChange={changeName} />
			</div>
		</div>
		<div className="row pop txt">
			<div className="left pop">Description</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.descr : "" }
					className={(state.descrCheck) ?"valueError pop":"pop"} onChange={changeDescr} />
			</div>
		</div>
		<div className="row img pop">
			<div className="left pop">Image</div>
			<div className="right pop">
				<div className="top pop">
					<img className="pop preview" src={(data) ? item.img : state.imagePreviewUrl}/>
				</div>
				<div className="top pop">
					<input className={(state.imageCheck) ? "valueError pop" : "pop" }
						type='file' accept="image/*" onChange={(e) => readFile(e)} />
				</div>
			</div>
		</div>
		<div className="title pop">
			<button className="pop" onClick={action}>{(data) ? "Update" : "Add"}</button>
		</div>
	</div>
)

export default PopupCategory