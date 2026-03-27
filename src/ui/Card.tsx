import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  const base =
    "rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5 md:p-6";
  const classes = `${base} ${className ?? ""}`;

  return <div className={classes.trim()}>{children}</div>;
}

