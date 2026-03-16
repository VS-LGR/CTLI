"use client";

import { useEffect, useState } from "react";
import type { SupportedLang } from "@/lib/i18n";

const KEYWORDS: Record<SupportedLang, string> = {
  pt: "Preparando a experiência CTLI",
  en: "Preparing CTLI experience"
};

type IntroScreenProps = {
  lang: SupportedLang;
  onComplete: () => void;
};

const INTRO_STAY_MS = 1600;
const FADE_OUT_MS = 500;

export function IntroScreen({ lang, onComplete }: IntroScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const stayTimer = setTimeout(() => {
      setFadeOut(true);
    }, INTRO_STAY_MS);

    return () => clearTimeout(stayTimer);
  }, []);

  useEffect(() => {
    if (!fadeOut) return;
    const doneTimer = setTimeout(onComplete, FADE_OUT_MS);
    return () => clearTimeout(doneTimer);
  }, [fadeOut, onComplete]);

  return (
    <div
      className={`intro-screen fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-950 transition-opacity duration-[500ms] ease-out ${
        fadeOut ? "intro-screen-out" : "intro-screen-in"
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <div className="h-10 w-10 rounded-full border-2 border-slate-600 border-t-sky-400 animate-spin" />
        <p className="intro-keywords text-xs font-medium uppercase tracking-[0.25em] text-slate-300 sm:text-sm">
          {KEYWORDS[lang]}
        </p>
      </div>
    </div>
  );
}
