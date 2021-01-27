type Props = {
  title: string;
  active?: string;
  pager?: any;
};

const ProjectLink: React.FC<Props> = ({ title, active, pager }) => {
  const bgColor = active ? 'red' : "blue";
  console.log(active);
  return (
    <span
      className={`p-2 text-${bgColor}-400 mr-1 rounded-sm hover:bg-indigo-800 transition duration-500 ease-in-out`}
      onClick={() => pager()}
    >
      <a href="#">{title}</a>
    </span>
  );
};

export default ProjectLink;

ProjectLink.defaultProps = {
  color: "",
  title: "",
};
