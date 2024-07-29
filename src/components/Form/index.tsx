import { useWeather } from '@/data/hooks/useWeather';
import { IoSearch } from 'react-icons/io5';

export const Form = () => {
  // Location Input
  const { fetchWeatherData, cityInput, setCityInput } = useWeather();

  const searchCity = () => {};

  return (
    <div className="mb-12">
      <input
        // onChange={e => setCityInput(e.target.value)}
        type="text"
        className="bg-transparent border-b-[1px] border-slate-100	pt-1 pr-4 pb-1 pl-0 w-4/5 text-white text-lg font-normal focus:outline-none placeholder:text-slate-100 sx:text-base"
        placeholder="Search Location"
      />
      <button
        onClick={fetchWeatherData}
        className="absolute top-0 right-0 p-7 border-none outline-none bg-orange-500 text-white cursor-pointer text-2xl duration-500 hover:bg-white hover:text-black sx:text-lg"
      >
        <IoSearch />
      </button>
    </div>
  );
};
