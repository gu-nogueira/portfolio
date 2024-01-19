"use client";

import Badge from "../ui/Badge";

const Footer = () => {
  const techs = ["Next.js", "React", "Tailwind", "Prismic", "Shadcn/ui"];
  return (
    <>
      <div className="container mx-auto flex items-center justify-center px-6 py-3 border-t-2 border-gray-200 dark:border-gray-700">
        <span className="text-sm mr-2">
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
        <div className="social_icons">
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/gu-nogueira"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-h-nogueira/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
