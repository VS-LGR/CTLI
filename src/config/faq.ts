import type { SupportedLang } from "@/lib/i18n";

export type FaqItem = {
  id: string;
  question: Record<SupportedLang, string>;
  answer: Record<SupportedLang, string>;
};

export const faqItems: FaqItem[] = [
  {
    id: "iso17025-start",
    question: {
      pt: "Por onde começar para buscar a acreditação ISO/IEC 17025:2017?",
      en: "Where should we start when seeking ISO/IEC 17025:2017 accreditation?"
    },
    answer: {
      pt: "O primeiro passo é mapear seus processos críticos de medição, analisar a situação atual frente aos requisitos da norma e definir um plano realista de implementação. A CTLI apoia desde o diagnóstico até a preparação para as avaliações da CGCRE.",
      en: "The first step is to map your critical measurement processes, assess your current situation against the standard requirements and define a realistic implementation plan. CTLI supports you from diagnosis through preparation for accreditation assessments."
    }
  }
];

