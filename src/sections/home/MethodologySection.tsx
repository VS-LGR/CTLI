import { SectionLayout } from "@/layout/SectionLayout";
import type { SupportedLang } from "@/lib/i18n";

type MethodologySectionProps = {
  lang: SupportedLang;
};

export function MethodologySection({ lang }: MethodologySectionProps) {
  const title =
    lang === "pt"
      ? "Metodologia orientada a resultados"
      : "Result-driven methodology";

  const subtitle =
    lang === "pt"
      ? "Passos claros para sair do diagnóstico e chegar à acreditação com segurança."
      : "Clear steps from diagnosis to accreditation with confidence.";

  const steps =
    lang === "pt"
      ? [
          "Diagnóstico técnico do laboratório e dos processos de medição.",
          "Plano de ação priorizado, alinhado à estratégia da empresa.",
          "Apoio na implementação, capacitação e registro de evidências.",
          "Preparação para auditorias e manutenção da acreditação."
        ]
      : [
          "Technical diagnosis of the laboratory and measurement processes.",
          "Prioritized action plan aligned with company strategy.",
          "Support during implementation, training and evidence records.",
          "Preparation for audits and accreditation maintenance."
        ];

  return (
    <SectionLayout id="methodology" title={title} subtitle={subtitle}>
      <ol className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50 p-4 sm:p-5"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <p className="min-w-0 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </SectionLayout>
  );
}

