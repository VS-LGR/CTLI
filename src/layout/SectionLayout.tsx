import type { ReactNode } from "react";
import { SectionContainer } from "@/ui/SectionContainer";

type SectionLayoutProps = {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
};

export function SectionLayout({
  id,
  title,
  subtitle,
  children
}: SectionLayoutProps) {
  return (
    <SectionContainer id={id}>
      <div className="space-y-8 sm:space-y-10">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          {typeof title === "string" ? (
            <h2 className="text-[1.375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-2xl md:text-3xl">
              {title}
            </h2>
          ) : (
            title
          )}
          {subtitle ? (
            <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </SectionContainer>
  );
}

