"use client";

import React, { useState } from "react";

import { PrismicEducation, PrismicExperience } from "@/types/prismic";

import { Suitcase, Student } from "@phosphor-icons/react";

import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import useMobile from "@/hooks/useMobile";

interface ExperiencesProps {
  experiences?: PrismicExperience[];
  education?: PrismicEducation[];
}

const Experiences: React.FC<ExperiencesProps> = ({
  experiences,
  education,
}) => {
  const { isMobile } = useMobile();

  const [jobExperiences, setJobExperiences] = useState<PrismicExperience[]>(
    experiences || [],
  );
  const handleShowFullDescription = (experienceId: string) => {
    const draft = [...jobExperiences];
    const experienceIndex = draft?.findIndex(
      (experience) => experience.id === experienceId,
    );

    if (typeof experienceIndex === "number" && experienceIndex !== -1) {
      draft[experienceIndex] = {
        ...draft[experienceIndex],
        resumedDescription: undefined,
      };
    }

    setJobExperiences(draft);
  };

  return (
    <section id="experiences" className="py-12 lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-8">
          Education & experiences
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <ol
            className={`relative ${isMobile ? "border-l" : "border-r-2"} border-gray-200 dark:border-gray-700 ms-4 lg:me-4 my-auto`}
          >
            {education?.map((education) => {
              return (
                <li
                  key={`education-${education.id}`}
                  className="mb-10 ms-8 lg:me-8"
                >
                  <span
                    className={`absolute flex items-center justify-center w-7 h-7 bg-cyan-100 rounded-full ${isMobile ? "-start-3.5" : "-end-3.5"} ring-8 ring-background  dark:bg-cyan-900`}
                  >
                    <Student
                      size={18}
                      className="text-cyan-500 dark:text-cyan-300"
                    />
                  </span>
                  <h3 className="flex items-center justify-start lg:justify-end text-left lg:text-right lg:text-lg font-semibold text-gray-900 dark:text-white">
                    {education.title}
                  </h3>
                  <p className="flex items-center justify-start lg:justify-end text-left lg:text-right text-gray-700 dark:text-gray-300">
                    {education.institution} - {education.location}
                  </p>
                  <time className="flex justify-start lg:justify-end text-sm mt-1 mb-1.5 font-normal leading-none text-gray-400 dark:text-gray-500">
                    {education.startDate} - {education.endDate || "Present"}
                  </time>
                </li>
              );
            })}
          </ol>
          <ol
            className={`relative border-s border-gray-200 dark:border-gray-700 ms-4`}
          >
            {jobExperiences?.map((experience) => {
              // const isOdd = (index + 1) % 2 === 0;
              // const isLast = index === experiences.length - 1;
              return (
                <li key={`experience-${experience.id}`} className="mb-10 ms-8">
                  <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-8 ring-background dark:bg-blue-900">
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
                  <p className="mb-4 text-small lg:text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                    <span id={`desc-${experience.id}`}>
                      {experience?.resumedDescription ? (
                        <>
                          {experience?.resumedDescription}
                          <Button
                            size="sm"
                            className="ml-2 p-0 h-6"
                            variant="link"
                            onClick={() =>
                              handleShowFullDescription(experience.id)
                            }
                          >
                            Read more
                          </Button>
                        </>
                      ) : (
                        experience?.description?.text
                      )}
                    </span>
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
