import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import pageConfig from "../utility/pageConfig";
import Twitter from "../components/Twitter";
import LinkedIn from "../components/LinkedIn";
import Github from "../components/Github";
import DevTo from "../components/DevTo";

const Contact = () => {
  const { email, github, twitter, linkedIn, devTo } = pageConfig.contact;
  return (
    <div className="">
      <Meta title="Abiodun Solomon::Contact" />
      <main>
        <Navigation />
        <Header background="bg-theme">
          <h2 className="text-5xl font-bold text-white">Contact</h2>
          <h1 className="text-3xl mt-5">
            📩{" "}
            <a href={email} className="text-gray-500">
              {email}
            </a>
          </h1>
          <div className="">
            <a href={`https://github.com/${github}`}>
              <Github /> {github}
            </a>
            <a href={`https://twitter.com/${twitter}`} className="pl-5">
              <Twitter /> {twitter}
            </a>
            <a href={`https://linkedin.com/in/${linkedIn}`} className="pl-5">
              <LinkedIn /> {linkedIn}
            </a>
            <a href={`https://dev.to/${devTo}`} className="pl-5">
              <DevTo /> {devTo}
            </a>
          </div>

          {/* <div className="flex bg-white">
            <div className="flex-none w-24 h-16 bg-red-300">lfkjsdf</div>
            <div className="flex-grow h-16 bg-red-200">sldkjsldf</div>
          </div> */}
        </Header>
      </main>
    </div>
  );
};

export default Contact;
