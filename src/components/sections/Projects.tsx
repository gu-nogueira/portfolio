import React from "react";
import Image from "next/image";

import { PrismicProject } from "@/types/prismic";

interface ProjectsSectionProps {
  projects: PrismicProject[] | undefined;
}

const Projects: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.imageUrl}
                alt={project.alt}
                className="w-full h-40 object-cover"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                {project?.tags?.length > 0 &&
                  project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="inline-block bg-gray-200 rounded-sm px-2 py-0.5 text-xs font-semibold text-gray-700 mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                <div className="flex justify-between mt-4">
                  <a
                    href={project.projectUrl?.url}
                    target={project.projectUrl?.target}
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                  <a
                    href={project.sourceCode?.url}
                    target={project.sourceCode?.target}
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Source code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
