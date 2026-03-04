import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { SupportedLang } from "@/lib/i18n";

type PageLayoutProps = {
  children: ReactNode;
  lang?: SupportedLang;
};

export function PageLayout({ children, lang = "pt" }: PageLayoutProps) {
  return (
    <div className="page-bg flex min-h-screen flex-col text-foreground antialiased">
      <Header lang={lang} />
      <main className="flex-1">
        <div className="page-intro">{children}</div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

