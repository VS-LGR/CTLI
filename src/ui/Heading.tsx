import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
};

const baseByLevel: Record<HeadingLevel, string> = {
  1: "text-3xl md:text-5xl font-semibold tracking-tight",
  2: "text-2xl md:text-3xl font-semibold tracking-tight",
  3: "text-xl md:text-2xl font-semibold",
  4: "text-lg md:text-xl font-semibold"
};

export function Heading({
  level = 2,
  children,
  className
}: HeadingProps) {
  const Tag = `h${level}` as const;
  const classes = `${baseByLevel[level]} ${className ?? ""}`;

  return <Tag className={classes.trim()}>{children}</Tag>;
}

