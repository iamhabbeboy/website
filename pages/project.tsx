import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ProjectList from "../components/ProjectList";
import ProjectLink from "../components/ProjectLink";

const Project = () => {
  const [pager, setPager] = useState(null);
  return (
    <div className={""}>
      <Meta title="Abiodun Solomon::portfolio" />
      <main>
        <Navigation />
        <Header background="bg-theme">
          <h2 className="text-5xl font-bold text-white">Projects</h2>
          <div>
            <ProjectLink
              title="All"
              active={pager}
              pager={() => setPager("all")}
            />
            <ProjectLink
              title="Chrome Extension"
              pager={() => setPager("extension")}
            />
            <ProjectLink title="Hybrid App" pager={() => setPager("hybrid")} />
            <ProjectLink title="Libs Packages" pager={() => setPager("libs")} />
            <ProjectLink title="Others" pager={() => setPager("other")} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ProjectList title="Bible verses" data={pager} category="other" />
            <ProjectList
              title="Document Stamper"
              data={pager}
              category="other"
            />
            <ProjectList
              title="Chrome extension for daily bible verses"
              category="extension"
              data={pager}
            />
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Project;
