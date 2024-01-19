"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const AboutMe = () => {
  const { theme, resolvedTheme, systemTheme, forcedTheme } = useTheme();

  const finalTheme = theme || resolvedTheme || systemTheme || forcedTheme;

  const LanguagesIcons = ["js", "ts", "php"].join(",");
  const FrontendIcons = [
    "react",
    "vite",
    "nextjs",
    "redux",
    "tailwind",
    "styledcomponents",
    "sass",
    "bootstrap",
  ].join(",");
  const BackendIcons = [
    "nodejs",
    "express",
    "sequelize",
    "prisma",
    "supabase",
    "postgres",
    "redis",
  ].join(",");
  const OthersIcons = [
    "jest",
    "sentry",
    "linux",
    "docker",
    "nginx",
    "aws",
  ].join(",");
  const BackendOtherIcons = [
    "adonis",
    "nestjs",
    "kafka",
    "graphql",
    "vitest",
    "mongodb",
    "mysql",
    "wordpress",
    "gcp",
  ].join(",");
  const DesignIcons = ["ai", "ps", "ae", "pr", "figma"].join(",");
  const AllTechIcons = [
    LanguagesIcons,
    FrontendIcons,
    BackendIcons,
    OthersIcons,
    BackendOtherIcons,
    DesignIcons,
  ].join(",");

  return (
    <section id="about-me" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-6">About me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-center text-2xl font-semibold mb-4">
              Presentation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              I have been flowing in the IT and technology field since
              childhood, tinkering with games, building and repairing computers.
              In high school, I started studying and developing web projects in
              2016.
            </p>
            <p className="text-gray-700 mt-2 dark:text-gray-300 text-justify">
              Now i&apos;ve been working{" "}
              <strong>in the IT market for more than 5 years</strong> as a
              technical professional. Currently, I have{" "}
              <strong>4 years of professional experience</strong> as a
              full-stack developer. During this time, I have designed,
              architected, and delivered numerous projects, ranging from layout
              and interfaces to infrastructure deployed on Linux servers in
              cloud solutions. My current development stack includes mainly{" "}
              <strong>Typescript, ReactJS, and Node.js.</strong>
            </p>
            <p className="text-gray-700 mt-2 dark:text-gray-300 text-justify">
              In addition to my role as a developer, I have also worked as a{" "}
              <strong>designer and marketing assistant</strong>. These
              experiences have greatly contributed to my ability to deliver
              incredible and visually appealing user experiences.
            </p>
            <p className="text-gray-700 mt-2 dark:text-gray-300 text-justify">
              ☕ Feel free to reach out to me for a chat and grab a cup of
              coffee!
            </p>
          </div>
          <div>
            <h3 className="text-center text-2xl font-semibold mb-4">
              Techs i oftenly work with
            </h3>
            <div className="flex flex-col items-center ">
              <Image
                alt="Tech icons"
                height="40"
                width="300"
                className="w-full"
                src={`https://skillicons.dev/icons?i=${AllTechIcons}gma&theme=${finalTheme}&perline=9`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
