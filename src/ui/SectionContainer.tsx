import type { ReactNode } from "react";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  id,
  children,
  className
}: SectionContainerProps) {
  const base =
    "w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto max-w-6xl xl:max-w-7xl";
  const classes = `${base} ${className ?? ""}`;

  return (
    <section id={id} className={classes.trim()}>
      {children}
    </section>
  );
}

