type Props = {
  title: string | null;
  active?: string | null;
  pager?: any;
};
const defaultProps: Props = {
  active: '',
  title: '',
};

const ProjectLink: React.FC<Props> = ({ title, active, pager }) => {
  const bgColor = active ? 'red' : "blue";
  return (
    <span
      className={`p-2 text-${bgColor}-400 mr-1 rounded-sm hover:bg-indigo-800 transition duration-500 ease-in-out`}
      onClick={() => pager()}
    >
      <a href="#">{title}</a>
    </span>
  );
};

ProjectLink.defaultProps = defaultProps;
export default ProjectLink;
