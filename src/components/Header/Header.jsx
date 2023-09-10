// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./header.css";
// import footerLogo from '../../Assests/images/logo.jpg';
// const navLinks = [
//   {
//     display: "Home",
//     url: "#",
//   },
//   {
//     display: "About",
//     url: "#",
//   },

//   {
//     display: "Courses",
//     url: "#",
//   },
//   {
//     display: "Pages",
//     url: "#",
//   },
//   {
//     display: "Blog",
//     url: "#",
//   },
// ];

// const Header = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="">
//               <div className="footer-logo">
//         <img src={footerLogo} alt="Company Logo" />
//       </div>
//               {/* <img src={footerLogo} alt="Company Logo" /> */}
//               </i> 
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i class="ri-phone-line"></i> +88 0123456789
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;

// import React from 'react'
// import {Link} from 'react-router-dom'
// // import logo from '../Assests/images/logo.jpg';
// import footerLogo from '../../Assests/images/logo.jpg';
 
//  import  {IoMdArrowDropdown} from "react-icons/io"

// const Header = () => {
//   return (
//     <div>
//      <nav className='flex flex-row shadow-lg  justify-around'>
//         <div className='flex flex-row gap-8 py-3 '>
//             <img className='w-[5rem] h-[5rem]' src={footerLogo} alt="logo"/>
//             </div>
//             <div>
//             <ul className='flex list-none py-6 flex-row gap-6 font-medium text-xl'>
//                 <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
//                     <Link to="/e-matetial" className='flex flex-row'>
//                         <div>E-Material</div>
//                        <IoMdArrowDropdown size={'1.1rem' } className='mt-2'/>
                    
//                        </Link>
                       
//                 </li>
//                 {/* <div className='opacity-0 w-[50px] h-[20px] hover:opacity-100 bg-black'>fghfg</div> */}

//                 <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
//                     <Link to="/courses" className='flex flex-row'>Courses
//                     <IoMdArrowDropdown size={'1.1rem' } className='mt-2'/></Link>
//                 </li>
//                 <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
//                     <Link to="/blog">Blog</Link>
//                 </li>
//                 <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
//                     <Link to="/doubt">Doubts</Link>
//                 </li>
//                 <li className='rounded-full hover:bg-yellow-300 py-2 px-5'>
//                     <Link to="/about">About Us</Link>
//                 </li>
//             </ul>
//         </div>
//         <div className='py-5  '>
//             <button className='font-medium hover:bg-yellow-300 border rounded-full px-5 py-3 text-xl'>
//                 Login/Register
//             </button>
//         </div>
//      </nav>
//     </div>
//   )
// }

// export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoMdArrowDropdown } from 'react-icons/io';
// import footerLogo from '../../Assests/images/logo.jpg';

// const Header = () => {
//   return (
//     <nav className="flex flex-row shadow-lg justify-between items-center px-4 py-3">
//       <div className="flex items-center gap-8">
//         <img className="w-20 h-20" src={footerLogo} alt="logo" />
//       </div>
//       <ul className="flex list-none py-6 gap-6 font-medium text-xl">
//         <li className="rounded-full hover:bg-yellow-300 py-2 px-5">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="relative group">
//           <div className="rounded-full hover:bg-yellow-300 py-2 px-5 cursor-pointer">
//             E-Material
//           </div>
//           <div className="absolute hidden group-hover:block bg-white mt-2 p-2 rounded-lg shadow-md">
//             {/* Dropdown content */}
//             <Link to="/e-material">Option 1</Link>
//             <Link to="/e-material">Option 2</Link>
//             {/* Add more options as needed */}
//           </div>
//         </li>
//         <li className="relative group">
//           <div className="rounded-full hover:bg-yellow-300 py-2 px-5 cursor-pointer">
//             Courses
//           </div>
//           <div className="absolute hidden group-hover:block bg-white mt-2 p-2 rounded-lg shadow-md">
//             {/* Dropdown content */}
//             <Link to="/courses">Option 1</Link>
//             <Link to="/courses">Option 2</Link>
//             {/* Add more options as needed */}
//           </div>
//         </li>
//         <li className="rounded-full hover:bg-yellow-300 py-2 px-5">
//           <Link to="/blog">Blog</Link>
//         </li>
//         <li className="rounded-full hover:bg-yellow-300 py-2 px-5">
//           <Link to="/doubt">Doubts</Link>
//         </li>
//         <li className="rounded-full hover:bg-yellow-300 py-2 px-5">
//           <Link to="/about">About Us</Link>
//         </li>
//       </ul>
//       <div>
//         <button className="font-medium hover:bg-yellow-300 border rounded-full px-5 py-3 text-xl">
//           Login/Register
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component if using React Router

function Header () {
  useEffect(() => {
    // JavaScript for preloader
    const preloader = document.querySelector('.preloader');

    // Apply color change animation
    // preloader.style.animation = 'colorChange 2s infinite';

    // Hide preloader after specified time
    setTimeout(() => {
      preloader.style.opacity = 0;
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 200);
  }, []);

  return (
    <nav className="navbar">
      <div className="main">
        <div className="logo"></div>
        <ul className="Navigation-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#" id="e-material">
              E-Materials <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <div className="drop_down_menu">
              <ul>
                <li>
                  <a href="/Notes/notes.html">E-Notes</a>
                </li>
                <li>
                  <a href="#">Question Bank</a>
                </li>
                <li>
                  <a href="#">Quiz</a>
                </li>
                <li>
                  <a href="#">Tests</a>
                </li>
              </ul>
            </div>
          </li>
          {/* Add other menu items as needed */}
        </ul>
      </div>

      {/* For hamburger Menu */}
      <div className="hamburger_menu">
        <div className="logo_1"></div>
        <span className="hamburger">
          <ion-icon name="menu-outline"></ion-icon>
        </span>
      </div>
      <div className="hidden" id="menu-2">
        <ul className="Navigation-items" id="secondary_nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#" id="e-material-items">
              E-Materials <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <div id="drop-down-0">
              <ul>
                <li>
                  <a href="/Notes/notes.html">E-Notes</a>
                </li>
                <li>
                  <a href="#">Question Bank</a>
                </li>
                <li>
                  <a href="#">Quiz</a>
                </li>
                <li>
                  <a href="#">Tests</a>
                </li>
              </ul>
            </div>
          </li>
          {/* Add other menu items for the hidden menu */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
