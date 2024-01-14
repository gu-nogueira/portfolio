"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

// ** Components
import { Switch } from "@/components/ui/Switch";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleDarkMode = (isChecked: boolean) => {
    setTheme(isChecked ? "dark" : "light");
  };

  return (
    <header
      className={`transition-all bg-opacity-90 backdrop-filter backdrop-blur-lg border-b-2 ${scrolled ? "sticky top-0 z-10 border-gray-200" : "border-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link className="text-2xl font-bold" href="#hero">
          Gustavo Nogueira
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#projects">Presentation</Link>
          <Link href="#about">Projects</Link>
          <Link href="#projects">Experiences</Link>
          <Link href="#projects">Education</Link>
          <Link href="#projects">Reach me</Link>
          <div className="flex space-x-2">
            <Switch
              id="toggle-dark"
              onCheckedChange={handleToggleDarkMode}
              checked={theme === "dark"}
            />
            <label htmlFor="toggle-dark">
              {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}
