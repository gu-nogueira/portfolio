"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

// ** Components
import { Switch } from "@/components/ui/Switch";

import cn from "@/utils/cn";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);

  const routes = [
    {
      path: "#hero",
      name: "Home",
    },
    {
      path: "#presentation",
      name: "Presentation",
    },
    {
      path: "#projects",
      name: "Projects",
    },
    {
      path: "#experiences",
      name: "Experiences",
    },
    {
      path: "#education",
      name: "Education",
    },
    {
      path: "#reach-me",
      name: "Reach me",
    },
  ];

  const currentSection = window.location.hash;

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
      className={`transition-all fixed top-0 left-0 right-0 w-full bg-opacity-90 backdrop-filter backdrop-blur-lg border-b-2 ${scrolled ? "z-10 border-gray-200 dark:border-gray-700" : "border-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between p-6">
        <a className="text-2xl font-bold" href="#hero">
          Gustavo Nogueira
        </a>
        <nav className="flex items-center space-x-6">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={cn(
                "font-medium transition-all",
                currentSection === route.path
                  ? "text-primary tracking-wider"
                  : "",
              )}
            >
              {route.name}
            </a>
          ))}
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
};

export default Header;
