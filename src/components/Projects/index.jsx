import React from "react";

import ProjectsItem from "./ProjectsItem";

import "./styles.scss";

import projects from "../../model/projects";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container">
        {projects.map((item, index) => (
          <ProjectsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
