import React, { PropTypes } from 'react'

const Details = ( {state, product, lang, langIdx, catIdx, prodIdx, imgIdx, dimImg,
					hoverImg, clickImg, clickThumb, clickSize, clickColor, addProduct,
					changeCommName, changeCommTxt, sendComm } ) => (
	<div id="detailsBody" className="details">
		{(!state.imageView) ?
			<div>
			{/*PATH*/}
				<div className="head">
					{lang.categories[catIdx]+ " / "+lang.sub[catIdx][prodIdx]+" / "+product.title[langIdx]}
				</div>
			{/*MAIN*/}
				<div className="main">
				{/*image*/}
					<div className="img">
						<img className="imgMain" src={product.img[state.imgIdx]} onClick={()=>clickImg(true)}
							onMouseOver={()=>hoverImg(true)} onMouseOut={()=>hoverImg(false)}/>
					{/*image label 'click ot enlarge'*/}
						<div className={(state.hoverImg) ? "imgLabel" : "imgLabel off"} 
							onClick={()=>clickImg(true)}
							onMouseOver={()=>hoverImg(true)} onMouseOut={()=>hoverImg(false)}>
							{lang.imgLabel}
						</div>
					{/*thumbnails of other images*/}
						<div className="thumbsDiv">
							{product.img.map( (v,i)=>
								(i != state.imgIdx && v) ?
								<div className="thumbs" onClick={()=>clickThumb(i)} key={i}>
									<img src={v} />
								</div>
								:""
							)}
						</div>
					</div>
				{/*info*/}
					<div className="info">
					{/*title*/}
						<div className="row title">{product.title[langIdx].toUpperCase()}</div>
					{/*price*/}
						<div className="row price">{product.price} &euro;</div>
					{/*description*/}
						{/*<div className="row head">{lang.descrTag}</div>*/}
						<div className="row txt descr"><p>{product.descr[langIdx]}</p></div>
					{/*sizes*/}
						<div className="row label head">{lang.sizeTag}</div>
						<div className={(state.noSize) ? "rows error" : "rows"}>
							{product.size.map( (v,i) =>
								<div className={(state.sizeIdx == i) ? "block on" : "block"} key={i} 
									onClick={()=>clickSize(i)}>{v}</div>
							)}
						</div>
					{/*colors*/}
						<div className="row label head">{lang.colorTag}</div>
						<div className={(state.noColor) ? "rows error" : "rows"}>
							{product.color.map( (v,i) =>
								<div className="out" key={i}>
									<div 
									className={(state.colorIdx == i) ? ("block color outOn "+v) : ("block color "+v)} 
									key={i} onClick={()=>clickColor(i)}>&nbsp;</div>
									<div className={(state.colorIdx == i) ? "tick show" :"tick"}>
										<i className="fa fa-check"></i>
									</div>
								</div>
							)}
						</div>
					{/*add to cart*/}
						<div className={(!state.addedToCart) ? "addCart" : "addCart added"}
							onClick={(!state.addedToCart) ? addProduct : ""}>
							{(!state.addedToCart) ? lang.addCart : lang.addedCart}
						</div>
					{/*dimensions*/}
						<div className="row label head">{lang.dimsTag}</div>
						<div className="rows">
							<img src={(catIdx == 4) ? "../img/general/p1.png" : "../img/general/top1.png"} 
									onMouseOver={()=>dimImg(0,true)} onMouseOut={()=>dimImg(0,false)}/>
							<img src={(catIdx == 4) ? "../img/general/p2.png" : "../img/general/top2.png"}
									onMouseOver={()=>dimImg(1,true)} onMouseOut={()=>dimImg(1,false)}/>
							<img src={(catIdx == 4) ? "../img/general/p3.png" : "../img/general/top3.png"}
									onMouseOver={()=>dimImg(2,true)} onMouseOut={()=>dimImg(2,false)}/>
							{(catIdx == 4 && (prodIdx == 0 || prodIdx == 1)) ? 
							<img src="../img/general/p4.png" 
								onMouseOver={()=>dimImg(3,true)} onMouseOut={()=>dimImg(3,false)}/>
							: "" }
						</div>
						<div className="rows">
							<div className="dims">
								<div className="dims-head">{lang.sizeTag}</div>
								<div className={(state.dimImg == 0) ? "dims-val selected" : "dims-val"}>A</div>
								<div className={(state.dimImg == 1) ? "dims-val selected" : "dims-val"}>B</div>
								<div className={(state.dimImg == 2) ? "dims-val selected" : "dims-val"}>C</div>
								{(catIdx == 4 && (prodIdx == 0 || prodIdx == 1)) ? 
									<div className={(state.dimImg == 3) ? "dims-val selected" : "dims-val"}>D</div>
								: ""}
							</div>
							{product.dims.map( (v,i) =>
								<div className={(i==state.sizeIdx) ? "dims selected" : "dims"} key={i}>
									<div className="dims-head">{product.size[i]}</div>
									<div className={(state.dimImg == 0) ? "dims-val selected" : "dims-val"}>
										{product.dims[i][product.size[i]][0]}
									</div>
									<div className={(state.dimImg == 1) ? "dims-val selected" : "dims-val"}>
										{product.dims[i][product.size[i]][1]}
									</div>
									<div className={(state.dimImg == 2) ? "dims-val selected" : "dims-val"}>
										{product.dims[i][product.size[i]][2]}
									</div>
									{(catIdx == 4 && (prodIdx == 0 || prodIdx == 1)) ? 
									<div className={(state.dimImg == 3) ? "dims-val selected" : "dims-val"}>
										{product.dims[i][product.size[i]][3]}
									</div>
									: ""}
								</div>
							)}
						</div>
					{/*fabric*/}
						<div className="row head">{lang.fabricTag}</div>
						<div className="row txt descr">{product.fabric[langIdx]}</div>
					</div>
				</div>
			{/*COMMENTS*/}
				<div className="comments">
					<div className="head">
						{lang.comments} -
						<span> {(product.comments) ? state.commNumber : "0"}</span>
					</div>
					<div className="name">
						<input className={(state.commNameCheck) ? "error" : ""}
							placeholder={lang.name} value={state.commName} onChange={changeCommName} />
					</div>
					<textarea className={(state.commTxtCheck) ? "text error" : "text"}
						placeholder={lang.leaveComment}
					value={state.commTxt} onChange={changeCommTxt} />
					<div className="comment">
						<button onClick={sendComm}>{lang.send}</button>
					</div>
					<hr />
					<div className="commentsArea">
						{(product.comments && product.comments.length != 0) 
							? product.comments.map( (v,i)=>
								(v.show) ? 
								<div className="commentBlock" key={i}>
									<div className="top">
										<div className="left">{v.name}</div>
										<div className="right">
											{v.date[0]+"-"+v.date[1]+"-"+v.date[2]+" "+v.date[3]+":"+v.date[4]}
										</div>
									</div>
									<div className="bot">{v.txt}</div>
								</div>
								: ""
							)
							: lang.noComments
						}
					</div>
				</div>
			</div>
		: 
			<div className="imageView">
				<div className="close" onClick={()=>clickImg(false)}>
					<i className="fa fa-times"></i>
				</div>
				<img src={product.img[state.imgIdx]} />
			</div>
		}
	</div>
)

export default Details