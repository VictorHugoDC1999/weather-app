import Image from 'next/image';

const IconTemp = () => {
  return (
    <Image
      className="block my-2 mx-0"
      src="http://openweathermap.org/img/wn/13d@2x.png"
      width={90}
      height={90}
      alt="Icon Temp"
    />
  );
};

export default IconTemp;
