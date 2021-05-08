import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ProjectList from "../components/ProjectList";
import pageConfig from "../utility/pageConfig";

const Project = () => {
  let [status, setStatus] = useState(null);
  const { domain } = pageConfig.nav;
  return (
    <div className={""}>
      <Meta title="Abiodun Solomon - Portfolio" />
      <main>
        <Navigation action={setStatus} status={status} />
        <Header background="bg-theme" status={status}>
          <h2 className="text-5xl font-bold text-white">Projects</h2>

          <div className="sm:grid sm:grid-cols-2 sm:gap-2">
            <ProjectList
              title="Document Stamper"
              description="This is a web app that is used to stamp pdf document while a logo is added"
              url={`http://powerbox.megatronicspower.com?utm_source=${domain}`}
              github={`https://github.com/iamhabbeboy/cli-job?utm_source=${domain}`}
            />
            <ProjectList
              title="Voltage calculator"
              description="This is an app built to calculate the total watt and voltage of total appliances in a home/office, etc."
              url={`http://powerbox.megatronicspower.com?utm_source=${domain}`}
            />
            <ProjectList
              title="Job crawler"
              description="
              This is a CLI tool that crawl jobs from website such stackover/jobs"
              github={`https://github.com/iamhabbeboy/cli-job?utm_source=${domain}`}
            />

            <ProjectList
              title="Bible scriptures Chrome extension"
              description="
              This is a chrome extension that display random bible verses with bible lookup filter"
              github={`https://github.com/iamhabbeboy/cli-job?utm_source=${domain}`}
            />
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Project;
