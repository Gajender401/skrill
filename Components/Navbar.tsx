// "use client"
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="bg-[#2f2622] py-5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//         <div className="flex items-center">
//           <a href="/" aria-label="Home">
//             <Image className="w-auto mt-20" width={20} height={10} src="/mainlogo.svg" alt="Logo" />
//           </a>
//         </div>
//         <div className="hidden sm:flex sm:items-center sm:gap-5">
//           <div className="relative inline-block text-left">
//             <a
//               href="#"
//               className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
//               onClick={(e) => {
//                 e.preventDefault();
//                 toggleDropdown();
//               }}
//             >
//               Our Programme
//               {isDropdownOpen ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
//             </a>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div className="py-1">
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Fullstack Launchpad
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//           <a href="#" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">About us</a>
//           <a href="#" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">Contact</a>
//           <a href="#" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">FAQ</a>
//         </div>
//         <div className="hidden md:flex gap-2">
//           <Button className='bg-orange-500 hover:bg-orange-600 rounded-full'><a href='/register'>Register</a></Button>
//           <Button className='bg-orange-500 hover:bg-orange-600 rounded-full'><a href='/login'>Login</a></Button>
//         </div>
//         <button className="sm:hidden flex items-center" onClick={toggleMobileMenu}>
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="sm:hidden bg-[#2f2622]">
//           <div className="pt-2 pb-3 space-y-1">
//             <div className="relative">
//               <a
//                 href="#"
//                 className="text-white  pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium flex justify-between items-center"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleDropdown();
//                 }}
//               >
//                 Our Programme
//                 {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </a>
//               {isDropdownOpen && (
//                 <div className="mt-2 ml-4 pl-4 border-l border-gray-600">
//                   <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-100">
//                     Fullstack Launchpad
//                   </a>
//                 </div>
//               )}
//             </div>
//             <a href="#" className="text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">About us</a>
//             <a href="#" className="text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">Contact</a>
//             <a href="#" className="text-white block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">FAQ</a>
//           </div>
//           <div className="flex flex-col gap-2 px-4 py-3">
//             <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-full'><a href='/register'>Register</a></Button>
//             <Button className='bg-orange-500 hover:bg-orange-600 rounded-full w-full'><a href='/login'>Login</a></Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
