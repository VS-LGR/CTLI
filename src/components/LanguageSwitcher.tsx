"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SupportedLang } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: SupportedLang;
};

function hrefForLang(pathname: string, lang: SupportedLang): string {
  const normalized = pathname || "/pt";
  if (normalized === "/" || !normalized.startsWith("/")) {
    return `/${lang}`;
  }
  const replaced = normalized.replace(/^\/(pt|en)(?=\/|$)/, `/${lang}`);
  if (replaced === normalized && !normalized.match(/^\/(pt|en)/)) {
    return `/${lang}`;
  }
  return replaced || `/${lang}`;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/pt";

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-slate-100 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-600">
      {(["pt", "en"] as SupportedLang[]).map((lang) => (
        <Link
          key={lang}
          href={hrefForLang(pathname, lang)}
          className={`rounded-full px-2 py-0.5 transition-colors ${
            lang === currentLang
              ? "bg-primary text-primary-foreground"
              : "hover:text-primary"
          }`}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
