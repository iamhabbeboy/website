interface Props {
  index: number;
  date: string;
  title: string;
  position: string;
  location: string,
  activities: string[];
}

const Employment: React.FC<Props> = ({ title, position, activities, date, location, index }) => {
  const bgTheme = position === "left" ? "bg-indigo-400" : "bg-gray-400";
  const timelinePosition = position === "left" ? "flex-row-reverse" : "";
  return (
    <div
      className={`sm:mb-8 sm:flex sm:justify-between sm:items-center w-full ${timelinePosition}`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center mx-auto my-10 sm:my-0 order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index+1}</h1>
      </div>
      <div
        className={`order-1 ${bgTheme} rounded-lg shadow-xl sm:w-5/12 px-6 py-4`}
      >
        <h3 className="mb-0 font-bold text-gray-800 text-md">{title}</h3>
        <h4 className="text-red-800 text-sm float-left">{location}</h4>
        <h4 className="text-red-800 text-tiny float-right">{date}</h4>
        <ul className="text-sm leading-snug tracking-wide clear-both text-gray-900 text-opacity-100 mt-2 list-disc pl-7">
            {activities.map((activity, index) => {
                return (
                    <li key={title + index} className="py-2">{activity}</li>
                )
            })}
        </ul>
      </div>
    </div>
  );
};
export default Employment;
