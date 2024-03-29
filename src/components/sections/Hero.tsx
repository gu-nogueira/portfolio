"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GithubUserData } from "@/types/github";

import { buttonVariants } from "@/components/ui/Button";

interface HeroProps {
  userData?: GithubUserData;
}

const Hero: React.FC<HeroProps> = ({ userData }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState("");
  const displayedPhraseRef = useRef<string>("");
  const [pulsingCursor, setPulsingCursor] = useState(false);
  const phrases = [
    "Fullstack Developer",
    "Designer, UX/UI and Video Editor",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];
      displayedPhraseRef.current = currentPhrase.substring(
        0,
        displayedPhraseRef.current.length + 1,
      );

      setDisplayedPhrase(displayedPhraseRef.current);

      if (displayedPhraseRef.current === currentPhrase) {
        clearInterval(typingInterval);

        const cursorInterval = callsCursorInterval();

        // Clear the displayed phrase after a delay (adjust as needed)
        setTimeout(() => {
          clearDisplayedPhrase();
          clearInterval(cursorInterval);
        }, 2000);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phraseIndex]);

  const clearDisplayedPhrase = () => {
    const clearingInterval = setInterval(() => {
      displayedPhraseRef.current = displayedPhraseRef.current.slice(0, -1);

      setDisplayedPhrase(displayedPhraseRef.current);

      if (displayedPhraseRef.current === "") {
        clearInterval(clearingInterval);

        const cursorInterval = callsCursorInterval();

        // Change the phrase after a delay (adjust as needed)
        setTimeout(() => {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          clearInterval(cursorInterval);
        }, 2000);
      }
    }, 40);
  };

  const callsCursorInterval = () => {
    return setInterval(() => {
      setPulsingCursor((prevPulsingCursor) => !prevPulsingCursor);
    }, 500);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center text-center">
      <div className="container mx-auto">
        {userData && (
          <div className="relative inline-block">
            <div className="p-1 rounded-full overflow-hidden bg-gradient-to-tl from-primary to-cyan-200 dark:to-green-300 animate-gradient-flow">
              <Image
                src={userData.avatar_url}
                alt="Profile"
                className="rounded-full lg:w-36 lg:h-36 object-cover border-[6px] border-background"
                width={100}
                height={100}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center items-center space-x-7 mt-3 lg:mt-4">
          <p className="lg:text-lg font-semibold block font-mono">
            Hi there! I&apos;m {userData ? userData.name : "Loading..."}
          </p>
          <div className="animate-handshake inline-block text-xl lg:text-2xl">
            ✋
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold mt-2">
          {" "}
          I&apos;m a {displayedPhrase + (pulsingCursor ? "|" : "")}
        </h1>
        <p className="text-lg leading-6 lg:text-xl mt-4">
          Work with someone who can handle any challenge. Checkout some of my
          works 👇
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-x-4 mt-8">
          <Link
            href="#projects"
            className={buttonVariants({
              variant: "outline",
              className:
                "w-full lg:w-auto hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20",
            })}
          >
            See projects
          </Link>
          <Link
            href="#reach-me"
            className={buttonVariants({
              variant: "default",
              className: "w-full lg:w-auto",
            })}
          >
            Reach me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
