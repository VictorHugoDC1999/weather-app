import Image from 'next/image';
import { useState } from 'react';
//
const IconTemp = ({ weather }: any) => {
  return (
    <Image
      className="block my-2 mx-0"
      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
      width={90}
      height={90}
      alt="Icon Temp"
    />
  );
};

export default IconTemp;
