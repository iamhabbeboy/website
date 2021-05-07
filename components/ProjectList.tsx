type Props = {
  title: string;
  description?: string;
};

const ProjectList: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      className="pt-4 pb-4 pr-4">
      <h3 className="text-lg text-red-300 pb-3">{title}</h3>
      <p className="text-tiny pb-3">{description}</p>
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
