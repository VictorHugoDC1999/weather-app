'use-client';

import Image from 'next/image';
import CloudyImage from '@/images/day/cloudy.jpg';

const BackgroundImage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover relative duration-500	opacity-100	before:content-[''] before:absolute before:left-0	before:top-0 before:w-full	before:h-full before:bg-black/10 before:z-10">
      <Image
        className="fixed h-screen"
        src={CloudyImage}
        alt="Background Image"
      />
    </div>
  );
};

export default BackgroundImage;
