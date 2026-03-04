import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  const base =
    "rounded-2xl border border-border/60 bg-muted/60 backdrop-blur-sm shadow-lg shadow-black/40 p-6";
  const classes = `${base} ${className ?? ""}`;

  return <div className={classes.trim()}>{children}</div>;
}

