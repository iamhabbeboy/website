import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Meta from "../components/Meta";
import ProjectList from "../components/ProjectList";

const Project = () => {
  let [status, setStatus] = useState(null);
  return (
    <div className={""}>
      <Meta title="Abiodun Solomon::portfolio" />
      <main>
        <Navigation action={setStatus} status={status} />
        <Header background="bg-theme" status={status}>
          <h2 className="text-5xl font-bold text-white">Projects</h2>

          <div className="grid grid-cols-2 gap-2">
            <ProjectList title="Document Stamper" description="Hello world"/>
            <ProjectList
              title="Job crawler"
              description="
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa in
              tempora commodi consequuntur voluptate fuga. Totam libero minus omnis,
              amet hic porro eius explicabo expedita quod velit quo, facilis eaque."
            />
          </div>
        </Header>
      </main>
    </div>
  );
};

export default Project;
