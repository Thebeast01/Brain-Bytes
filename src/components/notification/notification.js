import React, { useState, useEffect } from 'react';
import './Notification.css';

const NotificationSection = () => {
	const notifications = [
		'Notification 1',
		'Notification 2',
		'Notification 3',
		'Notification 4',
		'Notification 5',
		'Notification 6',
		'Notification 7',
		'Notification 8',
		'Notification 9',
		'Notification 10',
		'Notification 11',
		'Notification 12',
		'Notification 13',
		// Add more notifications as needed
	];

	const [scrollIndex, setScrollIndex] = useState(0);

	useEffect(() => {
		const scrollInterval = setInterval(() => {
			setScrollIndex((prevIndex) => (prevIndex + 1) % notifications.length);
		}, 1500); // Change the scroll interval as needed (e.g., every 3 seconds)

		return () => {
			clearInterval(scrollInterval);
		};
	}, [notifications]);

	return (
		<div class='containerNotification '>
			<div className='box'>
				<h2>
					<ion-icon name='book-outline'></ion-icon>courses
				</h2>
				<div className='notification-section courses'>
					<div className='notification-scroll'>
						{notifications.map((notification, index) => (
							<div key={index} className={`notification-item ${index === scrollIndex ? 'active' : ''}`}>
								{notification}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='box'>
				<h2>Events</h2>
				<div className='notification-section events'>
					<div className='notification-scroll'>
						{notifications.map((notification, index) => (
							<div key={index} className={`notification-item ${index === scrollIndex ? 'active' : ''}`}>
								{notification}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='box'>
				<h2>Social Posts</h2>
				<div className='notification-section instagram'>
					<div className='notification-scroll'>
						{notifications.map((notification, index) => (
							<div key={index} className={`notification-item ${index === scrollIndex ? 'active' : ''}`}>
								{notification}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotificationSection;
