export const Details = () => {
  // Details
  return (
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
  );
};
