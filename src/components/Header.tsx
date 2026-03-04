import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { SupportedLang } from "@/lib/i18n";

type HeaderProps = {
  lang?: SupportedLang;
};

export function Header({ lang = "pt" }: HeaderProps) {
  const nav = navigationConfig[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href={lang === "pt" ? "/pt" : "/en"}
          className="flex items-center gap-2 text-foreground"
        >
          <span className="text-base font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} />
          <a
            href={siteConfig.whatsappUrl}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {lang === "pt" ? "Falar com especialista" : "Talk to a specialist"}
          </a>
        </div>
      </div>
    </header>
  );
}

