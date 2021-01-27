type Props = {
  title: string;
  data?: string;
  category: string;
};

const ProjectList: React.FC<Props> = ({ title, data, category }) => {
  const dataState = data == null ? 'all' : data;
  return (
    <div
      className={`pt-4 pb-4 pr-4 ${
        dataState !== "all"  && category !== dataState ? " hidden" : ""
      }`}
    >
      <h3 className="text-lg text-red-300">{title}</h3>
      <p className="text-tiny">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa in
        tempora commodi consequuntur voluptate fuga. Totam libero minus omnis,
        amet hic porro eius explicabo expedita quod velit quo, facilis eaque.
      </p>
      <div className="text-tiny">
      <a href="#" className="text-gray-500  hover:underline">
        Github
      </a>
      <a href="#" className="text-gray-500 hover:underline ml-3">
        View Live
      </a>
      </div>
    </div>
  );
};
export default ProjectList;
