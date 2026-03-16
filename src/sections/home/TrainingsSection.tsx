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
      ? "Escolha a combinação de módulos que faz sentido para o seu laboratório ou empresa, sem precisar lidar com listas intermináveis de cursos."
      : "Choose the combination of modules that fits your laboratory or company, without dealing with endless course lists.";

  const ctaLabel =
    lang === "pt"
      ? "Montar trilha de treinamento"
      : "Design a training track";

  return (
    <SectionLayout id="trainings" title={title} subtitle={subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {trainingCategories.map((category) => (
          <Card key={category.id}>
            <div className="flex h-full flex-col gap-3">
              <Heading level={3}>{category.title[lang]}</Heading>
              <Text>{category.description[lang]}</Text>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-600">
                {category.examples[lang].map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a href={buildWhatsAppUrl(ctaLabel)}>
                  <Button size="sm" variant="secondary">
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

