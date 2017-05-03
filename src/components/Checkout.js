import React, { PropTypes } from 'react'

const Checkout = ( {state, cart, cartSizes, cartColors, cartQuant, cartTotal, lang, langIdx, 
					header, delivery, deliveryDone, payment, sendOrder, makeOrder } ) => (
	<div id="checkoutBody" className="checkout">
		<div className="head">{lang.checkout}</div>
		{(cart.length > 0) ?
			<div>
			{/*delivery*/}
				<div className="action">
					<div className="data">
						{/*delivery*/}
						{/*title*/}
							<div className="title">
								<div className={(state.checkoutProcess == 1) 
									? "titleBlock on" 
									: (state.processDone[0] ? "titleBlock done" : "titleBlock")}
									onClick={(state.processDone[0]) ? ()=>header(1) : ""}>
									{lang.personal}
								</div>
								<div className={(state.checkoutProcess == 2) 
									? "titleBlock on" 
									: (state.processDone[1] ? "titleBlock done" : "titleBlock")}
									onClick={(state.processDone[1]) ? ()=>header(2) : ""}>
									{lang.billing}
								</div>
								<div className={(state.checkoutProcess == 3) 
									? "titleBlock on" 
									: (state.processDone[2] ? "titleBlock done" : "titleBlock")}
									onClick={(state.processDone[2]) ? ()=>header(3) : ""}>
									{lang.delivery}
								</div>
								<div className={(state.checkoutProcess == 4) 
									? "titleBlock on" 
									: (state.processDone[3] ? "titleBlock done" : "titleBlock")}
									onClick={(state.processDone[3]) ? ()=>header(4) : ""}>
									{lang.review}
								</div>
							</div>
					{/*customer*/}
						{(state.checkoutProcess == 1) ? 
							<div className="animated fadeIn">
							{/*title*/}
								<div className="row">
									<div className="block">
										<div className="top"><label>{lang.info[0]}</label></div>
										<div className="bot">
											<select value={state.title} 
												onChange={(e)=>delivery(e,"title")}>
												<option value="1">{lang.info[1]}</option>
												<option value="2">{lang.info[2]}</option>
											</select>
										</div>
									</div>
								</div>
							{/*names*/}
								<div className="row">
									<div className="block name">
										<div className="top"><label>{lang.info[3]}</label></div>
										<div className="bot">
											<input value={state.name} 
												className={(state.deliveryErrors[0]) ? "error" : "" }
												onChange={(e)=>delivery(e,"name")}/>
										</div>
									</div>
									<div className="block last">
										<div className="top"><label>{lang.info[4]}</label></div>
										<div className="bot">
											<input value={state.lastName} 
												className={(state.deliveryErrors[1]) ? "error" : "" }
												onChange={(e)=>delivery(e,"lastName")}/>
										</div>
									</div>
								</div>
							{/*email phone*/}
								<div className="row">
									<div className="block name">
										<div className="top"><label>{lang.info[5]}</label></div>
										<div className="bot">
											<input value={state.email} 
												className={(state.deliveryErrors[2]) ? "error" : "" }
												onChange={(e)=>delivery(e,"email")}/>
										</div>
									</div>
									<div className="block last">
										<div className="top"><label>{lang.info[6]}</label></div>
										<div className="bot">
											<input value={state.phone} maxLength="10"
												className={(state.deliveryErrors[3]) ? "error" : "" }
												onChange={(e)=>delivery(e,"phone")}/>
										</div>
									</div>
								</div>
							{/*address*/}
								<div className="row">
									<div className="block street">
										<div className="top"><label>{lang.info[7]}</label></div>
										<div className="bot">
											<input value={state.address} 
												className={(state.deliveryErrors[4]) ? "error" : "" }
												onChange={(e)=>delivery(e,"street")}/>
										</div>
									</div>
									<div className="block number">
										<div className="top"><label>{lang.info[8]}</label></div>
										<div className="bot">
											<input value={state.number} maxLength="4"
												className={(state.deliveryErrors[5]) ? "error" : "" }
												onChange={(e)=>delivery(e,"number")}/>
										</div>
									</div>
									<div className="block info">
										<div className="top"><label>{lang.info[9]}</label></div>
										<div className="bot">
											<input value={state.info} 
												onChange={(e)=>delivery(e,"info")}/>
										</div>
									</div>
								</div>
							{/*post/city*/}
								<div className="row">
									<div className="block post">
										<div className="top"><label>{lang.info[10]}</label></div>
										<div className="bot">
											<input value={state.postcode} maxLength="5"
												className={(state.deliveryErrors[6]) ? "error" : "" }
												onChange={(e)=>delivery(e,"postcode")}/>
										</div>
									</div>
									<div className="block city">
										<div className="top"><label>{lang.info[11]}</label></div>
										<div className="bot">
											<input value={state.city} 
												className={(state.deliveryErrors[7]) ? "error" : "" }
												onChange={(e)=>delivery(e,"city")}/>
										</div>
									</div>
								</div>
							{/*next*/}
								<div className="row next">
									<div className="button" onClick={()=>deliveryDone(1)}>{lang.next}</div>
								</div>
							</div>
						: "" }
					{/*type of payment*/}
						{(state.checkoutProcess == 2) ? 
							<div className="animated fadeIn">
								<div className="rowHead">{lang.method}</div>
							{/*types*/}
								<div className="row">
									<div className="block">
										<div className={(state.paymentType == 1) ? "type typeOn" : "type"}
											onClick={()=>payment(1)}>
											<div className="tick">&nbsp;
												<div className="tickDiv">
													{(state.paymentType == 1) ? 
														<i className="fa fa-check"></i> : ""}
												</div>
											</div>
											<div className="txt">{lang.methodVal[0]}</div>
										</div>
										<div className={(state.paymentType == 2) ? "type typeOn" : "type"} 
											onClick={()=>payment(2)}>
											<div className="tick">&nbsp;
												<div className="tickDiv">
													{(state.paymentType == 2) ? 
														<i className="fa fa-check"></i> : ""}
												</div>
											</div>
											<div className="txt">{lang.methodVal[1]}</div>
										</div>
									</div>
								</div>
							{/*types*/}
								<div className="row">
									<div className="block">
										<div className={(state.paymentType == 3) ? "type typeOn" : "type"}
											onClick={()=>payment(3)}>
											<div className="tick">&nbsp;
												<div className="tickDiv">
													{(state.paymentType == 3) ? 
														<i className="fa fa-check"></i> : ""}
												</div>
											</div>
											<div className="txt">{lang.methodVal[2]}</div>
										</div>
										<div className={(state.paymentType == 4) ? "type typeOn" : "type"}
											onClick={()=>payment(4)}>
											<div className="tick">&nbsp;
												<div className="tickDiv">
													{(state.paymentType == 4) ? 
														<i className="fa fa-check"></i> : ""}
												</div>
											</div>
											<div className="txt">{lang.methodVal[3]}</div>
										</div>
									</div>
								</div>
							{/*details*/}
								<div className={(state.paymentType == 0)?"payInfo hidden":"payInfo"}>
								{/*type1*/}
									<div className={(state.paymentType == 1) ? "" : "hidden"}>
										{lang.payatdelivery+": "+state.street+" "+state.number+", "+state.postcode+", "+state.city}
									</div>
								{/*type2*/}
									<div className={(state.paymentType == 2) ? "" : "hidden"}>
										<p>{lang.bank1}</p>
										<p>{lang.bank2}</p>
										<br/>
										<p>qwe</p>
										<p>iban</p>
										<p>iban</p>
										<br/>
										<p>{lang.bank3}</p>
									</div>
								{/*type3*/}
									<div className={(state.paymentType == 3) ? "" : "hidden"}>
										3
									</div>
								{/*type4*/}
									<div className={(state.paymentType == 4) ? "" : "hidden"}>
										<p>{lang.fromstore}</p>
										<p>Καραϊσκάκη 5</p>
										<p>Δράμα</p>
									</div>
								</div>
								{/*next*/}
									<div className="row next">
										<div className="button" onClick={()=>deliveryDone(2)}>{lang.next}</div>
									</div>
							</div>
						: "" }
					{/*courier*/}
						{(state.checkoutProcess == 3) ? 
							<div className="animated fadeIn">
								<div className="rowHead">{lang.courier}</div>
							{/*types*/}
								<div className="row">
									<div className="block">
										<div className={(state.sendType == 1) ? "type typeOn" : "type"}
											onClick={()=>sendOrder(1)}>
											<div className="tick">&nbsp;
												<div className="tickDiv">
													{(state.sendType == 1) ? 
														<i className="fa fa-check"></i> : ""}
												</div>
											</div>
											<div className="txt">{lang.courierVal[0]}</div>
										</div>
										<div className={(state.sendType == 2) ? "type typeOn" : "type"}
											onClick={()=>sendOrder(2)}>
											<div className="tick">&nbsp;
												<div className="tickDiv">
													{(state.sendType == 2) ? 
														<i className="fa fa-check"></i> : ""}
												</div>
											</div>
											<div className="txt">{lang.courierVal[1]}</div>
										</div>
									</div>
								</div>
							{/*details*/}
								<div className={(state.sendType == 0)?"payInfo hidden":"payInfo"}>
								{/*type1*/}
									<div className={(state.sendType == 1) ? "" : "hidden"}>
										{lang.cost} 5 &euro;
									</div>
								{/*type2*/}
									<div className={(state.sendType == 2) ? "" : "hidden"}>
										{lang.cost} 9 &euro;
									</div>
								</div>
							{/*next*/}
								<div className="row next">
									<div className="button" onClick={()=>deliveryDone(3)}>{lang.next}</div>
								</div>
							</div>
						: "" }
					{/*review*/}
						{(state.checkoutProcess == 4) ? 
							<div className="animated fadeIn">
							{/*review info*/}	
								<div className="rowHead">{lang.reviewInfo}</div>
								<div className="infoBlock">
										<div className="left">{lang.reviewTo}</div>
										<div className="right">
											{(state.title) == 1 
												? lang.info[1] 
												: lang.info[2]} {state.name+" "+state.lastName
											}
										</div>
								</div>
								<div className="infoBlock">
										<div className="left">{lang.reviewAddr}</div>
										<div className="right">
											{state.street+" "+state.number+", "+state.postcode+", "+state.city}
										</div>
								</div>								<div className="infoBlock">
										<div className="left">{lang.reviewPay}</div>
										<div className="right">
											{lang.paymentfinal} {lang.methodVal[state.paymentType-1]}
										</div>
								</div>
								<div className="infoBlock">
										<div className="left">{lang.reviewPrice}</div>
										<div className="right">
											{lang.total} {cartTotal} + {state.sendCost} = 
												{cartTotal+state.sendCost} &euro;
										</div>
								</div>
							{/*next*/}
								<div className="row next">
									<div className="button" onClick={()=>makeOrder()}>{lang.reviewMake}</div>
								</div>
							</div>
						: "" }
					</div>
					<div className="dots">

					</div>
				</div>
			{/*cart preview*/}
				<div className="review">
					<div className="cartHead">
						<div className="title">{lang.cart}</div>
						<div className="items">
							{cart.map( (v,i) =>
								<div className="row" key={i}>
									<div className="img">
										<img src={v.img[0]} />
									</div>
									<div className="main">
										<div className="name">{v.title[langIdx]}</div>
										<div className="price">{v.price} &euro;</div>
										<div className="size">{lang.size+": "+v.size[cartSizes[i]]}</div>
										<div className="color">{lang.color+": "+lang.colors[v.color[cartColors[i]]]}</div>
										<div className="quantity">{lang.quantity+": "+cartQuant[i]}</div>
									</div>
								</div>
							)}
						</div>
						<div className="end">
							{lang.total}: <strong>{cartTotal} &euro;</strong>
						</div>
					</div>
				</div>
			</div>
		: <div className="none">{lang.noCart}</div>}
	</div>
)

export default Checkout