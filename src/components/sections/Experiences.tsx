"use client";

import React from "react";

import { Suitcase } from "@phosphor-icons/react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface ExperiencesProps {
  experiences: Experience[];
}

const mockExperiences = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Apple",
    startDate: "2020-01-01",
    endDate: "2022-01-01",
    location: "Remote",
    description: "Description of experience 1",
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Apple",
    startDate: "2020-01-01",
    endDate: "2022-01-01",
    location: "Remote",
    description: "Description of experience 1",
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Apple",
    startDate: "2020-01-01",
    endDate: "2022-01-01",
    location: "Remote",
    description: "Description of experience 1",
  },
];

const Experiences: React.FC<ExperiencesProps> = ({
  experiences = mockExperiences,
}) => {
  return (
    <section id="experiences" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
        <div className="relative">
          <ol
            className={`relative border-s border-gray-200 dark:border-gray-700`}
          >
            {experiences.map((experience) => {
              // const isOdd = (index + 1) % 2 === 0;
              // const isLast = index === experiences.length - 1;
              return (
                <li key={`experience-${experience.id}`} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <Suitcase
                      size={18}
                      className="text-primary dark:text-blue-300"
                    />
                  </span>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                      Latest
                    </span>
                  </h3>
                  <p className="flex items-center text-gray-700 dark:text-gray-300">
                    {experience.company} - {experience.location}
                  </p>
                  <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {experience.startDate} - {experience.endDate || "Present"}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {experience.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
