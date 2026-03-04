import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-secondary/40",
  ghost: "bg-transparent text-foreground hover:bg-muted/60 border border-border"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3 text-base"
};

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={mergeClasses(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {leftIcon ? <span className="mr-2 inline-flex">{leftIcon}</span> : null}
      {children}
    </button>
  );
}

