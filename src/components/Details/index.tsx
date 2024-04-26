import { WeatherDetails } from '../WeatherDetails';

export const Details = () => {
  // Details
  return (
    <ul className="pt-0 pl-0 pb-4 pr-0 my-8 mx-0 border-b-[1px] border-slate-100">
      <h4 className="my-12 mx-0">Weather Details</h4>

      <WeatherDetails text="Cloudy" number="89%" />

      <WeatherDetails text="Humidity" number="64%" />

      <WeatherDetails text="Wind" number="8km/h" />
    </ul>
  );
};
