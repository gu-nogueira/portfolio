"use client";

import {
  Envelope,
  BehanceLogo,
  LinkSimple,
  LinkedinLogo,
  GithubLogo,
  CloudArrowDown,
} from "@phosphor-icons/react";
import { buttonVariants } from "../ui/Button";

const ReachMe = () => {
  return (
    <section
      id="reach-me"
      className="min-h-[75vh] lg:min-h-screen flex items-center text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-6">
          Reach me
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://linktr.ee/gusnogueira"
            target="_blank"
            className="text-green-500 hover:text-green-700"
            title="Twitter"
          >
            <LinkSimple size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-h-nogueira/"
            target="_blank"
            className="text-blue-800 hover:text-blue-900"
            title="LinkedIn"
          >
            <LinkedinLogo size={32} />
          </a>
          <a
            href="https://github.com/gu-nogueira"
            className="text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
            title="GitHub"
          >
            <GithubLogo size={32} />
          </a>
          <a
            href="https://www.behance.net/gushnogueira"
            target="_blank"
            className="text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white"
            title="Behance"
          >
            <BehanceLogo size={32} />
          </a>
        </div>

        <p className="text-lg mb-4">
          <Envelope className="inline-block mr-2" />
          <a href="mailto:gus.h.nogueira@gmail.com" className="underline">
            gus.h.nogueira@gmail.com
          </a>
        </p>

        <a
          className={buttonVariants({ size: "lg" })}
          href="/docs/cv-2024-english.pdf"
          download="cv-2024-english.pdf"
        >
          <CloudArrowDown
            size={24}
            weight="bold"
            className="inline-block mr-2"
          />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default ReachMe;
