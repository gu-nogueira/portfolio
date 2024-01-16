import React from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="py-16 text-center bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
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
