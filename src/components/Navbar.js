import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Assests/images/logo.jpg';
 
 import  {IoMdArrowDropdown} from "react-icons/io"

const Navbar = () => {
  return (
    <div>
     <nav className='flex flex-row shadow-lg  justify-around'>
        <div className='flex flex-row gap-8 py-3 '>
            <img className='w-[5rem] h-[5rem]' src={logo} alt="logo"/>
            </div>
            <div>
            <ul className='flex list-none py-6 flex-row gap-6 font-medium text-xl'>
                <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
                    <Link to="/">Home</Link>
                </li>
                <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
                    <Link to="/e-matetial" className='flex flex-row'>
                        <div>E-Material</div>
                       <IoMdArrowDropdown size={'1.1rem' } className='mt-2'/>
                    
                       </Link>
                       
                </li>
                {/* <div className='opacity-0 w-[50px] h-[20px] hover:opacity-100 bg-black'>fghfg</div> */}

                <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
                    <Link to="/courses" className='flex flex-row'>Courses
                    <IoMdArrowDropdown size={'1.1rem' } className='mt-2'/></Link>
                </li>
                <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
                    <Link to="/blog">Blog</Link>
                </li>
                <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
                    <Link to="/doubt">Doubts</Link>
                </li>
                <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
        </div>
        <div className='py-5  '>
            <button className='font-medium hover:bg-yellow-300 border rounded-full px-5 py-3 text-xl'>
                Login/Register
            </button>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
