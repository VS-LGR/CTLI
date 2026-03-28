import type { ReactNode } from "react";
import { PageLayout } from "@/layout/PageLayout";
import { isSupportedLang, type SupportedLang } from "@/lib/i18n";

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang: langParam } = await params;
  const lang: SupportedLang = isSupportedLang(langParam) ? langParam : "pt";

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"}>
      <body className="page-bg">
        <PageLayout lang={lang}>{children}</PageLayout>
      </body>
    </html>
  );
}

