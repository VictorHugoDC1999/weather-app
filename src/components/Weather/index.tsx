'use client';

import { useWeather } from '@/data/hooks/useWeather';
import BackgroundImage from '../BackgroundImage';
import CityTemp from '../CityTemp';
import Panel from '../Panel';
import { useEffect } from 'react';

const Weather = () => {
  const { fetchWeatherData, processing } = useWeather();
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div
      className={`text-stone-50 sx:min-h-28 ${
        processing ? 'opacity-100' : 'opacity-100'
      }`}
    >
      <BackgroundImage />
      {/* Container */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start flex-col pt-12 pb-16 px-12 sx:items-center">
        <h3 className="font-normal text-base md:relative md:w-full">
          the weather
        </h3>
        <CityTemp />
      </div>
      <Panel />
    </div>
  );
};

export default Weather;
