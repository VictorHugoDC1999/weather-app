import { useEffect, useState } from 'react';
import { WeatherDetails } from '../WeatherDetails';

export const Details = ({ weather }: any) => {
  const [weatherData, setWeatherData] = useState(weather);

  // console.log(weather);

  // useEffect(() => {
  //   setWeatherData(weather);
  //   console.log(atualiz);
  // }, [weather]);

  // Details
  return (
    <ul className="pt-0 pl-0 pb-4 pr-0 my-8 mx-0 border-b-[1px] border-slate-100">
      <h4 className="my-12 mx-0">Weather Details</h4>

      <WeatherDetails
        text="Cloudy"
        number={weatherData.clouds.all}
        textsecondary="%"
      />

      <WeatherDetails
        text="Humidity"
        number={weatherData.main.humidity}
        textsecondary="%"
      />

      <WeatherDetails
        text="Wind"
        number={Math.round(weatherData.wind.speed)}
        textsecondary="km/h"
      />
    </ul>
  );
};
