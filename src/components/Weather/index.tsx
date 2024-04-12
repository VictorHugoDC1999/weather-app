import Image from 'next/image';
import CloudyImage from '@/images/day/cloudy.jpg';

const Weather = () => {
  return (
    <div /* className="min-h-screen bg-center bg-no-repeat bg-cover text-white relative duration-500	opacity-100	before:content-[''] before:absolute before:left-0	before:top-0 before:w-full	before:h-full before:bg-black/30 before:z-0" */
    >
      <Image
        src={CloudyImage}
        alt="Cloudy Image"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Weather;
