import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3
       bg-[#FAFAFA] mb-3 shadow-lg md:mx-12 md:my-6 rounded-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              slate Tailwind Starter Kit
            </a>
            <button
              className="text-gray-400 cursor-pointer text-xl leading-none px-3 
              py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-5">
              <li className="nav-item text-gray-500 font-[400] text-[16px] leading-5   ">
      
                
                  <span className="ml-2">Home</span>
               
              </li>
              <li className="nav-item text-gray-500 font-[400] text-[16px] leading-5   ">
      
                
                  <span className="ml-2">About us</span>
               
              </li>
              <li className="nav-item text-gray-500 font-[400] text-[16px] leading-5   ">
      
                
                  <span className="ml-2">Products & Services</span>
               
              </li>
              <li className="nav-item text-gray-500 font-[400] text-[16px] leading-5   ">
      
     
      <span className="ml-2">Contact us</span>
   
  </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}