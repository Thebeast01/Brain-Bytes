import React from 'react';
import './about-us.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Header';
function AboutUs() {
	return (
		<>
			<Navbar />
			<div className='aboutContainer'>
				<div className='container-0  '>
					<div className='about-usBox flex flex-col'>
						<h1>About Us</h1>
						<span>
							<hr />
						</span>
					</div>
				</div>
				<div className='information text-gray-400 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quidem voluptatibus eum repudiandae officia illo quae modi magni ea. Sequi
					laudantium alias ex corrupti fugit nihil! Ab laudantium ducimus vitae assumenda illo quis ipsam officia ullam dolor, dignissimos placeat
					libero, facere quisquam voluptatum cumque recusandae. A, harum culpa minus, et dolores tempora explicabo quisquam praesentium delectus sequi
					quod officia voluptatibus tempore placeat quasi? Porro adipisci nesciunt inventore nobis magnam cupiditate quia. Excepturi possimus,
					accusantium saepe dolores at repellat exercitationem, sapiente accusamus temporibus tenetur molestias consequuntur enim aut assumenda ut?
					Quibusdam laborum molestias consequatur alias provident eveniet necessitatibus cumque ipsa aspernatur!
				</div>
			</div>
			{/* <!-- Our Team section --> */}
			<div className='team-container'>
				<div className='main-team-section'>
					<h1 className='main-team-heading title-0'>Our team</h1>
					<div className='core-member  my-3'>
						<img
							src='https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1516&q=80'
							alt=''
						/>
					</div>
				</div>
				<div className='piller'>
					<h1 className='our-Pillers title-0 text-black'>Our Pillars</h1>
				</div>

				<h2 className='video-editors title-1'>Video Editing team</h2>
				<div className='pillar-member member-box'>
					<div className='members'>
						<div className='video-editors-image photos'></div>

						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='members'>
						<div className='video-editors-image photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='members'>
						<div className='video-editors-image photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='members'>
						<div className='video-editors-image photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='members'>
						<div className='video-editors-image photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
				</div>

				{/*   <!-- Graphic designers section --> */}
				<h2 className='Graphic-designers title-1'>Graphic Designers</h2>
				<div className='Graphic-member member-box'>
					<div className='graphic'>
						<div className='graphic-members photos'></div>

						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='graphic'>
						<div className='graphic-members photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='graphic'>
						<div className='graphic-members photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='graphic'>
						<div className='graphic-members photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='graphic'>
						<div className='graphic-members photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='graphic'>
						<div className='graphic-members photos'></div>

						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
				</div>
				{/*  <!-- Website Developers --> */}
				<h2 className='Web-devs title-1'>Website Developers</h2>
				<div className='web-dev-member member-box py-4'>
					<div className='developers'>
						<div className='web-developers-pictures photos'></div>

						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='developers'>
						<div className='web-developers-pictures photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='developers'>
						<div className='web-developers-pictures photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='developers'>
						<div className='web-developers-pictures photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='developers'>
						<div className='web-developers-pictures photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					<div className='developers'>
						<div className='web-developers-pictures photos'></div>
						<span className='name text-black'>Lorem.</span>
						<span className='designation text-black'>Lorem, ipsum.</span>
					</div>
					{/* <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name text-black">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div> */}
				</div>
			</div>
			{/* </div> */}
			{/* </div> */}
			{/* </div> */}
			<Footer />
		</>
	);
}

export default AboutUs;
