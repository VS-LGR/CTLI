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
      <div className="space-y-10">
        <div className="max-w-2xl space-y-3">
          {typeof title === "string" ? (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          ) : (
            title
          )}
          {subtitle ? (
            <p className="text-sm md:text-base text-gray-300">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </SectionContainer>
  );
}

