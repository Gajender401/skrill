"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './button'; // Adjust this import as per your project structure

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-[#fffbf7] to-[#fee5d5] py-5" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <div>
            <Image src="/logo.svg" alt="Logo" width={10} height={100} className=' w-10'/>
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center sm:space-x-5">
          <a href="#" className="text-white text-sm font-medium">Courses</a>
          <a href="#" className="text-white text-sm font-medium">About us</a>
          <a href="#" className="text-white text-sm font-medium">Contact</a>
          <a href="#" className="text-white text-sm font-medium">FAQ</a>
        </div>
        <div className="flex items-center">
          <Button className="bg-orange-500 p-1 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Search</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </Button>
          <Button className="ml-4 bg-orange-500 p-1 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Cart</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.6-8H6.4M7 13L5.8 9m0 0L4.2 3M7 13l2 9m6-9l2 9m-8-6h8m-8 0l-.6 2m-1.4 0h8m-8 0l.6-2M9 17h8" />
            </svg>
          </Button>
          <Button className="ml-4 bg-orange-500 p-1 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Profile</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.58M12 14l-6.16-3.58M12 14v7m6-11.42v5.84M6 8.42v5.84" />
            </svg>
          </Button>
          <Button onClick={toggleMobileMenu} className="ml-4 sm:hidden bg-[#fee5d5] p-1 rounded-md text-gray-900 hover:bg-[#fee5d5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  
    {isMobileMenuOpen && (
      <div className="sm:hidden text-white" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-white">Courses</a>
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white">About us</a>
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white">Contact</a>
          <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white">FAQ</a>
        </div>
  
        <div className="flex items-center mt-4">
          <Button className="bg-orange-500 p-1 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Search</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </Button>
          <Button className="ml-4 bg-orange-500 p-1 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Cart</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.6-8H6.4M7 13L5.8 9m0 0L4.2 3M7 13l2 9m6-9l2 9m-8-6h8m-8 0l-.6 2m-1.4 0h8m-8 0l.6-2M9 17h8" />
            </svg>
          </Button>
          <Button className="ml-4 bg-orange-500 p-1 rounded-full text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            <span className="sr-only">Profile</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.58M12 14l-6.16-3.58M12 14v7m6-11.42v5.84M6 8.42v5.84" />
            </svg>
          </Button>
        </div>
      </div>
    )}
  </nav>
  
  );
};

export default Navbar;
