type Props = {
  title: string;
  description?: string;
  github?: string;
  url?: string;
};

const ProjectList: React.FC<Props> = ({ title, description, github, url}) => {
  return (
    <div
      className="pt-4 pb-4 pr-4">
      <h3 className="text-lg text-red-300 pb-3">{title}</h3>
      <p className="text-tiny pb-3">{description}</p>
      <div className="text-tiny">
      <a href={github} className={`text-gray-500  hover:underline ${!github ? 'hidden' : '' }`} target="_blank">
        Github
      </a>
      <a href={url} className={`text-gray-500 hover:underline ml-3 ${!url ? 'hidden' : '' }`}>
        View Live
      </a>
      </div>
    </div>
  );
};
export default ProjectList;
