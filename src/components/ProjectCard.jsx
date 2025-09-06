import React from "react";

const ProjectCard = ({ project }) => {
  const { tech, title, description, link, github } = project;
  return (
    <div className="relative group bg-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-200">
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition duration-500">
          {title}
        </h3>
        <p className="text-gray-600 font-mono mt-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-500"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border-2 border-gray-400 text-gray-700 font-medium hover:bg-gray-200 transition duration-500"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"></div>
    </div>
  );
};

export default ProjectCard;
