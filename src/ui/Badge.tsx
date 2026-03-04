import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent";
  const classes = `${base} ${className ?? ""}`;

  return <span className={classes.trim()}>{children}</span>;
}

