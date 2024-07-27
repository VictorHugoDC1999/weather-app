import { WeatherDetails } from '../WeatherDetails';

export const Details = ({ weather }: any) => {
  // console.log(weather);

  // Details
  return (
    <ul className="pt-0 pl-0 pb-4 pr-0 my-8 mx-0 border-b-[1px] border-slate-100">
      <h4 className="my-12 mx-0">Weather Details</h4>

      <WeatherDetails text="Cloudy" number={`${weather.clouds.all}%`} />

      <WeatherDetails text="Humidity" number={`${weather.main.humidity}%`} />

      <WeatherDetails
        text="Wind"
        number={`${Math.round(weather.wind.speed)}km/h`}
      />
    </ul>
  );
};
