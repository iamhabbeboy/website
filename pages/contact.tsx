import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import pageConfig from "../utility/pageConfig";
import { useState } from "react";

const Contact = () => {
  const { email, github, twitter, linkedIn, devTo, phone } = pageConfig.contact;
  const { domain } = pageConfig.nav;
  let [status, setStatus] = useState(null);
  return (
    <div className="">
      <Meta>
        <title>Abiodun Azeez - Contact</title>
        <meta name="Description" content={""}></meta>
      </Meta>
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

            <div className="grid grid-cols-4 md:w-2/3 w-full mt-5">
              <div className="pt-3 pb-3">
                <a href={`https://github.com/${github}&utm_medium=${domain}`} className="pt-5 text-red-400" target="_blank"> Github</a>
              </div>
              <div className="pt-3 pb-3">
                <a href={`https://twitter.com/${twitter}&utm_medium=${domain}`} className=" pt-5 text-red-400" target="_blank">Twitter</a>
              </div>
              <div className="pt-3 pb-3">
                <a href={`https://dev.to/${devTo}&utm_medium=${domain}`} className="pt-5 text-red-400" target="_blank">Blog</a>
              </div>
              <div className="pt-3 pb-3">
                <a href={`https://linkedin.com/in/${linkedIn}&utm_medium=${domain}`} className="pt-5 text-red-400" target="_blank">LinkedIn</a>
              </div>
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Contact;
