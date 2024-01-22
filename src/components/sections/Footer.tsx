"use client";

import Badge from "../ui/Badge";

const Footer = () => {
  const techs = ["Next.js", "React", "Tailwind", "Prismic", "Shadcn/ui"];
  return (
    <div className="border-t-2 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-2 lg:space-x-2 justify-center px-6 py-4 lg:py-3.5">
        <span className="text-sm">
          © {new Date().getFullYear()} Crafted by{" "}
          <a
            href="https://github.com/gu-nogueira"
            target="_blank"
            className="text-primary underline"
          >
            Gustavo Nogueira
          </a>{" "}
          using
        </span>
        <div className="flex space-x-2">
          {techs.map((tech) => (
            <Badge key={`footer-${tech}`} size="sm" className="mr-0">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
