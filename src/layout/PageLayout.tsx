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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}

