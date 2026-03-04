import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getHomeSeo } from "@/lib/seo";
import { PageLayout } from "@/layout/PageLayout";

export const metadata: Metadata = getHomeSeo("pt");

type PtLayoutProps = {
  children: ReactNode;
};

export default function PtLayout({ children }: PtLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <PageLayout lang="pt">{children}</PageLayout>
      </body>
    </html>
  );
}

