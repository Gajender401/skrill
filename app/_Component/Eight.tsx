import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '@/Components/ui/card';
import Image from 'next/image';

const Eight = () => {
    // Define an array of card data for simplicity
    const cardData = [
        { imgSrc: "/hc1.svg", alt: "Intermediate & Advance concepts", description: "The intermediate and advanced stages of your full-stack development journey will delve deeper into both front-end and back-end development."},
        { imgSrc: "/hc2.svg", alt: "Live Doubt Sessions With Mentors", description: "Never get stuck! Our mentors are here to answer your specific questions and guide you through any challenges you encounter during your learning journey." },
        { imgSrc: "/hc3.svg", alt: "Track Your Journey", description: "Stay motivated and focused with detailed reports and analytics that track your progress throughout the course" },
        { imgSrc: "/hc4.svg", alt: "Work on Live Projects", description: "Gain practical experience by building real-world applications used by businesses or organizations." },
        { imgSrc: "/hc5.svg", alt: "Resume building", description: "Showcase your newly acquired skills and projects on a compelling resume that grabs the attention of potential employers." },
        { imgSrc: "/hc6.svg", alt: "Practice Mock Interviews", description: "Refine your interview skills through mock interviews with valuable feedback from our team." },
        { imgSrc: "/hc7.svg", alt: "Launch Your Developer Career", description: "Our program equips you with the skills and guidance to land an internship, gaining valuable hands-on experience and making a strong first impression in the tech industry." }
    ];

    return (
        <div className='bg-[#2f2622] rounded-3xl py-20 lg:px-20 px-5'>
            <div className="text-center mb-8 lg:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    Explore Our Exciting Learning Paths
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                {cardData.map((card, index) => (
                    <Card key={index} className='w-full flex flex-col bg-[#4a3d37] transition-colors duration-300 hover:bg-white hover:text-black'>
                        <CardHeader className="flex flex-col items-start p-4 transition-colors duration-300 ">
                            <div className='rounded-full border h-10 w-10 flex items-center justify-center overflow-hidden bg-white'>
                                <Image className='' src={card.imgSrc} width={40} height={30} alt={card.alt} />
                            </div>
                            <CardDescription className="mt-8 text-left font-semibold ">{card.alt}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-left p-4 transition-colors duration-300 ">
                            <p>{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Eight;
