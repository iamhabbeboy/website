import pageConfig from "../utility/pageConfig";

const Footer = () => {
  const { email } = pageConfig.contact;
  return (
    <footer>
      <div className={""}>
        <h3 className="mt-11 uppercase">Stay in touch</h3>
        <h2 className="mt-3 text-2xl text-gray-500 ">{email}</h2>
      </div>
    </footer>
  );
};
export default Footer;
