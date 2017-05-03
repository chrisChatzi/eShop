import React, { PropTypes } from 'react'

const Message = ( { text } ) => (
	<div className="message animated slideInRight">
		{text}
	</div>
)

export default Message