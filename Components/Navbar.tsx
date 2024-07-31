"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className={`bg-[#2f2622]  `}>
      <div className=" flex items-center justify-between ">
          <a href="/" aria-label="Home">
            <img  src='/mainlogo.svg' alt='logo' className="-mb-20" />
          </a>
        <div className="flex items-center gap-5">
          <div className="relative inline-block text-left">
            <a
              href="#"
              className="text-white flex items-center flex-row gap-2 px-1 pt-1 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Our Programme
              {isDropdownOpen ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
            </a>
            {isDropdownOpen && (
                <div className= " absolute bg-white text-black  p-5">
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">
                    Fullstack Launchpad
                  </a>
                </div>
            )}
          </div>
          <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium">About us</a>
          <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium">Contact</a>
          <a href="#" className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium">FAQ</a>
        </div>
        <div className=" text-white flex gap-2">
          <Button className='bg-orange-500 hover:bg-orange-600 rounded-full'><a href='/register'>Register</a></Button>
          <Button className='bg-orange-500 hover:bg-orange-600 rounded-full'><a href='/login'>Login</a></Button>
        </div>
        <div className="">
          <button onClick={toggleMobileMenu} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="hidden bg-[#2f2622]">
          <div className="pt-2 pb-3 space-y-1">
            <div className="relative">
              <a
                href="#"
                className="text-white pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium flex justify-between items-center"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Our Programme
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </a>
              {isDropdownOpen && (
                 <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
                   <a href="#" className="block px-4 py-2 text-sm text-black ">
                     Fullstack Launchpad
                   </a>
               </div>
              )}
            </div>
            <a href="#" className="text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">About us</a>
            <a href="#" className="text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">Contact</a>
            <a href="#" className="text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">FAQ</a>
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-full'><a href='/register'>Register</a></Button>
            <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-full'><a href='/login'>Login</a></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
