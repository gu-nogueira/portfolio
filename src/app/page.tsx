import { createClient } from "@/services/prismic";

import { GithubUserData, RepositoryData } from "@/types/github";
import { PrismicData } from "@/types/prismic";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import ReachMe from "@/components/sections/ReachMe";

export default async function Home({}) {
  const [portfolioData, prismicContent] = await Promise.all([
    getPortfolioData(),
    getPrismicContent(),
  ]);

  return (
    <>
      <Header />
      <Hero userData={portfolioData?.userData} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <AboutMe />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Projects projects={prismicContent?.projects} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Experiences />
      <hr className="border-gray-200 dark:border-gray-700" />
      <ReachMe />
      <Footer />
    </>
  );
}

async function getPortfolioData() {
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

async function getPrismicContent(): Promise<PrismicData | undefined> {
  const prismic = createClient();

  try {
    const response = await prismic.getAllByType("project", {
      // fetch: ["post.title", "post.content"],
      pageSize: 100,
    });

    const projects = response.map((response) => {
      const sliceMainContent = response.data.slices[0]?.primary;
      const sliceItems = response.data.slices[0]?.items;
      return {
        id: response.uid,
        title: sliceMainContent?.project_name[0]?.text,
        description: sliceMainContent?.project_description,
        imageUrl: sliceMainContent?.project_image.url,
        alt: sliceMainContent?.project_image.alt,
        projectUrl: sliceMainContent?.project_url,
        sourceCode: sliceMainContent?.project_source_code,
        tags: sliceItems?.map((item) => item.project_tag),
      };
    });

    return {
      projects,
    };
  } catch (error) {
    console.error("Error fetching prismic content:", error);
  }
}
