import React from 'react';

const Nine = () => {
    return (
        <div className="flex flex-col items-center py-16 bg-orange-100">
            <h2 className="text-3xl font-bold mb-4">Learn More, Spend Less</h2>
            <p className="text-center mb-10 max-w-2xl text-gray-600">
                While our competitors offer courses at significantly higher prices, we are committed to providing quality education at affordable rates without compromising on any program features.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-white border border-gray-200 rounded-[24px] p-8  w-full md:w-1/2 lg:w-1/4 ">
                    <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Others</h3>
                    <p className="text-3xl font-bold text-gray-800 mb-6">₹3,00,000</p>
                    </div>
                    <ul className="text-gray-600 space-y-3 list-dotted text-[18px]">
                        <li>3-6 months Duration</li>
                        <li>Typically larger batches, often resulting in less personal assistance</li>
                        <li>Job support is often limited to the end of the course</li>
                    </ul>
                </div>
                <div className="bg-orange-500 text-white rounded-[24px] p-8  w-full md:w-1/2 lg:w-1/4 shadow-lg">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Skrill School</h3>
                        <p className="text-3xl font-bold mb-2 line-through text-opacity-10">₹45,000</p>
                        <p className="text-3xl font-bold mb-6">₹30,000</p>
                    </div>
                    <ul className="space-y-3 text-[18px] list-dotted">
                        <li>6 month Duration</li>
                        <li>Each batch consists of only 25 students, ensuring personalized assistance</li>
                        <li>Live Doubt Sessions with Mentors</li>
                        <li>Provides continuous job support from the beginning of the course until successful placement.</li>
                    </ul>
                    <button className="mt-6 bg-white text-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-100">Enroll now</button>
                </div>
            </div>
        </div>
    );
}

export default Nine;
