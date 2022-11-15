import React, { Component } from 'react';
import Notification from './Notification';

const reservedNotifications = [
	{
		message: '안녕, 오늘 일정 전달~'
	},
	{
		message: '점식 식사 해'
	},
	{
		message: '이제 곧 미팅이야'
	},
]

var timer;

class NotificationList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notifications: []
		};
	}

	componentDidMount() {
		const { notifications } = this.state;
		timer = setInterval(() => {
			if (notifications.length < reservedNotifications.length){
				const index = notifications.length;
				notifications.push(reservedNotifications[index]);
				this.setState({
					notifications: notifications
				})
			} else {
				clearInterval(timer);
			}
		}, 1000)
	}

	render() {
		return (
			<div>
				{this.state.notifications.map((notification) => {
					return <Notification key={notification.message} message={notification.message} />;
				})}
			</div>
		);
	}
}

export default NotificationList;