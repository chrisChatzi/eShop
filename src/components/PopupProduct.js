import React, { PropTypes } from 'react'

const PopupProduct = ( { 
		data, item, categories, 
		changeImage, changeFabric, changeCategory, changeName, changePrice, 
		changeSize, changeImageIdx, changeColor, changeTag, changeQuality,
		changeDescr, changeDims, changeId,
		action, state 
	} ) => (
	<div className="popup prod pop">
		<div className="title title-head pop">{(data) ? "Ανανέωση "+item.title[0] : "Προσθήκη προϊόντος"}</div>
	{/*id*/}
		<div className="row pop">
			<div className="left pop">ID</div>
			<div className="right pop">
				<input defaultValue={(data) ? item.id[0] : "" } 
					className={(state.idCheck) ? "valueError pop" : "pop" } 
					onChange={(e)=>changeId(e,0)} />
			</div>
		</div>
	{/*name*/}
		<div className="row pop">
			<div className="left pop">Όνομα</div>
			<div className="right pop">
				<input defaultValue={(data) ? item.title[0] : "" } 
					className={(state.nameCheck) ? "valueError pop" : "pop" } 
					onChange={(e)=>changeName(e,0)} />
			</div>
		</div>
	{/*name 2*/}
		<div className="row pop">
			<div className="left pop">Όνομα (Αγγλικά)</div>
			<div className="right pop">
				<input defaultValue={(data) ? item.title[1] : "" } 
					className={(state.nameCheck) ? "valueError pop" : "pop" }  
					onChange={(e)=>changeName(e,1)} />
			</div>
		</div>
	{/*name 3*/}
		<div className="row pop">
			<div className="left pop">Όνομα (Γερμανικά)</div>
			<div className="right pop">
				<input defaultValue={(data) ? item.title[2] : "" } 
					className={(state.nameCheck) ? "valueError pop" : "pop" } 
					onChange={(e)=>changeName(e,2)} />
			</div>
		</div>
		<hr/>
	{/*category*/}
		<div className="row pop">
			<div className="left pop">Κατηγορία</div>
			<div className="right pop">
				<select defaultValue={(data) ? item.category : "default" } 
					className={(state.categoryCheck) ? "valueError pop" : "pop" } onChange={changeCategory}>
					<option value="default">---</option>
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
	{/*price*/}
		<div className="row pop">
			<div className="left pop">Τιμή</div>
			<div className="right pop">
				<input defaultValue={(data) ? item.price : "" }
					className={(state.priceCheck) ? "valueError pop" : "pop" }  onChange={changePrice} />
			</div>
		</div>
		<hr/>
	{/*size*/}
		<div className="row pop">
			<div className="left pop">Μέγεθος</div>
			<div className={(state.sizeCheck) ? "valueError right pop" : "right pop" }>
				<button className={(state.size.indexOf("S")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("S")}>S</button>
				<button className={(state.size.indexOf("M")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("M")}>M</button>
				<button className={(state.size.indexOf("L")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("L")}>L</button>
				<button className={(state.size.indexOf("XL")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("XL")}>XL</button>
				<button className={(state.size.indexOf("2XL")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("2XL")}>2XL</button>
				<button className={(state.size.indexOf("3XL")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("3XL")}>3XL</button>
				<button className={(state.size.indexOf("4XL")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("4XL")}>4XL</button>
				<button className={(state.size.indexOf("5XL")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("5XL")}>5XL</button>
				<button className={(state.size.indexOf("6XL")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("6XL")}>6XL</button>
				<br/>
				<button className={(state.size.indexOf("28")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("28")}>28</button>
				<button className={(state.size.indexOf("29")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("29")}>29</button>
				<button className={(state.size.indexOf("30")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("30")}>30</button>
				<button className={(state.size.indexOf("31")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("31")}>31</button>
				<button className={(state.size.indexOf("32")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("32")}>32</button>
				<button className={(state.size.indexOf("33")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("33")}>33</button>
				<button className={(state.size.indexOf("34")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("34")}>34</button>
				<button className={(state.size.indexOf("35")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("35")}>35</button>
				<button className={(state.size.indexOf("36")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("36")}>36</button>
				<button className={(state.size.indexOf("37")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("37")}>36</button>
				<button className={(state.size.indexOf("38")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("38")}>38</button>
				<button className={(state.size.indexOf("40")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("40")}>40</button>
				<button className={(state.size.indexOf("42")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("42")}>42</button>
				<button className={(state.size.indexOf("44")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("44")}>44</button>
				<button className={(state.size.indexOf("46")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("46")}>46</button>
				<button className={(state.size.indexOf("48")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("48")}>48</button>
				<button className={(state.size.indexOf("50")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("50")}>50</button>
				<button className={(state.size.indexOf("52")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("52")}>52</button>
				<button className={(state.size.indexOf("54")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("54")}>54</button>
				<button className={(state.size.indexOf("56")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("56")}>56</button>
				<button className={(state.size.indexOf("58")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("58")}>58</button>
				<button className={(state.size.indexOf("60")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("60")}>60</button>
				<button className={(state.size.indexOf("62")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("62")}>62</button>
				<button className={(state.size.indexOf("64")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("64")}>64</button>
				<button className={(state.size.indexOf("66")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeSize("66")}>66</button>
			</div>
		</div>
		<hr/>
	{/*color*/}
		<div className="row pop">
			<div className="left pop">Χρώμα</div>
			<div className={(state.colorCheck) ? "valueError right pop" : "right pop" }>
				<button className={(state.color.indexOf("red")>=0) ? "pop color red colorOn" : "pop red color"}
					onClick={()=>changeColor("red")} title="Κόκκινο">&nbsp;</button>
				<button className={(state.color.indexOf("bordeaux")>=0) ? "pop color bordeaux colorOn" : "pop bordeaux color"}
					onClick={()=>changeColor("bordeaux")} title="Μπορντό">&nbsp;</button>
				<button className={(state.color.indexOf("coral")>=0) ? "pop color coral colorOn" : "pop coral color"}
					onClick={()=>changeColor("coral")} title="Κοραλί">&nbsp;</button>
				<button className={(state.color.indexOf("orange")>=0) ? "pop color orange colorOn" : "pop orange color"}
					onClick={()=>changeColor("orange")} title="Πορτοκαλί">&nbsp;</button>
				<button className={(state.color.indexOf("apple")>=0) ? "pop color apple colorOn" : "pop apple color"}
					onClick={()=>changeColor("apple")} title="Σαπιο μήλο">&nbsp;</button>
				<button className={(state.color.indexOf("camel")>=0) ? "pop color camel colorOn" : "pop camel color"}
					onClick={()=>changeColor("camel")} title="Κάμελ">&nbsp;</button>
				<button className={(state.color.indexOf("mustard")>=0) ? "pop color mustard colorOn" : "pop mustard color"}
					onClick={()=>changeColor("mustard")} title="Μουσταρδί">&nbsp;</button>
				<button className={(state.color.indexOf("yellow")>=0) ? "pop color yellow colorOn" : "pop yellow color"}
					onClick={()=>changeColor("yellow")} title="Κίτρινο">&nbsp;</button>
				<button className={(state.color.indexOf("blue")>=0) ? "pop color blue colorOn" : "pop blue color"}
					onClick={()=>changeColor("blue")} title="Ρουά">&nbsp;</button>
				<button className={(state.color.indexOf("turquoise")>=0) ? "pop color turquoise colorOn" : "pop turquoise color"}
					onClick={()=>changeColor("turquoise")} title="Τυρκουάζ">&nbsp;</button>
				<button className={(state.color.indexOf("indigo")>=0) ? "pop color indigo colorOn" : "pop indigo color"}
					onClick={()=>changeColor("indigo")} title="Ίντιγκο">&nbsp;</button>
				<button className={(state.color.indexOf("green")>=0) ? "pop color green colorOn" : "pop green color"}
					onClick={()=>changeColor("green")} title="Πράσινο">&nbsp;</button>
				<button className={(state.color.indexOf("oil")>=0) ? "pop color oil colorOn" : "pop oil color"}
					onClick={()=>changeColor("oil")} title="Λαδί">&nbsp;</button>
				<button className={(state.color.indexOf("veraman")>=0) ? "pop color veraman colorOn" : "pop veraman color"}
					onClick={()=>changeColor("veraman")} title="Βεραμάν">&nbsp;</button>
				<button className={(state.color.indexOf("cypress")>=0) ? "pop color cypress colorOn" : "pop cypress color"}
					onClick={()=>changeColor("cypress")} title="Κυπαρισσί">&nbsp;</button>
				<button className={(state.color.indexOf("white")>=0) ? "pop color white colorOn" : "pop white color"}
					onClick={()=>changeColor("white")} title="Άσπρο">&nbsp;</button>
				<button className={(state.color.indexOf("grey")>=0) ? "pop color grey colorOn" : "pop grey color"}
					onClick={()=>changeColor("grey")} title="Γκρί">&nbsp;</button>
				<button className={(state.color.indexOf("black")>=0) ? "pop color black colorOn" : "pop black color"}
					onClick={()=>changeColor("black")} title="Μαύρο">&nbsp;</button>
			</div>
		</div>
		<hr/>
	{/*tags*/}
		<div className="row pop">
			<div className="left pop">Tags</div>
			<div className="right pop">
				<button className={(state.tag.indexOf("skinny")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("skinny")}>Skinny</button>
				<button className={(state.tag.indexOf("slim")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("slim")}>Slim</button>
				<button className={(state.tag.indexOf("regular")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("regular")}>Regular</button>
				<button className={(state.tag.indexOf("classic")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("classic")}>Classic</button>
				<button className={(state.tag.indexOf("printed")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("printed")}>Στάμπα</button>
				<button className={(state.tag.indexOf("round")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("round")}>Στρόγγυλο</button>
				<button className={(state.tag.indexOf("v")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("v")}>V</button>
				<button className={(state.tag.indexOf("polo")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("polo")}>Πόλο</button>
				<button className={(state.tag.indexOf("winter")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("winter")}>Χειμωνιάτικο</button>
				<button className={(state.tag.indexOf("spring")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("spring")}>Ανοιξιάτικο</button>
				<button className={(state.tag.indexOf("jean")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("jean")}>Τζιν</button>
				<button className={(state.tag.indexOf("formal")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("formal")}>Βραδυνό</button>
				<button className={(state.tag.indexOf("casual")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("casual")}>Καθημερινό</button>
				<button className={(state.tag.indexOf("heavy")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("heavy")}>Βαρύ</button>
				<button className={(state.tag.indexOf("light")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("light")}>Ελαφρύ</button>
				<button className={(state.tag.indexOf("fit")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("fit")}>Εφαρμοστό</button>
				<button className={(state.tag.indexOf("loose")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("loose")}>Φαρδύ</button>
				<button className={(state.tag.indexOf("ripped")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("ripped")}>Σκισμένο</button>
				<button className={(state.tag.indexOf("chinno")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("chinno")}>Καπαρντινέ</button>
				<button className={(state.tag.indexOf("jogger")>=0) ? "pop groupButton groupButtonOn" : "pop groupButton"}
					onClick={()=>changeTag("jogger")}>Φούτερ</button>
			</div>
		</div>
		<hr/>
	{/*fabric*/}
		<div className="row pop txt">
			<div className="left pop">Ύφασμα</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.fabric[0] : "" }
					className={(state.fabricCheck) ? "valueError pop" : "pop" } 
					onChange={(e)=>changeFabric(e,0)} />
			</div>
		</div>
	{/*fabric 2*/}
		<div className="row pop txt">
			<div className="left pop">Ύφασμα (Αγγλικά)</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.fabric[1] : "" }
					className={(state.fabricCheck) ? "valueError pop" : "pop" } 
					onChange={(e)=>changeFabric(e,1)} />
			</div>
		</div>
	{/*fabric 3*/}
		<div className="row pop txt">
			<div className="left pop">Ύφασμα (Γερμανικά)</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.fabric[2] : "" }
					className={(state.fabricCheck) ? "valueError pop" : "pop" } 
					onChange={(e)=>changeFabric(e,2)} />
			</div>
		</div>
		<hr/>
	{/*quality*/}
		<div className="row pop">
			<div className="left pop">Ποιότητα</div>
			<div className="right pop">
				<select defaultValue={(data) ? item.quality : "default" } 
					className="pop" onChange={changeQuality}>
					<option value="default">---</option>
					<option value="good">Καλή</option>
				</select>
			</div>
		</div>
	{/*dimensions*/}
		<div className="row pop">
			<div className="left pop">
				Διαστάσεις
			</div>
			<div className={(state.dimensionsCheck) ? "valueError right pop" : "right pop" }>
				<div className="rows pop">
					<img src="../img/general/top1.png" />
					<img src="../img/general/top2.png" />
					<img src="../img/general/top3.png" />
				</div>
				<div className="rows pop">
					<img src="../img/general/p1.png" />
					<img src="../img/general/p2.png" />
					<img src="../img/general/p3.png" />
					<img src="../img/general/p4.png" />
				</div>
				{state.dims.map( (v,i) => 
					<div className="size pop" key={i}>
						<div className="size-head pop">{state.size[i]}</div>
						<div className="size-main pop">
						A: <input defaultValue={(data && state.size[i]) ? item.dims[i][state.size[i]][0] : 0 } 
							className="small pop" onChange={(e) => changeDims(e, state.size[i], 0) } />
						B: <input defaultValue={(data && state.size[i]) ? item.dims[i][state.size[i]][1] : 0 } 
							className="small pop" onChange={(e) => changeDims(e, state.size[i], 1) } />
						C: <input defaultValue={(data && state.size[i]) ? item.dims[i][state.size[i]][2] : 0 } 
							className="small pop" onChange={(e) => changeDims(e, state.size[i], 2) } />
						D: <input defaultValue={(data && state.size[i]) ? item.dims[i][state.size[i]][3] : 0 } 
							className="small pop" onChange={(e) => changeDims(e, state.size[i], 3) } />
						</div>
					</div>
				)}
			</div>
		</div>
		<hr/>
	{/*description*/}
		<div className="row pop txt">
			<div className="left pop">Περιγραφή</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.descr[0] : "" }
					className={(state.descrCheck) ?"valueError pop":"pop"} 
					onChange={(e)=>changeDescr(e,0)} />
			</div>
		</div>
	{/*description 2*/}
		<div className="row pop txt">
			<div className="left pop">Περιγραφή (Αγγλικά)</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.descr[1] : "" }
					className={(state.descrCheck) ?"valueError pop":"pop"} 
					onChange={(e)=>changeDescr(e,1)} />
			</div>
		</div>
	{/*description 3*/}
		<div className="row pop txt">
			<div className="left pop">Περιγραφή (Γερμανικά)</div>
			<div className="right pop">
				<textarea defaultValue={(data) ? item.descr[2] : "" }
					className={(state.descrCheck) ?"valueError pop":"pop"} 
					onChange={(e)=>changeDescr(e,2)} />
			</div>
		</div>
		<hr/>
	{/*images*/}
		<div className="row img pop">
			<div className="left pop">Εικόνες</div>
			<div className="right pop">
				<div className="top pop">
					<img className={(state.imageIdx == 0) ? "pop preview previewIdx" : "pop preview"} 
						src={(data) ? item.img[0] : state.imagePreviewUrl[0]} onClick={()=>changeImageIdx(0)} />
					<img className={(state.imageIdx == 1) ? "pop preview previewIdx" : "pop preview"} 
						src={(data) ? item.img[1] : state.imagePreviewUrl[1]} onClick={()=>changeImageIdx(1)} />
					<img className={(state.imageIdx == 2) ? "pop preview previewIdx" : "pop preview"} 
						src={(data) ? item.img[2] : state.imagePreviewUrl[2]} onClick={()=>changeImageIdx(2)} />
					<img className={(state.imageIdx == 3) ? "pop preview previewIdx" : "pop preview"} 
						src={(data) ? item.img[3] : state.imagePreviewUrl[3]} onClick={()=>changeImageIdx(3)} />
					<img className={(state.imageIdx == 4) ? "pop preview previewIdx" : "pop preview"} 
						src={(data) ? item.img[4] : state.imagePreviewUrl[4]} onClick={()=>changeImageIdx(4)} />
				</div>
				<div className="top pop">
					<input className={(state.imageCheck) ? "valueError pop" : "pop" }
						type='file' accept="image/*" onChange={(e) => changeImage(e)} />
				</div>
			</div>
		</div>
	{/*save*/}
		<div className="title pop">
			<button className="pop" onClick={action}>{(data) ? "Ανανέωση" : "Προσθήκη"}</button>
		</div>
	</div>
)

export default PopupProduct