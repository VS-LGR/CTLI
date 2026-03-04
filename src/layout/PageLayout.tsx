import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import type { SupportedLang } from "@/lib/i18n";

type PageLayoutProps = {
  children: ReactNode;
  lang?: SupportedLang;
};

export function PageLayout({ children, lang = "pt" }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col text-foreground antialiased">
      <Header lang={lang} />
      <main className="flex-1">
        <IntroAnimation>{children}</IntroAnimation>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

