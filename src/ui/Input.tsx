import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  const base =
    "w-full rounded-lg border border-border bg-black/40 px-3 py-2 text-sm text-foreground placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80";
  const classes = `${base} ${className ?? ""}`;

  return <input className={classes.trim()} {...props} />;
}

