"use client";

import React from "react";

import { Suitcase, Student } from "@phosphor-icons/react";
import Badge from "../ui/Badge";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface Education {
  id: string;
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
}

interface ExperiencesProps {
  experiences: Experience[];
  education: Education[];
}

const mockExperiences = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Apple",
    startDate: "2020-01-01",
    endDate: "",
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

const mockEducaton = [
  {
    id: "1",
    title: "Software Engineer",
    institution: "Apple",
    location: "Remote",
    startDate: "2020-01-01",
    endDate: "",
  },
  {
    id: "2",
    title: "Software Engineer",
    institution: "Apple",
    location: "Remote",
    startDate: "2020-01-01",
    endDate: "2022-01-01",
  },
];

const Experiences: React.FC<ExperiencesProps> = ({
  experiences = mockExperiences,
  education = mockEducaton,
}) => {
  return (
    <section id="experiences" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">
          Education & experiences
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <ol
            className={`relative border-r border-gray-200 dark:border-gray-700 me-4 my-auto`}
          >
            {education.map((education) => {
              return (
                <li key={`experience-${education.id}`} className="mb-10 me-8">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-cyan-100 rounded-full -end-3.5 ring-8 ring-white dark:ring-background dark:bg-cyan-900">
                    <Student
                      size={18}
                      className="text-cyan-500 dark:text-cyan-300"
                    />
                  </span>
                  <h3 className="flex items-center justify-end text-lg font-semibold text-gray-900 dark:text-white">
                    {education.title}
                  </h3>
                  <p className="flex items-center justify-end text-gray-700 dark:text-gray-300">
                    {education.institution} - {education.location}
                  </p>
                  <time className="flex justify-end text-sm mt-1 mb-1.5 font-normal leading-none text-gray-400 dark:text-gray-500">
                    {education.startDate} - {education.endDate || "Present"}
                  </time>
                </li>
              );
            })}
          </ol>
          <ol
            className={`relative border-s border-gray-200 dark:border-gray-700 ms-4`}
          >
            {experiences.map((experience) => {
              // const isOdd = (index + 1) % 2 === 0;
              // const isLast = index === experiences.length - 1;
              return (
                <li key={`experience-${experience.id}`} className="mb-10 ms-8">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-8 ring-white dark:ring-background dark:bg-blue-900">
                    <Suitcase
                      size={18}
                      className="text-primary dark:text-blue-300"
                    />
                  </span>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                    {!experience.endDate && (
                      <Badge className="ml-4">Current</Badge>
                    )}
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
