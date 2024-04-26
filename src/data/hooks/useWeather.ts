'use-client';

import { useProcessing } from '@/data/hooks/useProcessing';
import { useState } from 'react';

export const useWeather = () => {
  const { processing, startProcessing, finishProcessing } = useProcessing();
  const [data, setData] = useState<any>();
  const [cityInput, setCityInput] = useState<string>('London');

  async function fetchWeatherData() {
    try {
      startProcessing();
      // event.preventDefault();
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          cityInput
        )}&units=metric&lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`
      );
      const dataWeather = await resp.json();
      setData(dataWeather);

      if (dataWeather.cod === 200) {
        console.log(dataWeather);
      }
    } catch {
      //Aqui vou colocar o ToastyFy-Js para quando não encontrarmos a Cidade
    } finally {
      finishProcessing();
    }
  }

  return { fetchWeatherData, processing, data, cityInput, setCityInput };
};
