import React, { PropTypes } from 'react'

const AdminCategories = ( { products, categories, changeCategory, state, getCategoryTxt,
							drop, drag, deleteC, edit, openPopup, comments } ) => (
	<div className="adminProducts">
		<div className="top">
			<div className="left"><button onClick={ openPopup }>Νέο</button></div>
			<div className="mid">Προϊόντα</div>
			<div className="right">
				<select defaultValue={(state.category) ? state.category : "default" } 
					onChange={changeCategory}>
					<option value="default">Φίλτρο κατηγοριών</option>
					<option value="" disabled className="optionHead">--- Μπλούζες ---</option>
						<option value="0" className="">Κοντομάνικες</option>
						<option value="1" className="">Μακρυμάνικες</option>
						<option value="2" className="">Πλεκτές</option>
						<option value="3" className="">Αμάνικες</option>
					<option value="" disabled className="optionHead">--- Ζακέτες ---</option>
						<option value="4" className="">Πλεκτές</option>
						<option value="5" className="">Φούτερ</option>
					<option value="" disabled className="optionHead">--- Πουκάμισα ---</option>
						<option value="6" className="">Κοντομάνικα</option>
						<option value="7" className="">Μακρυμάνικα</option>
					<option value="" disabled className="optionHead">--- Μπουφάν ---</option>
						<option value="8" className="">Αμάνικα</option>
						<option value="9" className="">Μανίκι</option>
					<option value="" disabled className="optionHead">--- Παντελόνια ---</option>
						<option value="10" className="">Τζινς</option>
						<option value="11" className="">Καπαρντινέ</option>
						<option value="12" className="">Φούτερ</option>
						<option value="13" className="">Βερμούδες</option>
				</select>
			</div>
		</div>
		{(products.length > 0) ? products.map( (v, i) => 
			(state.category == "default" || state.category == v.category) ?
				<div key={i} className="product" 
					draggable="true" onClick={(e) => edit(e, i)}
					onDragOver={ (e) => e.preventDefault() } onDrop={ (e) => drop(e, i) } 
					onDragStart={ (e) => drag(e, i) } >
					<div className="product-img">
						<img className="img" src={(v.img) ? v.img[0] : ""} />
					</div>
					<div className="product-main">
						<div className="product-title">{v.title[0]}</div>
						<div className="product-category">{getCategoryTxt(v.category)}</div>
						
					</div>
					<div className="product-price">{v.price} &euro;</div>
					
					<div className="product-del" onClick={(e) => deleteC(e, i)}>
						<i className="fa fa-trash product-del"></i>
					</div>
					{(v.comments && v.comments.length > 0) ?
						<div className="product-comments" onClick={(e) => comments(e, i)}>
							<i className="fa fa-comment product-comments"></i>
						</div>
					: ""}
				</div>
			: ""
		) : <div className="table-row none">Δεν υπάρχουν προϊόντα</div> }
	</div>
)

export default AdminCategories