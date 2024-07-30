// import Image from 'next/image'
// import React from 'react'
// import AvatarGroup from './AvatarGroup'
// import { Button } from '@/Components/ui/button'
// import { GoArrowRight } from "react-icons/go";

// const Fourth = () => {
//     return (
//         <div>
//             <div className="bg-orange-100">
//                 <div className="flex lg:flex-row flex-col items-center lg:mx-[100px] gap-10 justify-center">
//                     <div className="mt-20 flex flex-col items-center">
//                         <div className="flex justify-center">
//                             <Image src="/men1.svg" className="" width={400} height={100} alt="Men" />
//                         </div>
//                         <div className="bg-[#cecccc] rounded-lg mt-5 p-3 flex-1 justify-center py-5">
//                             <div className="bg-white rounded-lg text-center py-5">
//                                 <p className="font-semibold text-[40px]">8M+</p>
//                                 <p className="text-[15px] text-[#757576]">World Wide Users</p>
//                                 <div className="py-5 flex justify-center">
//                                     <AvatarGroup />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-[#cecccc] h-[660px] rounded-full flex flex-col justify-center items-center px-5 mt-20">
//                         <div className="mb-4">
//                             <p className="font-semibold text-[34px]">😎</p>
//                         </div>
//                         <div className="mb-4 text-center">
//                             <p className="lg:text-[30px] font-semibold">Experienced Teachers</p>
//                         </div>
//                         <div>
//                             <div className="rounded-full bg-white">
//                                 <Image src="/men2.svg" width={300} height={20} alt="Men" className="rounded-full" />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:w-5/12 flex flex-col items-center mt-20">
//                         <div className="mx-5">
//                             <p className='lg:text-[40px] font-semibold text-center'>Who we are??</p>
//                             <p className='text-[#9f9f9f] mt-20 text-center'>At Skrill School, we're revolutionizing the way you learn. Our mission is to make education engaging, practical, and accessible for all college students. With a focus on real-world skills, our platform connects you with top industry experts and hands-on projects that prepare you for the job market.</p>
//                             <p className='text-[#9f9f9f] mt-5 text-center'>We are dedicated to turning your career dreams into reality. Join us and experience a learning journey that’s both exciting and rewarding!</p>
//                         </div>
//                         <Button className='mx-5 rounded-full bg-orange-600 hover:bg-white text-black hover:text-orange-600 mt-20 flex items-center'>
//                             Get Started Now <GoArrowRight />
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Fourth


import Image from 'next/image'
import React from 'react'

const Fourth = () => {
    return (
        <div className="bg-white py-10">
            {/* <div className="flex justify-center">
                <div className="text-center">
                    <p className="lg:text-4xl text-2xl font-semibold mb-5">Why choose us?</p>
                    <Image src="/wcu1.svg" width={500} height={500} alt="Hero Image" className="w-full" />
                </div>
            </div> */}

            <div className="flex flex-col lg:flex-row justify-center items-center mt-20 space-y-10 lg:space-y-0 lg:space-x-10">
                <Image src="/wcu2.svg" width={400} height={400} alt="Hero Image" className="w-64 lg:w-auto" />
                <Image src="/arrowright.svg" width={200} height={200} alt="Hero Image" className="mt-10 lg:mt-40 lg:rotate-45" />
                <div className="lg:w-4/12 text-center px-5">
                    <p className="text-slate-400">Our platform offers expert-led educational sessions tailored to various levels of expertise, delivered by instructors with</p>
                    <p className="text-orange-500 lg:text-4xl text-2xl font-bold">over 5 years of industry experience.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-20 space-y-10 lg:space-y-0 lg:space-x-10">
                <div className="lg:w-4/12 text-center px-5">
                    <p className="text-orange-500 lg:text-4xl text-2xl font-bold"> you&#39;re a beginner looking to start your journey </p>
                    <p className="text-slate-400">or an experienced professional aiming to stay ahead, Skrill School provides the tools and support you need to thrive.</p>
                </div>
                <Image src="/leftarrow.svg" width={200} height={200} alt="Hero Image" className="mt-10 lg:mt-40" />
                <Image src="/wcu3.svg" width={400} height={400} alt="Hero Image" className="w-64 lg:w-auto" />
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-20 space-y-10 lg:space-y-0 lg:space-x-10 gap-40">
                <div className="text-center px-5 lg:w-10/12  py-10">
                    <p className="lg:text-6xl text-2xl font-semibold mb-5 text-center text-black bg-opacity-50 p-4 rounded">
                        Who we are?
                    </p>
                    <div className="relative  flex justify-center items-center bg-cover bg-center ">
                        <div className="absolute inset-0  bg-center opacity-20 " style={{ backgroundImage: 'url(/wcu4.svg)', backgroundRepeat: 'no-repeat'}}/>

                        <p className="text-slate-500 font-mono font-semibold px-8 bg-opacity-100 rounded z-10 lg:text-[30px]">
                            At Skrill School, we are dedicated to empowering students in tier 2 and 3 cities with high-quality tech education. Our mission is to equip you with the skills to launch a successful career in technology. We offer comprehensive full-stack training programs, featuring live sessions with industry experts and hands-on experience through real-world projects. Join us and take the first step towards a bright future in tech.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fourth
