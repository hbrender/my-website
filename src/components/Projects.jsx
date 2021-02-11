import React from 'react';
import Project from './Project';
import projects from "../projects";

function Projects() {
  return (
    <div id="projects" className="light">
      <h2><span className="first-letter">p</span>rojects</h2>
      
      {projects.map((project, index) => (
          <Project
            key={project.key}
            name={project.name}
            description={project.description}
            srcCode={project.srcCode}
            images={project.images}
          />
        ))}
      {/* <Project />
      <Project /> */}
    </div>
  );
}

export default Projects;
