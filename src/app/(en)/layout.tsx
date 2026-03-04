import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getHomeSeo } from "@/lib/seo";
import { PageLayout } from "@/layout/PageLayout";

export const metadata: Metadata = getHomeSeo("en");

type EnLayoutProps = {
  children: ReactNode;
};

export default function EnLayout({ children }: EnLayoutProps) {
  return (
    <html lang="en">
      <body>
        <PageLayout lang="en">{children}</PageLayout>
      </body>
    </html>
  );
}

