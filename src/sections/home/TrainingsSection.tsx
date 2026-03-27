import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { Button } from "@/ui/Button";
import { trainingCategories } from "@/config/trainings";
import { buildWhatsAppUrl } from "@/lib/cta";
import type { SupportedLang } from "@/lib/i18n";

type TrainingsSectionProps = {
  lang: SupportedLang;
};

export function TrainingsSection({ lang }: TrainingsSectionProps) {
  const title =
    lang === "pt"
      ? "Treinamentos técnicos organizados em trilhas"
      : "Technical trainings organized in tracks";

  const subtitle =
    lang === "pt"
      ? "Trilhas por tema: metrologia, ISO, farmácia e ferramentas. Combine módulos conforme a necessidade do laboratório."
      : "Tracks by topic: metrology, ISO, pharma and tools. Combine modules to fit your lab.";

  const ctaLabel =
    lang === "pt"
      ? "Montar trilha de treinamento"
      : "Design a training track";

  const ctaWhatsAppMessage =
    lang === "pt"
      ? "Olá, quero montar uma trilha de treinamento técnico com a CTLI."
      : "Hello, I want to design a technical training track with CTLI.";

  return (
    <SectionLayout id="trainings" title={title} subtitle={subtitle}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {trainingCategories.map((category) => (
          <Card key={category.id}>
            <div className="flex h-full min-h-0 flex-col gap-3 sm:gap-4">
              <Heading level={3} className="text-balance">
                {category.title[lang]}
              </Heading>
              <Text muted>{category.description[lang]}</Text>
              <ul className="list-disc space-y-1.5 pl-5 text-[13px] leading-snug text-slate-600 sm:text-sm">
                {category.examples[lang].map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <a
                  href={buildWhatsAppUrl(ctaWhatsAppMessage)}
                  className="inline-block w-full sm:w-auto"
                >
                  <Button size="sm" variant="secondary" className="w-full sm:w-auto">
                    {ctaLabel}
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}

