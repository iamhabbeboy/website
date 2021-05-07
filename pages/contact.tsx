import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import pageConfig from "../utility/pageConfig";
import Twitter from "../components/Twitter";
import LinkedIn from "../components/LinkedIn";
import Github from "../components/Github";
import DevTo from "../components/DevTo";
import { useState } from "react";

const Contact = () => {
  const { email, github, twitter, linkedIn, devTo, phone } = pageConfig.contact;
  const { domain } = pageConfig.nav;
  let [status, setStatus] = useState(null);
  return (
    <div className="">
      <Meta title="Abiodun Solomon::Contact" />
      <main>
        <Navigation action={setStatus} status={status} />
        <Header background="bg-theme" status={status}>
          <h2 className="text-5xl font-bold text-white">Contact</h2>
          <ul>
            <li className="text-xl mt-5 pb-3">
                Email Address: <a href={`mailto:${email}`} className="text-gray-500">
                  {email}
                  </a>
              </li>
              <li className="text-xl mt-5 pb-3">
                Phone Number: <div className="text-gray-500"> {phone}</div>
              </li>
            </ul>

            <div className="flex w-full mt-5">
              <div className="pt-3 pb-3 w-3/12 text-center">
                Github
                <br/><a href={`https://github.com/${github}&utm_medium=${domain}`} className="pt-5 text-red-400" target="_blank"> {github}</a>
              </div>
              <div className="pt-3 pb-3 w-3/12 text-center">
                Twitter <br/> <a href={`https://twitter.com/${twitter}&utm_medium=${domain}`} className="pl-5 pt-5 text-red-400" target="_blank">{twitter}</a>
              </div>
              <div className="pt-3 pb-3 w-3/12 text-center">
                Blog <br/> <a href={`https://dev.to/${devTo}&utm_medium=${domain}`} className="pl-5 pt-5 text-red-400" target="_blank">{devTo}</a>
              </div>
              <div className="pt-3 pb-3 w-3/12 text-center">
                LinkedIn <br/> <a href={`https://linkedin.com/in/${linkedIn}&utm_medium=${domain}`} className="pl-5 pt-5 text-red-400" target="_blank">{linkedIn}</a>
              </div>
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Contact;
