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
  const tone = muted ? "text-slate-500" : "text-slate-700";
  const classes = `${base} ${tone} ${className ?? ""}`;

  return <Tag className={classes.trim()}>{children}</Tag>;
}

