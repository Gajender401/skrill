// import Image from 'next/image';
// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader} from "@/Components/ui/card";

// const Fifth = () => {
//     const testimonials = [
//         {
//             image: "/e1.svg", 
//             text: "Teamollo delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
//             name: "Ashley Cooper",
//             rating: 5,
//         },
//         {
//             image: "/e2.svg",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
//             name: "John Doe",
//             rating: 5,
//         },
//         {
//             image: "/e3.svg",
//             text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             name: "Jane Smith",
//             rating: 5,
//         },
//         {
//             image: "/e4.svg",
//             text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//             name: "Michael Brown",
//             rating: 5,
//         },
//         {
//             image: "/e2.svg",
//             text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//             name: "Emily Wilson",
//             rating: 5,
//         },
//         {
//             image: "/e1.svg",
//             text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             name: "Daniel Johnson",
//             rating: 5,
//         },
//     ];

//     return (
//         <div className='bg-orange-100 py-10'>
//             <div className="lg:mx-[100px] mx-5">

//                 <div className="flex lg:flex-row flex-col items-center justify-center mx-5 mb-10">
//                     <div className="lg:w-5/12">
//                         <Image src="/cap.svg" width={1000} height={11} alt='' />
//                     </div>
//                     <div className="lg:w-6/12 text mt-10 text-center">
//                         <p className='lg:text-[40px] text-[30px] font-semibold lg:-ml-52 lg:mt-40 '>Student Testimonials</p>
//                         <p className='lg:-ml-40 '>"Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.</p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
//                     {testimonials.map((testimonial, index) => (
//                         <Card key={index} className='bg-orange-300'>
//                             <CardHeader className="flex flex-col p-4">
//                                 <CardDescription className="text-black text-left">
//                                     {testimonial.text}
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent className="flex items-center p-4">
//                                 <div className='rounded-full border h-16 w-16 flex-shrink-0 overflow-hidden bg-white mr-4'>
//                                     <Image src={testimonial.image} width={90} height={64} alt={testimonial.name} />
//                                 </div>
//                                 <div className='text-left'>
//                                     <p className="font-bold">{testimonial.name}</p>
//                                     <div className="flex">
//                                         {[...Array(testimonial.rating)].map((_, i) => (
//                                             <span key={i} className="text-orange-500">★</span>
//                                         ))}
//                                         {[...Array(5 - testimonial.rating)].map((_, i) => (
//                                             <span key={i} className="text-gray-300">★</span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Fifth;

"use client"
import Image from 'next/image'
import React from 'react'

const Fifth = () => {
    return (
        <div className='relative'>
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-white " style={{ backgroundImage: "url('/fifthbg.svg')" }} />
            <div className="flex lg:flex-row flex-col justify-center items-center">

                <div className="relative lg:w-5/12 py-20 px-5">
                    <div className="flex lg:text-[50px] font-semibold mb-4 text-white">What Our Customers Say?
                        <Image src="/fifthstar.svg" width={100} height={3} alt='Star Rating' />
                    </div>
                    <div className="w-full flex justify-center text-white text-[21px] mt-10">
                        <p>Our live coding classes have empowered countless students to achieve their programming goals. But don’t just take our word for it—here’s what our customers have to say:</p>
                    </div>
                </div>



                <div className="relative lg:w-5/12 p-5">
                    <div className="flex justify-around gap-5 text-white">
                        <img src="/slash.svg" width={5} height={3} alt='Star Rating' />
                        <img src="/pic_2.svg" width={100} height={3} alt='Star Rating' />
                        <div className="div">
                            <p className='font-semibold '>Ashley Cooper</p>
                            <p className='lg:text-20px'>Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. </p>
                        </div>
                        <p className='text-[80px]'>“</p>
                    </div>


                    <div className="flex justify-around gap-5 text-white mt-20">
                        <img src="/slash.svg" width={5} height={3} alt='Star Rating' />
                        <img src="/pic_2.svg" width={100} height={3} alt='Star Rating' />
                        <div className="div">
                            <p className='font-semibold '>Ashley Cooper</p>
                            <p className='lg:text-20px'>Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. </p>
                        </div>
                        <p className='text-[80px]'>“</p>
                    </div>


                    <div className="flex justify-around gap-5 text-white mt-20">
                        <img src="/slash.svg" width={5} height={3} alt='Star Rating' />
                        <img src="/pic_2.svg" width={100} height={3} alt='Star Rating' />
                        <div className="div">
                            <p className='lg:text-white text-black font-semibold '>Ashley Cooper</p>
                            <p className='lg:text-white text-black lg:text-20px'>Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. </p>
                        </div>
                        <p className='text-[80px] lg:text-white text-black'>“</p>
                    </div>
                </div>








            </div>
        </div>
    )
}

export default Fifth
