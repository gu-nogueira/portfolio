"use client";

import React from "react";
import Image from "next/image";

import { PrismicProject } from "@/types/prismic";

import { GithubLogo, ArrowUpRight } from "@phosphor-icons/react";
import Badge from "../ui/Badge";

interface ProjectsSectionProps {
  projects?: PrismicProject[];
}

const Projects: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => {
            const hoverClasses =
              "hover:mt-[-1.5rem] hover:mb-[1.5rem] hover:border-primary hover:dark:border-primary hover:shadow-2xl hover:shadow-blue-300 dark:hover:shadow-blue-900";
            return (
              <div
                key={project.id}
                className={`relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all ${hoverClasses}`}
              >
                <Image
                  src={project.imageUrl || ""}
                  alt={project.alt || ""}
                  className="w-full h-40 object-cover"
                  width={300}
                  height={200}
                />
                <div className="p-6">
                  <div className="mb-1">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    {project?.builtAt && (
                      <time className="text-sm text-gray-800 dark:text-gray-300">
                        {project?.builtAt}
                      </time>
                    )}
                  </div>
                  <p className="text-sm text-justify mb-3 text-gray-700 dark:text-gray-400">
                    {project.description?.map((paragraph, index) => (
                      <span key={`desc-${project.id}-${index}`}>
                        {paragraph.text}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tags &&
                      project.tags?.length > 0 &&
                      project?.tags.map((tag) => (
                        <Badge
                          key={`${project?.id}-${tag}`}
                          size="sm"
                          className="whitespace-nowrap me-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                  {project?.projectUrl?.url && (
                    <a
                      href={project.projectUrl?.url}
                      target={project.projectUrl?.target}
                      className="flex text-xl font-bold hover:text-primary transition-colors"
                    >
                      <ArrowUpRight className="mr-2" size={28} weight="bold" />
                      Live preview
                    </a>
                  )}
                  {project?.sourceCode?.url && (
                    <a
                      href={project.sourceCode?.url}
                      target={project.sourceCode?.target}
                      className="flex text-xl font-bold mt-4 hover:text-primary transition-colors"
                    >
                      <GithubLogo className="mr-2" size={28} weight="bold" />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
