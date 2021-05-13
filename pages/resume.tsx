import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { useState } from "react";
import Employment from "../components/Employment";
import pageConfig from "../utility/pageConfig";

const Resume = () => {
  const style = {
    left: "50%",
  };
  let [status, setStatus] = useState(null);
  const { link, employments } = pageConfig.resume;
  return (
    <div className={""}>
      <Meta title="Abiodun Solomon - Resume" />
      <main>
        <Navigation action={setStatus} status={status} />
        <Header background="bg-theme" status={status}>
          <h2 className="text-5xl font-bold text-white">Resume</h2>
          <div className="text-center md:my-0 my-10">
            <a
              href={link}
              target="_blank"
              className="bg-gray-800 p-5 text-lg transition ease-linear rounded-md hover:bg-indigo-600"
            >
              Download
            </a>
          </div>
          <div>
            <div className="relative wrap overflow-hidden p-0 md:p-10 h-full w-full">
              <div
                className="md:border-2-2 md:absolute md:border-opacity-20 md:border-gray-200 h-full md:border"
                style={style}
              ></div>
              {employments.map((employment, index) => {
                const { title, content, date, location } = employment
                let generateEvenPositionIndex = index%2 === 0 ? 'right' : 'left';
                return (
                  <Employment
                    index={index}
                    title={title}
                    date={date}
                    location={location}
                    activities={content}
                    position={generateEvenPositionIndex}
                  />
                )
              })}
            </div>
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Resume;
