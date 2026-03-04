"use client";

import { useState, type ReactNode } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { IntroAnimation } from "@/components/IntroAnimation";
import type { SupportedLang } from "@/lib/i18n";

type IntroWithScreenProps = {
  lang: SupportedLang;
  children: ReactNode;
};

export function IntroWithScreen({ lang, children }: IntroWithScreenProps) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && (
        <IntroScreen lang={lang} onComplete={() => setIntroDone(true)} />
      )}
      {introDone && <IntroAnimation>{children}</IntroAnimation>}
    </>
  );
}
