import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "span" | "div";
  muted?: boolean;
  className?: string;
};

export function Text({ children, as = "p", muted, className }: TextProps) {
  const Tag = as;
  const base = "text-sm md:text-base leading-relaxed";
  const tone = muted ? "text-gray-400" : "text-gray-100";
  const classes = `${base} ${tone} ${className ?? ""}`;

  return <Tag className={classes.trim()}>{children}</Tag>;
}

