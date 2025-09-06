import React from "react";
import { PROJECTS } from "../../constant/ProjectData.js";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          🚀 My <span className="text-blue-600">Projects</span>
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
