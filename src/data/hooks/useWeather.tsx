'use-client';

import { useProcessing } from '@/data/hooks/useProcessing';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

interface PropsWeather {
  cod: number;
  clouds: {
    all: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  timezone: number;
  weather: [main: string];
  wind: {
    speed: number;
  };
}

export default function useWeather() {
  const { processing, startProcessing, finishProcessing } = useProcessing();
  const [data, setData] = useState();
  const [cityInput, setCityInput] = useState<string>('London');

  const searchCity = (city: string) => {
    setCityInput(city);
  };

  const fetchWeatherData = useCallback(
    async function () {
      // console.log('fetchedWeatherData called', cityInput);
      const key = 'd06cdb298fafc83c520d5ab677fc477e';
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        cityInput
      )}&units=metric&lang=pt_br&appid=${key}`;

      try {
        startProcessing();
        const response = await axios.get(apiURL);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        finishProcessing();
      }
    },
    [cityInput]
  );

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData, cityInput]);

  // console.log(data);

  return {
    cityInput,
    fetchWeatherData,
    searchCity,
    processing,
    data,
    setData
  };
}
