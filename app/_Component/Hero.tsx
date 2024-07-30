"use client";
import Image from 'next/image';
import React from 'react';
import { Button } from '@/Components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-white py-12 lg:py-10">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg1.svg')" }}
      />
      <div className="relative container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-8 lg:mb-16">
          <div className="lg:w-8/12 text-center lg:text-left text-white">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4">
              Start the tech journey you&#39;ve been waiting for.
            </h1>
            <p className="text-[20px] mt-10">
              178+ students already placed in last three months and we are still counting.
            </p>

            <div className="mt-10 mb-10">
              <p className="text-[20px] blinking-shadow">
                Next Session starts from - 01 Aug 2024
              </p>
            </div>


            <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-x-4 items-center">
              <Button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                Enroll Now
              </Button>
              <Button className="bg-orange-200 text-orange-700 py-2 px-6 rounded-full hover:bg-orange-300 transition duration-300 lg:mt-0 mt-4">
                Request a Callback
              </Button>
            </div>
          </div>

          <div className="w-auto mt-8 lg:mt-0 justify-center">
            <Image src="/heroimg.svg" width={1} height={1} alt="Hero Image" className="w-full lg:w-5/6" />
          </div>
        </div>

        {/* <div className="flex lg:flex-row flex-col justify-center lg:justify-between mb-12 lg:mb-24 text-white">
          <div className="text-center bg-[#ff9c63] p-5 rounded-lg lg:mt-0 mt-5">
            <span className="block text-4xl lg:text-3xl font-bold">01+</span>
            <span className="block text-lg lg:text-xl">Online Courses</span>
          </div>
          <div className="text-center bg-[#ff9c63] p-5 rounded-lg lg:mt-0 mt-5">
            <span className="block text-4xl lg:text-3xl font-bold">05k+</span>
            <span className="block text-lg lg:text-xl">Active Students</span>
          </div>
          <div className="text-center bg-[#ff9c63] p-5 rounded-lg lg:mt-0 mt-5">
            <span className="block text-4xl lg:text-3xl font-bold">50+</span>
            <span className="block text-lg lg:text-xl">Expert Teachers</span>
          </div>
        </div> */}

        <div className="text-center mt-12 lg:mt-24">
          <Button className="bg-orange-500 text-white py-2 px-6 lg:py-3 lg:px-8 rounded-full hover:bg-orange-600 transition duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
