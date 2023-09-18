import React from 'react';
import { useState } from 'react';
import './lg.css';
import { Navbar } from '../../navbar';
import Footer from '../../Footer/Footer';
const LoginSignup = () => {
	const bgImg = require('../../../Assests/images/bgImg.jpg');

	const [formData, setFormdata] = useState({
		firstName: '',
		lastName: '',
		email: '',
		mobileNo: '',
		city: '',
		password: '',
	});

	function changeHandler(event) {
		setFormdata((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	console.log(formData);

	const [action, setAction] = useState('Sign Up');

	return (
		<>
			<Navbar />
			<div
				className='shadow-lg  shadow-slate-800 z-10 h-screen flex flex-col items-center justify-center gap-2'
				style={{
					backgroundImage: `url(${bgImg})`,
				}}
			>
				<div className='flex flex-col items-center w-1/3 gap-2 bg-black p-8 rounded-3xl '>
					<div>
						<h1 className='text-yellow-300 text-center  text-[30px] mb-4' id='LoginSignUp'>
							{action}
						</h1>
					</div>
					<div className='flex w-full flex-col gap-2'>
						<div>
							{action === 'Sign Up' && (
								<input
									type='text'
									className='yellow-300  p-1 w-full text-black rounded-lg w-[250px] '
									placeholder='Enter your  first name'
									required
									name='firstName'
									value={formData.firstName}
									onChange={changeHandler}
								/>
							)}
						</div>

						<div>
							{action === 'Sign Up' && (
								<input
									type='text'
									className='yellow-300 p-1  w-full text-black rounded-lg w-[250px] '
									placeholder='Enter your  last name'
									required
									name='lastName'
									value={formData.lastName}
									onChange={changeHandler}
								/>
							)}
						</div>

						<div>
							<input
								type='email'
								placeholder='Enter your Email'
								className='p-1 text-black w-[250px] w-full rounded-lg'
								required
								name='email'
								value={formData.email}
								onChange={changeHandler}
							/>
						</div>

						<div>
							{action === 'Sign Up' && (
								<input
									type='number'
									inputMode='numeric'
									pattern='[0-9]*'
									placeholder='Enter your Mobile Number'
									className='p-1 w-full text-black w-[250px] rounded-lg custom-number-input appearance-none'
									required
									name='mobileNo'
									value={formData.mobileNo}
									onChange={changeHandler}
								/>
							)}
						</div>

						<div>
							{action === 'Sign Up' && (
								<input
									type='text'
									placeholder='Enter your City'
									className='p-1 w-full text-black rounded-lg  w-[250px]'
									required
									name='city'
									value={formData.city}
									onChange={changeHandler}
								/>
							)}
						</div>

						<div>
							{action !== 'Sign Up' && (
								<input
									type='password'
									placeholder='Enter your Password'
									className='p-1  w-full text-black rounded-lg  w-[250px]'
									required
									name='password'
									value={formData.password}
									onChange={changeHandler}
								/>
							)}
						</div>
					</div>

					<div id='forgetPass' className='font-sm mt[-20px] w-full h-6 text-white cursor-pointer text-decoration-underline flex  justify-end  '>
						{action !== 'Sign Up' ? 'Forgot Password ?' : ''}
					</div>

					<div className='flex gap-12 w-full  justify-center mt-8'>
						<div
							className={`p-2 rounded-lg cursor-pointer  font-bold buttons ${action === 'Sign Up' ? 'text-black bg-yellow-300' : 'text-white'}`}
							onClick={() => setAction('Sign Up')}
						>
							Sign Up
						</div>

						<div
							className={`p-2 rounded-lg cursor-pointer  z-10 font-bold buttons ${
								action === 'Login' ? 'bg-yellow-300 text-black' : 'text-white'
							}`}
							onClick={() => setAction('Login')}
						>
							Login
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default LoginSignup;
