"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SupportedLang } from "@/lib/i18n";
import introGif from "./CTLI INTRo.gif";

const KEYWORDS: Record<SupportedLang, string> = {
  pt: "Metrologia, ISO 17025 e acreditação",
  en: "Metrology, ISO 17025 and accreditation"
};

type IntroScreenProps = {
  lang: SupportedLang;
  onComplete: () => void;
};

const INTRO_STAY_MS = 3400;
const FADE_OUT_MS = 700;

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
      className={`intro-screen fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-950 transition-opacity duration-[700ms] ease-out ${
        fadeOut ? "intro-screen-out" : "intro-screen-in"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={introGif}
          alt=""
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),_transparent_65%),radial-gradient(circle_at_bottom,_rgba(15,118,110,0.4),_transparent_60%)] mix-blend-soft-light" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        <p className="intro-keywords text-xs font-medium uppercase tracking-[0.25em] text-slate-200/80 sm:text-sm">
          {KEYWORDS[lang]}
        </p>
      </div>
    </div>
  );
}
