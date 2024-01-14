"use client";

import React from "react";
import Image from "next/image";

import { GithubUserData } from "@/types/github";

interface HeroProps {
  userData?: GithubUserData;
}

const Hero: React.FC<HeroProps> = ({ userData }) => {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto">
        {userData && (
          <div className="relative inline-block">
            <div className="p-1 rounded-full overflow-hidden bg-gradient-to-tl from-primary to-cyan-200 dark:to-green-300">
              <Image
                src={userData.avatar_url}
                alt="Profile"
                className="rounded-full w-36 h-36 object-cover border-4 border-background"
                width={100}
                height={100}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center items-center space-x-2 mt-4">
          <p className="text-lg block font-mono">
            Hey, I&apos;m {userData ? userData.name : "Loading..."}
          </p>
          <div className="animate-handshake inline-block text-2xl mb-2">✋</div>
        </div>
        <h1 className="text-6xl font-bold mt-2">Fullstack Developer</h1>
      </div>
    </section>
  );
};

export default Hero;
