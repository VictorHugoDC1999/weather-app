interface PropsWeatherDetails {
  text: string;
  textsecondary: string;
  number: number;
}

export const WeatherDetails = ({
  text,
  textsecondary,
  number
}: PropsWeatherDetails) => {
  // Weather Details
  return (
    <li className="text-slate-100 my-10 mx-0 flex justify-between items-center">
      <span>{text}</span>
      <div className="flex">
        <span>{number}</span>
        <span>{textsecondary}</span>
      </div>
    </li>
  );
};
