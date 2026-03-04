"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SupportedLang } from "@/lib/i18n";

const LOGO_URL =
  "https://static.wixstatic.com/media/3b6d59_02021d49f3f145be957b05a2b4dddda3~mv2.png/v1/crop/x_41,y_179,w_406,h_133/fill/w_545,h_186,al_c,lg_1,q_85,enc_avif,quality_auto/2-Photoroom.png";

const KEYWORDS: Record<SupportedLang, string> = {
  pt: "Consultoria • ISO/IEC 17025",
  en: "Consulting • ISO/IEC 17025"
};

type IntroScreenProps = {
  lang: SupportedLang;
  onComplete: () => void;
};

const INTRO_STAY_MS = 2200;
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
      className={`intro-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-[500ms] ease-out ${
        fadeOut ? "intro-screen-out" : "intro-screen-in"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div className="intro-logo relative h-[120px] w-[280px] sm:h-[140px] sm:w-[320px] md:h-[160px] md:w-[360px]">
          <Image
            src={LOGO_URL}
            alt="CTLI Consultoria e Treinamento"
            fill
            className="object-contain object-center"
            priority
            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
          />
        </div>
        <p className="intro-keywords text-center text-sm font-medium tracking-wide text-slate-600 sm:text-base">
          {KEYWORDS[lang]}
        </p>
      </div>
    </div>
  );
}
