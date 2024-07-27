'use-client';

import { useProcessing } from '@/data/hooks/useProcessing';
import { useCallback, useState } from 'react';

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

export const useWeather = () => {
  const { processing, startProcessing, finishProcessing } = useProcessing();
  const [data, setData] = useState();
  const [cityInput, setCityInput] = useState<string>('London');

  const fetchWeatherData = useCallback(
    async function () {
      console.log('fetchedWeatherData called');
      console.log(data);
      

      try {
        startProcessing();
        const key = 'd06cdb298fafc83c520d5ab677fc477e';
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          cityInput
        )}&units=metric&lang=pt_br&appid=${key}`;
        const resp = await fetch(apiURL);
        const dataWeather = await resp.json();
        return dataWeather;

        // if (dataWeather.cod === 200) {
        //   setData(currentData => (currentData = dataWeather));
        // } else {
        //   console.log('Erro');
        // }
      } catch {
        console.log('Erro');

        //Aqui vou colocar o ToastyFy-Js para quando não encontrarmos a Cidade
      } finally {
        finishProcessing();
      }
    },
    [startProcessing, finishProcessing]
  );

  return {
    fetchWeatherData,
    processing,
    data,
    setData,
    cityInput,
    setCityInput
  };
};
