import { useState } from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-screen h-28 border-2">
      <div className={`sm:px-16 px-6 my-7 flex justify-center items-center`}>
        <div className="w-full ">
          <nav className="w-full flex py-6  items-center navbar ">
            {/* Logo */}
            <h1 className="text-3xl ">Logo</h1>

            {/* Desktop Navigation */}
            <ul className="list-none md:flex hidden items-center m-0 flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a
                    className="no-underline text-lg text-black font-semibold p-2 hover:bg-yellow-300"
                    href={`#${nav.id}`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="md:hidden flex flex-1  items-center pl-4">
              <div
                className={`w-[28px] h-[28px] object-contain font-bold text-2xl   ${
                  toggle ? "rotate-0  mb-2" : "rotate-90 pl-1 mb-2"
                }`}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? "X" : "|||"}
              </div>

              {/* Sidebar */}
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-white border-2 absolute top-10 left-14 mx-4 my-2 min-w-[190px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        index === navLinks.length - 1 ? "mb-0" : "mb-4"
                      }`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a
                        className="text-black no-underline"
                        href={`#${nav.id}`}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="navbar-left text-xl font-semibold flex">
              <div className="store font-semibold p-2 hover:bg-yellow-300 p-2 mx-4 ">
                <a>Store</a>
              </div>
              <div
                className="border-2  px-3 py-2 drop-shadow-md bg-yellow-300 rounded-xl
              "
                id="beforeLogin"
              >
                <a>Login/Register</a>
              </div>
              <div className="hidden" id="afterLogin"></div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
