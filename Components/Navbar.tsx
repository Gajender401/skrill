'use client'
import React, { useState } from 'react';
import { Button } from './ui/button';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#2f2622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" aria-label="Home">
              <img src='/mainlogo.svg' alt='logo' className="h-28 mt-10 w-auto" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative">
                <a
                  href="#"
                  className="text-white flex items-center px-3 py-2 rounded-md text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  Our Programme
                  {isDropdownOpen ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                </a>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Fullstack Launchpad
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">About us</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button className='bg-orange-500 hover:bg-orange-600 rounded-full mr-2'><a href='/register'>Register</a></Button>
              <Button className='bg-orange-500 hover:bg-orange-600 rounded-full'><a href='/login'>Login</a></Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <a
                href="#"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                Our Programme
                {isDropdownOpen ? <FaChevronUp className="ml-1 inline" /> : <FaChevronDown className="ml-1 inline" />}
              </a>
              {isDropdownOpen && (
                <div className="pl-4">
                  <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                    Fullstack Launchpad
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-full mb-2'><a href='/register'>Register</a></Button>
            </div>
            <div className="flex items-center px-5">
              <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-full'><a href='/login'>Login</a></Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;