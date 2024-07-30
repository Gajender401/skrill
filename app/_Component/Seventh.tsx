import React from 'react';
import { Button } from '@/Components/ui/button';

const Seventh = () => {
    return (
        <div className="w-full bg-orange-100 text-center py-10">
            <p className="lg:text-4xl font-semibold text-gray-800 lg:mx-10 mx-2">
                &quot;Don&#39;t Just Consume Technology, Create It! Enroll Now!&quot;
            </p>
            <Button className="bg-orange-500 text-white px-4 py-2 rounded-full w-4/12 shadow-md hover:bg-orange-600 transition-colors mt-10">
                Get Started
            </Button>
        </div>
    );
};

export default Seventh;
