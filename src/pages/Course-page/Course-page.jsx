import React from 'react';
import './CoursePage.css';
import CourseBox from './CourseBox';
import Footer from "../../components/Footer/Footer";
import { Navbar } from '../../components/navbar';

const coursesInfo = [
	{
		title: 'Crack NEET 2023',
		price: '2999',
		off: 30,
		tag: 'JEE',
	},
	{
		title: 'Crack NEET 2023',
		price: '3499',
		off: 46,
		tag: 'NEET',
	},
	{
		title: 'Crack NEET 2023',
		price: '1999',
		off: 70,
		tag: 'CBSE',
	},
	{
		title: 'Crack NEET 2023',
		price: '2099',
		off: 40,
		tag: 'CUET',
	},
	{
		title: 'Crack NEET 2023',
		price: '1099',
		off: 25,
		tag: 'NTSE',
	},
	{
		title: 'Crack NEET 2023',
		price: '3099',
		off: 90,
		tag: 'ICSE',
	},
];
function Coursepage() {
	return (
		<>
		<Navbar />
		
		<div className='main'>
			<h1 className='heading'>Explore Our Premium Courses</h1>
			<div className='container-0'>
				{coursesInfo.map((item) => (
					<CourseBox item={item} />
				))}
			</div>
		</div>
		<Footer />
	  </>
	);
}

		

export default Coursepage;
