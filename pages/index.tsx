import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Typical from "react-typical";
import pageConfig from "../utility/pageConfig";
import Footer from "../components/Footer";

const Home = () => {
  const { header } = pageConfig;
  return (
    <div className={""}>
      <Meta title="Abiodun Solomon::portfolio" />
      <main>
        <Navigation />
        <Header background="bg-theme">
          <div className="mt-20">
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
          <Footer />
        </Header>
      </main>
    </div>
  );
};

export default Home;
