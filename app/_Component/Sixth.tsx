import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/Components/ui/accordion';

import bgImage from "@/public/question_m.svg";

const Sixth = () => {
  const accordionStyle = {
    backgroundImage: `url(${bgImage.src})`, // Use template literals
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    marginTop: '20px',
    minHeight: '200px',
  };

  return (
    <div className="w-full bg-white text-center py-10">
      <div style={accordionStyle}>
        <h2 className="lg:text-4xl font-bold text-black mt-20">Frequently Asked Questions</h2>
        <p className="text-lg mt-5 text-black">All you need to know about our courses and services.</p>
        <div className="mt-10">
          <Accordion type="single" collapsible className="lg:mx-32 bg-rose-950 rounded-lg px-5 ">
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-white lg:text-[20px] text-[15px] py-3'>1. What coding languages can I learn on this platform?</AccordionTrigger>
              <AccordionContent className='text-white lg:text-[20px] text-[15px]'>
                Yes, enjoy a 30-day free trial with a personalized onboarding session to jumpstart your learning journey.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-5">
          <Accordion type="single" collapsible className="lg:mx-32 bg-rose-950 rounded-lg px-5">
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-white lg:text-[20px] text-[15px] py-3'>2. Do I need any prior coding experience to get started?</AccordionTrigger>
              <AccordionContent className='text-white lg:text-[20px] text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda accusantium sapiente, earum doloribus voluptatum reiciendis velit voluptates consequuntur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-5">
          <Accordion type="single" collapsible className="lg:mx-32 bg-rose-950 rounded-lg px-5">
            <AccordionItem value="item-3">
            <AccordionTrigger className="text-white lg:text-[20px] text-[15px] py-3">3. How do I get help if I&apos;m stuck on a coding problem?</AccordionTrigger>
            <AccordionContent className='text-white lg:text-[20px] text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda accusantium sapiente, earum doloribus voluptatum reiciendis velit voluptates consequuntur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-5">
          <Accordion type="single" collapsible className="lg:mx-32 bg-rose-950 rounded-lg px-5">
            <AccordionItem value="item-4">
              <AccordionTrigger className='text-white lg:text-[20px] text-[15px] py-3'>4. Can I get a certificate after completing a course?</AccordionTrigger>
              <AccordionContent className='text-white lg:text-[20px] text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda accusantium sapiente, earum doloribus voluptatum reiciendis velit voluptates consequuntur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-5">
          <Accordion type="single" collapsible className="lg:mx-32 bg-rose-950 rounded-lg px-5">
            <AccordionItem value="item-5">
              <AccordionTrigger className='text-white lg:text-[20px] text-[15px] py-3'>5. Are there any projects or hands-on activities included in the courses?</AccordionTrigger>
              <AccordionContent className='text-white lg:text-[20px] text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda accusantium sapiente, earum doloribus voluptatum reiciendis velit voluptates consequuntur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="p-5 justify-center flex mt-20">
          <div className="lg:w-4/12 bg-white p-10 rounded-3xl text-start shadow-lg">
            <p className='font-semibold text-rose-950'>For more queries, contact us:</p>
            <div className="flex items-center gap-2">
              <MdPhone className='text-orange-500' size={24} />
              <span className='text-rose-950'>Phone:</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className='text-orange-500' size={24} />
              <span className='text-rose-950'>Email:</span>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
