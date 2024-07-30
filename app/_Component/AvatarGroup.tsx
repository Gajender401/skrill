import React from 'react';
import Image from 'next/image';

const AvatarGroup: React.FC = () => {
  return (
    <div className="div">
      <div className="flex items-center">
        <div
          className=" rounded-full overflow-hidden  -ml-4 first:ml-0"
          style={{ zIndex: 4 }}
        >
          <Image src="/e1.svg" alt="Avatar 1" width={50} height={40} objectFit="cover" />
        </div>
        <div
          className=" rounded-full overflow-hidden  -ml-4"
          style={{ zIndex: 3 }}
        >
          <Image src="/e2.svg" alt="Avatar 2" width={50} height={40} objectFit="cover" />
        </div>
        <div
          className=" rounded-full overflow-hidden  -ml-4"
          style={{ zIndex: 2 }}
        >
          <Image src="/e3.svg" alt="Avatar 3" width={50} height={40} objectFit="cover" />
        </div>
        <div className=" rounded-full overflow-hidden  -ml-4" style={{ zIndex: 1 }}>
          <Image src="/e4.svg" alt="Avatar 4" width={50} height={40} objectFit="cover" />
        </div>
        <div className="w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center  ">
          <span className="text-xl font-semibold text-white">+</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarGroup;
