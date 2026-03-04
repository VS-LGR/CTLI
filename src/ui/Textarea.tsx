import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  const base =
    "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 min-h-[120px]";
  const classes = `${base} ${className ?? ""}`;

  return <textarea className={classes.trim()} {...props} />;
}

