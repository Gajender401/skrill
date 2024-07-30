import Image from 'next/image';
import React from 'react';
import menright from '@/public/menright.svg'
import menleft from '@/public/menleft.svg'
import ic1 from '@/public/ic1.svg'
import ic2 from '@/public/ic2.svg'
import ic3 from '@/public/ic3.svg'

const Ten = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 bg-white">
            <div className="bg-orange-500 mx-5 lg:w-8/12 text-center py-10  rounded-lg relative flex flex-col items-center justify-center px-5">
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f97316" fillOpacity="1" d="M0,32L1440,320L1440,320L0,320Z"></path>
                </svg>
                <div className="relative z-10 text-white">
                    <h1 className="text-2xl md:text-3xl font-bold">Course Curriculum</h1>
                    <p className="mt-2 mb-4 text-sm md:text-base">
                        Our comprehensive program is designed to equip you with the essential skills needed to excel in the field.
                        Join us and take the first step towards mastering full stack development.
                    </p>
                    <button className="mt-4 bg-white text-orange-500 font-semibold py-2 px-4 rounded-full">
                       <a href='/coursecurriculum'>Browse Curriculum</a> 
                    </button>
                </div>
            </div>

            <div className="mt-12 text-center ">
                <div className="text-xl md:text-2xl font-bold text-orange-500 mb-6">WHY CHOOSE US</div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                <div className="w-full md:w-auto">
                        <Image src={menleft} width={200} height={100} alt='Left Arrow' />
                    </div>
                    <div className="flex flex-col gap-8 items-center p-5 bg-yellow-100 rounded-lg">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4 w-full">
                                <Image src={ic1} width={50} height={50} alt='Doubt Support' />
                                <span className="text-base md:text-lg font-semibold text-gray-700">1:1 Doubt Support</span>
                            </div>
                            <div className="flex items-center space-x-4 w-full">
                                <Image src={ic2} width={50} height={50} alt='Faculty' />
                                <span className="text-base md:text-lg font-semibold text-gray-700">IIT/IIM Faculty</span>
                            </div>
                            <div className="flex items-center space-x-4 w-full">
                                <Image src={ic3} width={50} height={50} alt='Placement Assistance' />
                                <span className="text-base md:text-lg font-semibold text-gray-700">Placement Assistance</span>
                            </div>
                        </div>
                    </div>

                  
                    <div className="w-full md:w-auto">
                        <Image src={menright} width={200} height={100} alt='Right Arrow' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ten;
