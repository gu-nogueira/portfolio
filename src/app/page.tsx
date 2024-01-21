import { createClient } from "@/services/prismic";

import { GithubUserData, RepositoryData } from "@/types/github";
import {
  PrismicEducation,
  PrismicExperience,
  PrismicProject,
} from "@/types/prismic";

import parseDate from "@/utils/parseDate";
import sortByDate from "@/utils/sortByDate";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import ReachMe from "@/components/sections/ReachMe";

export default async function Home({}) {
  const [githubData, projects, education, experiences] = await Promise.all([
    getGithubData(),
    getProjects(),
    getEducation(),
    getExperiences(),
  ]);

  return (
    <>
      <Header />
      <Hero userData={githubData?.userData} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <AboutMe />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Projects projects={projects} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Experiences experiences={experiences} education={education} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <ReachMe />
      <Footer />
    </>
  );
}

async function getGithubData() {
  try {
    const rawResponses = await Promise.allSettled([
      fetch("https://api.github.com/users/gu-nogueira", {
        next: {
          revalidate: 7 * 24 * 60 * 60, // 1 week
        },
      }),
      fetch("https://api.github.com/users/gu-nogueira/repos"),
    ]);

    const responses = rawResponses
      .filter((response) => response.status === "fulfilled")
      .map((response) => (response as PromiseFulfilledResult<Response>).value);

    if (responses.every((response) => response.ok)) {
      const jsonResponses = await Promise.all(
        responses.map((response) => response.json()),
      );

      const [userResponse, reposResponse] = jsonResponses;
      return {
        userData: userResponse as GithubUserData,
        reposData: reposResponse as RepositoryData[],
      };
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

async function getProjects(): Promise<PrismicProject[] | undefined> {
  const prismic = createClient();

  try {
    const response = await prismic.getAllByType("project", {
      pageSize: 100,
      orderings: [
        {
          // field: "my.project.project_built_at",
          field: "document.last_publication_date",
          direction: "asc",
        },
      ],
    });

    const projects = response.map((response) => {
      const sliceMainContent = response.data.slices[0]?.primary;
      const sliceItems = response.data.slices[0]?.items;
      const builtAt = parseDate(
        sliceMainContent?.project_built_at,
      )?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      const descriptionText = sliceMainContent?.project_description.shift();

      return {
        id: response.uid,
        title: sliceMainContent?.project_name[0]?.text,
        description: descriptionText,
        imageUrl: sliceMainContent?.project_image.url,
        alt: sliceMainContent?.project_image.alt,
        projectUrl: sliceMainContent?.project_url,
        sourceCode: sliceMainContent?.project_source_code,
        builtAt: builtAt,
        rawBuiltAt: sliceMainContent?.project_built_at,
        tags: sliceItems?.map((item) => item.project_tag),
      };
    });

    return sortByDate(projects, "rawBuiltAt", "desc");
  } catch (error) {
    console.error("Error fetching prismic content:", error);
  }
}

async function getExperiences(): Promise<PrismicExperience[] | undefined> {
  const prismic = createClient();

  try {
    const response = await prismic.getAllByType("experiences", {
      // fetch: ["post.title", "post.content"],
      pageSize: 100,
      orderings: [
        {
          field: "document.last_publication_date",
          direction: "asc",
        },
      ],
    });

    const experiences = response.map((response) => {
      const sliceMainContent = response.data.slices[0]?.primary;
      const startDate = parseDate(
        sliceMainContent?.experience_start_date,
      )?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      const endDate = parseDate(
        sliceMainContent?.experience_end_date,
      )?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      const AMOUNT_OF_WORDS = 24;
      const descriptionText = sliceMainContent?.experience_description.shift();
      const rawDescription = descriptionText?.text ? descriptionText.text : "";
      const isDescriptionLong =
        rawDescription.split(" ").length > AMOUNT_OF_WORDS;
      const trimmedDescription =
        rawDescription.split(" ").slice(0, AMOUNT_OF_WORDS).join(" ") + "...";

      return {
        id: response.uid,
        title: sliceMainContent?.experience_title,
        description: descriptionText,
        resumedDescription: isDescriptionLong && trimmedDescription,
        company: sliceMainContent?.experience_company,
        location: sliceMainContent?.experience_location,
        startDate: startDate,
        rawStartDate: sliceMainContent?.experience_start_date,
        endDate: endDate,
      };
    });

    return sortByDate(experiences, "rawStartDate", "desc");
  } catch (error) {
    console.error("Error fetching prismic content:", error);
  }
}

async function getEducation(): Promise<PrismicEducation[] | undefined> {
  const prismic = createClient();

  try {
    const response = await prismic.getAllByType("education", {
      pageSize: 100,
      orderings: [
        {
          field: "document.last_publication_date",
          direction: "asc",
        },
      ],
    });

    const educations = response.map((response) => {
      const sliceMainContent = response.data.slices[0]?.primary;
      const startDate = parseDate(
        sliceMainContent?.education_start_date,
      )?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      const endDate = parseDate(
        sliceMainContent?.education_end_date,
      )?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

      return {
        id: response.uid,
        title: sliceMainContent?.education_title,
        institution: sliceMainContent?.education_institution,
        location: sliceMainContent?.education_location,
        startDate: startDate,
        rawStartDate: sliceMainContent?.education_start_date,
        endDate: endDate,
      };
    });

    return sortByDate(educations, "rawStartDate", "desc");
  } catch (error) {
    console.error("Error fetching prismic content:", error);
  }
}
