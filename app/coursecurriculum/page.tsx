"use client"
import { Button } from '@/Components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"

const accordionItems = [
    { id: 'item-1', language: 'Module 1 : Basics', content: 'This section covers the basics of HTML.' },
    { id: 'item-2', language: 'Module 2 : HTML', content: 'This section covers the basics of CSS.' },
    { id: 'item-3', language: 'Module 3 : CSS', content: 'This section covers the basics of JavaScript.' },
    { id: 'item-4', language: 'Module 4 : Javascript 1', content: 'This section covers the basics of React.' },
    { id: 'item-5', language: 'Module 5 : Javascript 2', content: 'This section covers the basics of TypeScript.' },
    { id: 'item-6', language: 'Module 6 : React', content: 'This section covers the basics of Node.js.' },
    { id: 'item-7', language: 'Module 7 : React Advanced', content: 'This section covers the basics of Tailwind CSS.' },
];

const page = () => {
    return (
        <div className="bg-orange-100">
            <div className="flex flex-col lg:flex-row items-center px-4 py-8 lg:px-20 justify-center text-center" id='courses'>
                <div className="lg:w-6/12 justify-center">
                    <p className='font-semibold text-[40px]'>Course Curriculum</p>
                    <p className='text-[14px] text-slate-500 mt-5'>Expand your horizon by choosing from India’s best and most preferred online Creative courses.</p>
                    <Button className='bg-orange-500 text-white py-2 px-6 lg:py-3 lg:px-8 rounded-full hover:bg-orange-600 transition duration-300 mt-5'>Full Stack Launchpad</Button>
                    <div className="flex gap-5 text-center justify-center mt-5">
                        <Image src="/download.svg" alt="Roadmap Image" layout="intrinsic" width={22} height={800} />
                        <p className='font-semibold'>Download our course curriculum</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-orange-100 text-center py-10">
                <div>
                    {/* <h2 className="text-4xl font-bold text-black mt-20">Frequently Asked Questions</h2>
                    <p className="text-lg mt-5 text-black">All you need to know about our courses and services.</p> */}
                        <div className="flex justify-between font-semibold mt-10 mx-40">
                            <div>Course Contents</div>
                            <div>{accordionItems.length} Module{accordionItems.length > 1 ? 's' : ''}</div>
                        </div>
                    <div className="mt-10">
                        {accordionItems.map((item) => (
                            <Accordion key={item.id} type="single" collapsible className="lg:mx-32 bg-white rounded-full px-5 mb-5">
                                <AccordionItem value={item.id}>
                                    <AccordionTrigger className="flex justify-center">{item.language}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
