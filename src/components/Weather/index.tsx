import BackgroundImage from '../BackgroundImage';
import CityTemp from '../CityTemp';
import Panel from '../Panel';

const Weather = () => {
  return (
    <div className="text-stone-50">
      <BackgroundImage />

      {/* Container */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start flex-col pt-12 pb-16 px-12">
        <h3 className="font-normal text-base">the weather</h3>
        <CityTemp />
      </div>
      <Panel />
    </div>
  );
};

export default Weather;
