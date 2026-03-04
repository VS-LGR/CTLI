import Link from "next/link";
import type { SupportedLang } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: SupportedLang;
};

const pathByLang: Record<SupportedLang, string> = {
  pt: "/pt",
  en: "/en"
};

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border/70 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-wide text-gray-300">
      {(["pt", "en"] as SupportedLang[]).map((lang) => (
        <Link
          key={lang}
          href={pathByLang[lang]}
          className={`px-2 py-0.5 rounded-full ${
            lang === currentLang
              ? "bg-primary text-primary-foreground"
              : "text-gray-300 hover:text-primary"
          }`}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}


