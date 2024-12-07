import React, { useState } from 'react';
import pic from "../../public/Abhi.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", target: "home" },
    { id: 2, text: "About", target: "about" },
    { id: 3, text: "Portfolio", target: "portfolio" },
    { id: 4, text: "Experience", target: "experience" },  // Fixed typo here
    { id: 5, text: "Contacts", target: "contacts" }
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2'>
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className='font-semibold text-xl cursor-pointer'>
              Abhinab
              <p className='text-sm'>Web Developer</p>
            </h1>
          </div>

          <div>
            {/* Desktop Navbar */}
            <ul className='hidden md:flex space-x-8'>
              {navItems.map((navItem) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={navItem.id}>
                  <Link
                    to={navItem.target} // Set the target here
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu toggle */}
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? (
                <IoCloseSharp className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className='md:hidden'>
            <ul className='flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
              {navItems.map((navItem) => (
                <li key={navItem.id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                  <Link
                    to={navItem.target} // Set the target here
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
