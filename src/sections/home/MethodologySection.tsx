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
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-3 rounded-2xl border border-border/60 bg-black/60 p-4"
          >
            <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <p className="text-sm text-gray-200">{step}</p>
          </li>
        ))}
      </ol>
    </SectionLayout>
  );
}

