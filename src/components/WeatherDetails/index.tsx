interface PropsWeatherDetails {
  text: string;
  number: string;
}

export const WeatherDetails = ({ text, number }: PropsWeatherDetails) => {
  // Weather Details
  return (
    <li className="text-slate-100 my-10 mx-0 flex justify-between items-center">
      <span>{text}</span>
      <span>{number}</span>
    </li>
  );
};
