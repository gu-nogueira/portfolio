import React from "react";

// ** Utils
import cn from "@/utils/cn";

interface BadgeProps {
  size?: "sm" | "md" | "lg";
}

const Badge: React.FC<BadgeProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  size,
  children,
  ...props
}) => {
  const sizes = {
    sm: "px-2 py-0.5 text-xs rounded",
    md: "px-3 py-1 text-sm rounded-sm",
    lg: "px-4 py-2 text-base",
  };

  const classes = cn(
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded",
    sizes[size || "md"],
    className,
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
