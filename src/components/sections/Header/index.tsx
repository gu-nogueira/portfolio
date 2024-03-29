"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";

import { Switch } from "@/components/ui/Switch";
import { Mobile } from "./Mobile";

import useMobile from "@/hooks/useMobile";

import cn from "@/utils/cn";

const Header = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { isMobile } = useMobile();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = useMemo(() => {
    return [
      {
        path: "#hero",
        name: "Home",
      },
      {
        path: "#about-me",
        name: "About me",
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
        path: "#reach-me",
        name: "Reach me",
      },
    ];
  }, []);

  const handleToggleDarkMode = (isChecked: boolean) => {
    setTheme(isChecked ? "dark" : "light");
  };

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);

    const currentRoute = routes.find((route) => {
      const section = document.querySelector(route.path);
      if (section) {
        const rect = section.getBoundingClientRect();
        return (
          (rect.top >= 0 && rect.top <= window.innerHeight) ||
          (rect.bottom >= 0 && rect.bottom <= window.innerHeight)
        );
      }
    });

    if (currentRoute) {
      setCurrentSection(currentRoute.path);
    }
  }, [routes]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, routes]);

  const DesktopMenu = () => {
    return (
      <nav className="hidden lg:flex items-center space-x-6">
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
            checked={isDark}
          />
          <label htmlFor="toggle-dark">
            {isDark ? <Moon size={24} /> : <Sun size={24} />}
          </label>
        </div>
      </nav>
    );
  };

  return (
    <>
      <header
        className={`transition-all fixed top-0 left-0 right-0 w-full bg-opacity-90 backdrop-filter backdrop-blur-lg border-b-2 z-20 ${
          scrolled || isMobile
            ? "border-gray-200 dark:border-gray-700"
            : "border-transparent"
        }`}
      >
        <div className="container relative mx-auto flex items-center justify-between px-6 py-4 lg:p-6">
          <a className="text-2xl font-bold" href="#hero">
            Gustavo Nogueira
          </a>

          {isMobile ? (
            <Mobile.Menu
              isOpen={isMobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          ) : (
            <DesktopMenu />
          )}
        </div>
      </header>
      <Mobile.Dropdown
        routes={routes}
        currentSection={currentSection}
        isDark={isDark}
        toggleDarkMode={handleToggleDarkMode}
        isOpen={isMobileMenuOpen}
      />
    </>
  );
};

export default Header;
