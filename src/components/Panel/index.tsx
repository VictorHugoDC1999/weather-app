'use client';

import { useWeather } from '@/data/hooks/useWeather';
import { Form } from '../Form';
import { Cities } from '../Cities';
import { Details } from '../Details';

const Panel = () => {
  const { fetchWeatherData, processing } = useWeather();

  return (
    <div className="absolute w-2/5 h-full top-0 right-0 bg-[rgba(110,110,110,0.25)] shadow-black	backdrop-blur-md	border-[1px] divide-solid border-white/20 z-10 py-10 px-8 overflow-y-scroll md:relative md:w-full">
      {/* Location Input */}
      <Form />

      {/* Cities */}
      <Cities />

      {/* Details */}
      <Details />
    </div>
  );
};

export default Panel;
Panel;
