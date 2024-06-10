import projects from "@/db/projects";
import Title from "@/shared/components/Title";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Projects: React.FC = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-2 bg-primary-bg border border-[#383838] p-4 rounded-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex justify-between">
              <h2 className="text-[#f6f6f6] text-xl">{project.title}</h2>
              <div className="flex justify-end gap-2 items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-[#9F9F9F] hover:text-primary-color text-xl" />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 items-center"
                >
                  <FaLink className="text-[#9F9F9F] hover:text-primary-color text-xl" />
                </a>
              </div>
            </div>
            <p className="text-[#f6f6f6b6] text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="bg-primary-bg border border-[#383838] py-1 px-2 text-[#d6d6d6] text-xs rounded-2xl hover:text-primary-color duration-150"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
