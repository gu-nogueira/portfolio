import { GithubUserData, RepositoryData } from "@/types/github";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Presentation from "@/components/sections/Presentation";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import Education from "@/components/sections/Education";
import ReachMe from "@/components/sections/ReachMe";

export default async function Home({}) {
  const portfolioData = await getPortfolioData();

  console.log("portfolioData", portfolioData);

  const projects = [
    {
      id: "1",
      title: "Project 1",
      description: "Description of Project 1.",
      // imageUrl: "https://example.com/project1-image.jpg",
      projectUrl: "https://example.com/project1",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Header />
      <Hero userData={portfolioData?.userData} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Presentation />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Projects projects={projects} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Experiences />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Education />
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
