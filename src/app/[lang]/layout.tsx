import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getHomeSeo } from "@/lib/seo";
import { PageLayout } from "@/layout/PageLayout";
import { isSupportedLang, type SupportedLang } from "@/lib/i18n";

type LangLayoutProps = {
  children: ReactNode;
  params: { lang: string };
};

export function generateMetadata({
  params
}: {
  params: { lang: string };
}): Metadata {
  const lang: SupportedLang = isSupportedLang(params.lang)
    ? params.lang
    : "pt";

  return getHomeSeo(lang);
}

export default function LangLayout({ children, params }: LangLayoutProps) {
  const lang: SupportedLang = isSupportedLang(params.lang)
    ? params.lang
    : "pt";

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"}>
      <body className="page-bg">
        <PageLayout lang={lang}>{children}</PageLayout>
      </body>
    </html>
  );
}

