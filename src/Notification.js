import React, { Component } from 'react';
import './scss/Notification.scss'

class Notification extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	
	render() {
		return (
			<div className='wrapper'>
				<span className='message-text'>
					{this.props.message}
				</span>
			</div>
		);
	}
}

export default Notification;