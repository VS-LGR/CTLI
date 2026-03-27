import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  as?: "p" | "span" | "div";
  muted?: boolean;
  /** Texto claro para fundos escuros (ex.: hero). */
  inverted?: boolean;
  className?: string;
};

export function Text({
  children,
  as = "p",
  muted,
  inverted,
  className
}: TextProps) {
  const Tag = as;
  const base = "text-[15px] md:text-base leading-[1.65]";
  let tone = "text-slate-700";
  if (inverted) {
    tone = "text-slate-200";
  } else if (muted) {
    tone = "text-slate-500";
  }
  const classes = `${base} ${tone} ${className ?? ""}`;

  return <Tag className={classes.trim()}>{children}</Tag>;
}

