'use-client';

import { useWeather } from '@/data/hooks/useWeather';
import IconTemp from '../IconTemp';
import { useState, useEffect } from 'react';

const CityTemp = ({ weather }: any) => {
  return (
    <div className="flex justify-center items-center sx:flex-col">
      {/* Temp */}
      <h1 className="m-0 text-8xl font-normal sx:mb-6">
        {Math.round(weather.main.temp)}&#176;
      </h1>
      {/* City Name */}
      <div className="flex justify-center items-center flex-col my-0 mx-4">
        <h1 className="m-0 mb-4 font-normal text-5xl">{weather.name}</h1>

        <small>
          {/* City Time */}
          <span className="my-0 mx-3">06:09</span>-
          <span className="my-0 mx-3">Monday Sep 19</span>
        </small>
      </div>
      {/* Weather */}
      <div className="flex flex-col justify-center items-center my-0 mx-4">
        <IconTemp weather={weather} />
        {/* Condition */}
        <span className="capitalize">{weather.weather[0].description}</span>
      </div>
    </div>
  );
};

export default CityTemp;
