import { useWeather } from '@/data/hooks/useWeather';

export const Cities = () => {
  const { fetchWeatherData, cityInput, setCityInput } = useWeather();
  console.log(cityInput);

  // Cities
  return (
    <ul className="pt-0 pl-0 pb-4 pr-0 my-8 mx-0 border-b-[1px] border-slate-100">
      <li className="text-slate-100 my-10 mx-0 block cursor-pointer duration-500 hover:text-white">
        <button
          onClick={() => {
            setCityInput('New York');
            fetchWeatherData();
          }}
        >
          New York
        </button>
      </li>
      <li className="text-slate-100 my-10 mx-0 block cursor-pointer duration-500 hover:text-white">
        California
      </li>
      <li className="text-slate-100 my-10 mx-0 block cursor-pointer duration-500 hover:text-white">
        Paris
      </li>
      <li className="text-slate-100 my-10 mx-0 block cursor-pointer duration-500 hover:text-white">
        Tokyo
      </li>
    </ul>
  );
};
