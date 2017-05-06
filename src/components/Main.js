import React, { PropTypes } from 'react'

const Main = ( {lang, state, open } ) => (
	<div className="mainPage">
		<div className="content">
			<div className="best animated fadeInDown">{lang.home1}</div>
			<div className="show">
				<img id="carousel" src={"../img/carousel/"+state.carousel+".jpg"} />
				<div id="carousel-tag" className="show-title">{lang.carousel[state.carousel-1]}</div>
				<div id="carousel-button" className="show-button" onClick={open}>{lang.moreInfo}</div>
			</div>
			<div className="infos">
				<div className="info">
					<div className="top"><i className="fa fa-truck"></i></div>
					<div className="bot">{lang.homeInfo[0]}</div>
				</div>
				<div className="info">
					<div className="top"><i className="fa fa-euro"></i></div>
					<div className="bot">{lang.homeInfo[1]}</div>
				</div>
				<div className="info">
					<div className="top"><i className="fa fa-undo"></i></div>
					<div className="bot">{lang.homeInfo[2]}</div>
				</div>
				<div className="info">
					<div className="top"><i className="fa fa-shopping-bag"></i></div>
					<div className="bot">{lang.homeInfo[3]}</div>
				</div>
			</div>
		</div>
	</div>
)

export default Main