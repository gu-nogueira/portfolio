"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { GithubUserData } from "@/types/github";

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
    }, 50);
  };

  // useEffect(() => {
  //   const cursorInterval = setInterval(() => {
  //     setPulsingCursor((prevPulsingCursor) => !prevPulsingCursor);
  //   }, 500);
  //   return () => {
  //     clearInterval(cursorInterval);
  //   };
  // }, []);

  const callsCursorInterval = () => {
    return setInterval(() => {
      setPulsingCursor((prevPulsingCursor) => !prevPulsingCursor);
    }, 500);
  };

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

        <div className="flex justify-center items-center space-x-7 mt-4">
          <p className="text-lg font-semibold block font-mono">
            Hi there! I&apos;m {userData ? userData.name : "Loading..."}
          </p>
          <div className="animate-handshake inline-block text-2xl">✋</div>
        </div>
        <h1 className="text-6xl font-bold mt-2">
          {" "}
          I&apos;m a {displayedPhraseRef.current + (pulsingCursor ? "|" : "")}
        </h1>
        <p className="text-xl mt-4">
          I&apos;m always looking for new projects and challenges. Checkout my
          projects! 👇
        </p>
      </div>
    </section>
  );
};

export default Hero;
