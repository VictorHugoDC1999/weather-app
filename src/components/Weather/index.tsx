'use client';

import  useWeather  from '@/data/hooks/useWeather';
import BackgroundImage from '../BackgroundImage';
import CityTemp from '../CityTemp';
import Panel from '../Panel';
import { useEffect, useState } from 'react';

const Weather = () => {
  const { processing, data, setData, searchCity, fetchWeatherData } =
    useWeather();
  const [weather, setWeather] = useState(data);

  console.log(data);
  

  useEffect(() => {
    console.log('aqui');
  }, [searchCity]);

  if (!data) {
    return (
      <div className={`${processing ? 'opacity-0' : 'opacity-100'}`}></div>
    );
  }

  return (
    <div className={`text-stone-50 sx:min-h-28`}>
      <BackgroundImage />
      {/* Container */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start flex-col pt-12 pb-16 px-12 sx:items-center">
        <h3 className="font-normal text-base md:relative md:w-full">
          the weather
        </h3>
        <CityTemp weather={data} />
      </div>
      <Panel weather={data} />
    </div>
  );
};

export default Weather;
