import { GithubUserData } from "@/types/github";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Presentation from "@/components/sections/Presentation";
import Footer from "@/components/sections/Footer";

export default async function Home({}) {
  const userData = await getUserData();
  return (
    <>
      <Header />
      <Hero userData={userData} />
      <hr className="border-gray-200 dark:border-gray-700" />
      <Presentation />
      <main className="flex items-center justify-center h-screen flex-col">
        fala cidadaaao
      </main>
      <Footer />
    </>
  );
}

async function getUserData() {
  try {
    const response = await fetch("https://api.github.com/users/gu-nogueira", {
      next: {
        revalidate: 7 * 24 * 60 * 60, // 1 week
      },
    });
    if (response.ok) {
      const data: GithubUserData = await response.json();
      console.log("data", data);
      return data;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
