import { useState } from 'react';
import { courseNavlinks, EMaterialNavlinks } from '../constants';
import logo from '../Assests/images/logo.jpg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [flyer, setFlyer] = useState(false);
	const [flyerTwo, setFlyerTwo] = useState(false);

	return (
		<>
			{/* This example requires Tailwind CSS v2.0+ */}
			<div className='relative bg-white'>
				<div className='max-w-8xl mx-auto px-4 sm:px-6'>
					<div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
						<div className='flex justify-start lg:w-0 lg:flex-1'>
							<Link to='/'>
								<span className='sr-only'>Workflow</span>
								<img className='h-20 w-auto ' src={logo} alt='' />
							</Link>
						</div>
						<div className='-mr-2 -my-2 inline-flex  md:hidden'>
							<button
								type='button'
								className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'
								onClick={() => setOpen(!open)}
								{...console.log(open)}
							>
								<svg
									className='h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
								</svg>
							</button>
						</div>
						<nav className='hidden md:flex space-x-10'>
							<div className='relative'>
								{/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
								<button
									type='button'
									className="
                  group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 pb-8'
                  "
									onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
								>
									<span>All Courses</span>
									{/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
									<svg
										className={
											flyer === true
												? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
												: 'transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
										}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
								{/*
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          */}

								<div
									onMouseLeave={() => setFlyer(false)}
									className={
										flyer
											? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
											: ' opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
									}
								>
									<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
										<div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
											{courseNavlinks.map((nav) => {
												return (
													<Link to={`/${nav.link}`} id={nav.id} className='no-underline text-black'>
														{nav.title}
													</Link>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<Link
								to='/blog'
								className='no-underline text-base font-medium
                text-gray-500 hover:text-gray-900'
							>
								{' '}
								Blog
							</Link>
							<Link
								to='/doubt'
								className='text-base no-underline font-medium
                text-gray-500 hover:text-gray-900'
							>
								{' '}
								Ask Doubts
							</Link>
							<Link
								to='/about'
								className='text-base no-underline font-medium
                text-gray-500 hover:text-gray-900'
							>
								{' '}
								About Us
							</Link>
							<div className='relative'>
								{/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
								<button
									type='button'
									className='group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
									onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
								>
									<span>E-Material</span>
									{/*
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
									<svg
										className={
											flyerTwo === true
												? 'transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200'
												: 'ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
										}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
								{/*
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          */}{' '}
								<div
									onMouseLeave={() => setFlyerTwo(false)}
									className={
										flyerTwo
											? ' opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
											: ' opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'
									}
								>
									<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
										<div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
											{EMaterialNavlinks.map((nav) => {
												return (
													<Link to={`/${nav.id}`} id={nav.id} className='no-underline text-black'>
														{nav.title}
													</Link>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</nav>
						<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
							<a href='#' className='whitespace-nowrap no-underline text-base font-medium text-gray-500 hover:text-gray-900'>
								Shop
							</a>
							<Link
								to='/login'
								href='#'
								className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-300 hover:bg-yellow-400'
							>
								Login/Register
							</Link>
						</div>
					</div>
				</div>
				{/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

				<div
					className={
						open
							? 'opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10'
							: 'opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
					}
				>
					<div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
						<div className='pt-5 pb-6 pl-5 pr-3'>
							<div className='flex  justify-between'>
								<div>
									<img className='h-20 w-auto' src={logo} alt='Workflow' />
								</div>
								<div className=''>
									<button
										type='button'
										className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'
										onClick={() => setOpen(!open)}
									>
										<span className='sr-only'>Close menu</span>
										{/* Heroicon name: outline/x */}
										<svg
											className='h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
										</svg>
									</button>
								</div>
							</div>
							<div className=' mt-6'>
								<nav className='grid z-10 gap-y-8'>
									<a href='#' className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
										<span className='ml-3 text-base font-medium text-gray-900'>All Courses</span>
									</a>
									<a href='#' className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
										<span className='ml-3 text-base font-medium text-gray-900'>Blog</span>
									</a>
									<a href='#' className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
										<span className='ml-3 text-base font-medium text-gray-900'>Ask Doubts</span>
									</a>
									<a href='#' className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
										{/* Heroicon name: outline/view-grid */}

										<span className='ml-3 text-base font-medium text-gray-900'>About Us</span>
									</a>
									<a href='#' className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
										<span className='ml-3 text-base font-medium text-gray-900'>E-Material</span>
									</a>
									<a href='#' className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
										<span className='ml-3 text-base font-medium text-gray-900'>Store</span>
									</a>
								</nav>
							</div>
						</div>
						<div className='py-6 px-5 space-y-6'>
							<div>
								<a
									href='#'
									className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600'
								>
									Sign up
								</a>
								<p className='mt-6 text-center text-base font-medium text-gray-500'>
									Existing Account?
									<a href='#' className='text-indigo-600 hover:text-indigo-500'>
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
