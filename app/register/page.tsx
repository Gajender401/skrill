import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import Image from 'next/image';
import abc from "@/public/abc.svg"; // Ensure to import your image
import Navbar from '@/Components/Navbar';

const SignupForm: React.FC = () => {
  return (
   <div className="flex flex-col justify-center">
    <Navbar/>
    <div className="relative bg-white p-10 px-20 rounded-3xl shadow-lg max-w-md mx-auto mt-10 lg:w-6/12">
    <div className="absolute bottom-5 right-5 w-[200px] h-[300px]">
        <div className="relative w-full h-full">
          <Image src={abc} layout="fill" objectFit="contain" alt='Background image' />
        </div>
      </div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-6">Sign Up!!</h2>
        <p className="mb-6">Sign up to start your Journey.</p>
        <form>
          <div className="mb-4 relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Name" className="w-full p-3 pl-10 border rounded-full" />
          </div>
          <div className="mb-4 relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="email" placeholder="Email Address" className="w-full p-3 pl-10 border rounded-full" />
          </div>
          <div className="mb-4 relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="password" placeholder="Password" className="w-full p-3 pl-10 border rounded-full" />
          </div>
          <div className="flex justify-center">
          <button type="submit" className=" bg-orange-500 hover:bg-orange-600 text-white p-3 px-10 rounded-full">Sign Up</button>

          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default SignupForm;
