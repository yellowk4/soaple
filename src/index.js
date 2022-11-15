import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Clock from './Clock';
// import Comment from './Comment';
// import CommentList from './CommentList';
// import Notification from './Notification';
// import NotificationList from './NotificationList';
// import Accommodate  from './Accommodate'
import ConfirmButton from './ConfirmButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
// 	root.render(
// 		<React.StrictMode>
// 			{/* <App /> */}
// 			<Clock />
// 		</React.StrictMode>
// 	);
// }, 1000);

root.render(
	<React.StrictMode>
		{/* <CommentList /> */}
		{/* <NotificationList /> */}
		{/* <Accommodate /> */}
		<ConfirmButton />
	</React.StrictMode>
);



