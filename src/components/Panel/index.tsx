import { IoSearch } from 'react-icons/io5';

const Panel = () => {
  return (
    <div className="absolute w-2/5 h-full top-0 right-0 bg-[rgba(110,110,110,0.25)] shadow-black	backdrop-blur-md	border-[1px] divide-solid border-white/20 z-10 py-10 px-8 overflow-y-scroll md:relative md:w-full">
      {/* Location Input */}
      <form className="mb-12" action="">
        <input
          type="text"
          className="bg-transparent border-b-[1px] border-slate-100	pt-1 pr-4 pb-1 pl-0 w-4/5 text-white text-lg font-normal focus:outline-none placeholder:text-slate-100 sx:text-base"
          placeholder="Search Location"
        />
        <button
          className="absolute top-0 right-0 p-7 border-none outline-none bg-orange-500 text-white cursor-pointer text-2xl duration-500 hover:bg-white hover:text-black sx:text-lg"
          type="submit"
        >
          <IoSearch />
        </button>
      </form>

      {/* Cities */}
      <ul className="pt-0 pl-0 pb-4 pr-0 my-8 mx-0 border-b-[1px] border-slate-100">
        <li className="text-slate-100 my-10 mx-0 block cursor-pointer duration-500 hover:text-white">
          New York
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

      {/* Details */}
      <ul className="pt-0 pl-0 pb-4 pr-0 my-8 mx-0 border-b-[1px] border-slate-100">
        <h4 className="my-12 mx-0">Weather Details</h4>
        <li className="text-slate-100 my-10 mx-0 flex justify-between items-center">
          <span>Cloudy</span>
          <span>89%</span>
        </li>

        <li className="text-slate-100 my-10 mx-0 flex justify-between items-center">
          <span>Humidity</span>
          <span>64%</span>
        </li>

        <li className="text-slate-100 my-10 mx-0 flex justify-between items-center">
          <span>Wind</span>
          <span>8km/h</span>
        </li>
      </ul>
    </div>
  );
};

export default Panel;
Panel;
