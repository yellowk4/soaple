import React from 'react';
import ReactDOM from 'react-dom/client';
import DarkOrLight from './DarkOrLight';
// import SignUp from './SignUp';
// import LandingPage from './LandingPage';
// import App from './App';
// import Clock from './Clock';
// import Comment from './Comment';
// import CommentList from './CommentList';
// import Notification from './Notification';
// import NotificationList from './NotificationList';
// import Accommodate  from './Accommodate'
// import ConfirmButton from './ConfirmButton';
// import Toolbar from './Toolbar';
// import Calculator from './Calculator';
// import AttendanceBook from './AttendanceBook';
// import ProfileCard from './ProfileCard';
import './index.css';

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
		{/* <ConfirmButton /> */}
		{/* <Toolbar /> */}
		{/* <LandingPage /> */}
		{/* <AttendanceBook /> */}
		{/* <SignUp /> */}
		{/* <Calculator /> */}
		{/* <ProfileCard /> */}
		<DarkOrLight />
	</React.StrictMode>
);



