import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  const base =
    "rounded-2xl border border-border bg-white p-6 shadow-sm";
  const classes = `${base} ${className ?? ""}`;

  return <div className={classes.trim()}>{children}</div>;
}

