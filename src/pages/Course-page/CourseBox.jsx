import React from 'react';

const CourseBox = (props) => {
	const { title, price, off, tag } = props.item;

	return (
		<div>
			<div className='course-items'>
				<div className='images'>
					<img
						src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80'
						alt=''
					/>
				</div>
				<div className='course-detail'>
					<h6 className='course-title'>{title}</h6>
					<div className='box flex '>
						<div className='price'>
							<h5 className='course-price'>&#8377;{price}</h5>
							<span className='off'>({off}% OFF)</span>
						</div>
						<span className='tag'>{tag}</span>
					</div>
					<button className=' button  font-semibold'>Enroll Now</button>
				</div>
			</div>
		</div>
	);
};
export default CourseBox;
