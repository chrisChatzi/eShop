import React, { PropTypes } from 'react'

const Products = ( { products, tags, prodIdx, catIdx, 
					category, sub,
					productClick, sortClick,
					sortAction,
					filterClick, colorClick, sizeClick, tagClick,
					state, lang, langIdx } ) => (
	<div id="productsBody" className="products">
		<div className="head">{lang.sub[catIdx][prodIdx]+" "+lang.categories[catIdx]}</div>
	{/*options (filter sort)*/}
		<div className="options">
			{/*sort option*/}
			<div id="sort" className={(state.sortShow) ? "sort headOn" : "sort"} onClick={sortClick}>
				{lang.sort} 
				{(state.sorted != "")
					?  <i className="dot fa fa-circle"></i>
					: ""
				} <i className={(state.sortShow) ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
			</div>
			<h3>{(products.length > 1) ? products.length+" "+lang.products : ""}</h3>
			{/*filter option*/}

			<div id="filter" className={(state.filterShow) ? "filter headOn" : "filter"} onClick={filterClick}>
				{lang.filter}
				{(state.color.length > 0 || state.size.length > 0 || state.tag.length > 0)
					?  <i className="dot fa fa-circle"></i>
					: ""
				} <i className={(state.filterShow) ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
			</div>
			<div id="line" className="line"></div>
		</div>
	{/*sort*/}
		<div className={(state.sortShow) ? "sort-view" : "sort-view hide"}>
			<div className={(state.sorted == "asc") ? "row on" : "row"} 
				onClick={()=>sortAction("price", "asc")}>{lang.sortAsc}</div>
			<div className={(state.sorted == "desc") ? "row on" : "row"} 
				onClick={()=>sortAction("price", "desc")}>{lang.sortDesc}</div>
		</div>
	{/*filter*/}
		<div className={(state.filterShow) ? "filter-view" : "filter-view hide"}>
			<div className="grid">
				<div className="title">{lang.color}</div>
				<hr/>
				<div className={(state.color.indexOf("red") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("red")}>
					<div className="color red" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("bordeaux") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("bordeaux")}>
					<div className="color bordeaux" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("coral") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("coral")}>
					<div className="color coral" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("orange") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("orange")}>
					<div className="color orange" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("apple") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("apple")}>
					<div className="color apple" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("camel") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("camel")}>
					<div className="color camel" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("mustard") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("mustard")}>
					<div className="color mustard" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("yellow") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("yellow")}>
					<div className="color yellow" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("blue") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("blue")}>
					<div className="color blue" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("turquoise") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("turquoise")}>
					<div className="color turquoise" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("indigo") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("indigo")}>
					<div className="color indigo" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("green") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("green")}>
					<div className="color green" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("oil") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("oil")}>
					<div className="color oil" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("veraman") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("veraman")}>
					<div className="color veraman" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("cypress") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("cypress")}>
					<div className="color cypress" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("grey") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("grey")}>
					<div className="color grey" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("black") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("black")}>
					<div className="color black" >&nbsp;</div>
				</div>
				<div className={(state.color.indexOf("white") >= 0) ? "block on" : "block"}
					onClick={(e)=>colorClick("white")}>
					<div className="color white" >&nbsp;</div>
				</div>
			</div>
			<div className="grid">
				<div className="title">{lang.size}</div>
				<hr/>
				{( (category != "trousers") || (category=="trousers" && (sub=="joggers" || sub=="shorts")) )?
				<div>
				<div className={(state.size.indexOf("S") >= 0) ? "block on" : "block"}
					onClick={(e)=>sizeClick("S")}>S</div>
				<div className={(state.size.indexOf("M") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("M")}>M</div>
				<div className={(state.size.indexOf("L") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("L")}>L</div>
				<div className={(state.size.indexOf("XL") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("XL")}>XL</div>
				<div className={(state.size.indexOf("2XL") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("2XL")}>2XL</div>
				<div className={(state.size.indexOf("3XL") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("3XL")}>3XL</div>
				<div className={(state.size.indexOf("4XL") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("4XL")}>4XL</div>
				<div className={(state.size.indexOf("5XL") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("5XL")}>5XL</div>
				<div className={(state.size.indexOf("6XL") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("6XL")}>6XL</div>
				</div>
				:
				<div>
				<div className={(state.size.indexOf("28") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("28")}>28</div>
				<div className={(state.size.indexOf("29") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("29")}>29</div>
				<div className={(state.size.indexOf("30") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("30")}>30</div>
				<div className={(state.size.indexOf("31") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("31")}>31</div>
				<div className={(state.size.indexOf("32") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("32")}>32</div>
				<div className={(state.size.indexOf("33") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("33")}>33</div>
				<div className={(state.size.indexOf("34") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("34")}>34</div>
				<div className={(state.size.indexOf("35") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("35")}>35</div>
				<div className={(state.size.indexOf("36") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("36")}>36</div>
				<div className={(state.size.indexOf("37") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("37")}>37</div>
				<div className={(state.size.indexOf("38") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("38")}>38</div>
				<div className={(state.size.indexOf("40") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("40")}>40</div>
				<div className={(state.size.indexOf("42") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("42")}>42</div>
				<div className={(state.size.indexOf("44") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("44")}>44</div>
				<div className={(state.size.indexOf("46") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("46")}>46</div>
				<div className={(state.size.indexOf("48") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("48")}>48</div>
				<div className={(state.size.indexOf("50") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("50")}>50</div>
				<div className={(state.size.indexOf("52") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("52")}>52</div>
				<div className={(state.size.indexOf("54") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("54")}>54</div>
				<div className={(state.size.indexOf("56") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("56")}>56</div>
				<div className={(state.size.indexOf("58") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("58")}>58</div>
				<div className={(state.size.indexOf("60") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("60")}>60</div>
				<div className={(state.size.indexOf("62") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("62")}>62</div>
				<div className={(state.size.indexOf("64") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("64")}>64</div>
				<div className={(state.size.indexOf("66") >= 0) ? "block on" : "block"} 
					onClick={(e)=>sizeClick("66")}>66</div>
				</div>
				}
			</div>
			<div className="grid">
				<div className="title">{lang.tag}</div>
				<hr/>
				{tags.map( (v, i) =>
					<div className={(state.tag.indexOf(v) >= 0) ? "tag on" : "tag"} 
						onClick={(e)=>tagClick(v)} key={i}>
						{lang.tags[v]}
					</div>
				)}
			</div>
		</div>
	{/*procudt list*/}
		<div className="productList">
		{(products.length > 0) ? products.map( (v, i) =>
			(state.tagFlag[i] || state.tagFlag.length == 0) ?
			(state.colorFlag[i] || state.colorFlag.length == 0) ?
			(state.sizeFlag[i] || state.sizeFlag.length == 0) ?
				<div className="section animated zoomIn" key={i} onClick={()=>productClick(v)}>
					<div className="img">
						<img src={v.img[0]} />
					</div>
					<h3 className="title">
						{v.title[langIdx]}
					</h3>
					<div className="price">
						{v.price} &euro;
					</div>
				</div>
			: ""
			: ""
			: ""
		) : <div className="noProducts" id="result">
				<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
			</div> }
		</div>
	</div>
)

export default Products