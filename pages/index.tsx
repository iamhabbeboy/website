import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Typical from "react-typical";
import pageConfig from "../utility/pageConfig";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const { header } = pageConfig;
  const { email } = pageConfig.contact
  let [status, setStatus] = useState(null);

  return (
    <div className={""}>
      <Meta title="Abiodun Solomon" />
      <main>
        <Navigation action={setStatus} status={status} />
        <Header background="bg-theme" status={status}>
          <div className="mt-5 md:mt-20">
            <br/><br/><br/>
            <h2 className="text-5xl font-bold">
              {header.text[0]}
              <br /> <span className="text-red-500">{header.text[1]} </span>
            </h2>
            <h1 className="font-bold text-2xl text-gray-300 font-montserrat">
              {header.text[2]}
              <Typical
                steps={header.typical}
                loop={Infinity}
                className="inline-block"
              />
            </h1>
          </div>
          <div className={""}>
            <h3 className="mt-11 uppercase">Stay in touch</h3>
            <h2 className="mt-3 text-2xl text-gray-500 ">{email}</h2>
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Home;
