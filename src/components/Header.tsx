"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { SupportedLang } from "@/lib/i18n";

type HeaderProps = {
  lang?: SupportedLang;
};

export function Header({ lang = "pt" }: HeaderProps) {
  const nav = navigationConfig[lang];
  const homeHref = lang === "pt" ? "/pt" : "/en";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90 relative">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 lg:px-8">
        <Link
          href={homeHref}
          className="min-w-0 shrink text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="block truncate text-[15px] font-semibold leading-tight tracking-tight sm:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          className="hidden min-w-0 max-w-[min(56vw,42rem)] flex-1 items-center justify-end gap-0.5 overflow-x-auto text-[11px] text-slate-600 md:flex lg:max-w-none lg:gap-1 lg:text-[12px] xl:text-sm [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300"
          aria-label={lang === "pt" ? "Principal" : "Main"}
        >
          {nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap rounded-lg px-1.5 py-1.5 transition-colors hover:bg-slate-100 hover:text-primary lg:px-2.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher currentLang={lang} />
          </div>
          <a
            href={siteConfig.whatsappUrl}
            className="hidden rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex md:items-center md:justify-center lg:px-4"
          >
            <span className="hidden lg:inline">
              {lang === "pt" ? "Falar com especialista" : "Talk to a specialist"}
            </span>
            <span className="lg:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-slate-800 shadow-sm md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={lang === "pt" ? "Abrir menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {lang === "pt" ? "Menu" : "Menu"}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 max-h-[min(85vh,32rem)] overflow-y-auto border-b border-border bg-white shadow-lg md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-0.5 px-4 py-4 sm:px-5"
            aria-label={lang === "pt" ? "Principal" : "Main"}
          >
            {nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <LanguageSwitcher currentLang={lang} />
              <a
                href={siteConfig.whatsappUrl}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                {lang === "pt" ? "Falar com especialista" : "Talk to a specialist"}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
