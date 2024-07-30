import React from 'react';
import Image from 'next/image';

const Second = () => {
    return (
        <div className=" min-h-screen flex flex-col bg-white">
            <div className="flex justify-center">
                <p className="mt-10 lg:text-[50px] font-semibold">How Skrill School Works</p>
            </div>
            <div className="relative flex flex-col items-center mt-8 flex-grow lg:flex-row lg:justify-center mx-auto ">
                {/* Roadmap SVG Image */}
                <div className="relative w-full  justify-center hidden lg:block ml-20 mt-2 h-[100%]">
                    <Image src="/roadmap.svg" alt="Roadmap Image" layout="intrinsic" width={1500} height={800} />
                </div>


                <div className="lg:absolute top-28 right-96 lg:mt-0">
                    <div className="text-center lg:w-full">
                        <Image className='mx-auto' src="/location.svg" alt="Roadmap Image" layout="intrinsic" width={50} height={800} />
                        <div className="text-orange-600 font-bold mt-10">Join Our Program</div>
                    </div>
                </div>

                <div className="lg:absolute left-36 top-72 lg:mt-0  mt-10">
                    <div className="text-center lg:w-3/4">
                        <Image className='mx-auto' src="/location.svg" alt="Roadmap Image" layout="intrinsic" width={50} height={800} />
                        <div className="text-orange-600 font-bold mt-10">Learn Programming from Industry Practitioners</div>
                    </div>
                </div>

                <div className="lg:absolute right-60 bottom-96">
                    <div className="text-center lg:w-2/2 mt-14">
                        <Image className='mx-auto' src="/location.svg" alt="Roadmap Image" layout="intrinsic" width={50} height={800} />
                        <div className="text-orange-600 font-bold mt-5">Engage in Live Projects</div>
                    </div>
                </div>
                <div className="lg:absolute bottom-24 lg:mt-0  mt-10">
                    <div className="text-center ">
                        <Image className='mx-auto' src="/location.svg" alt="Roadmap Image" layout="intrinsic" width={50} height={800} />
                        <div className="text-orange-600 font-bold mt-10">Secure Your Dream Job</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;
