import Link from "next/link";
import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { Button } from "@/ui/Button";
import { trainingCategories } from "@/config/trainings";
import { getTrainingCoursesByCategory } from "@/config/trainingCourses";
import { TrainingTrackPreview } from "@/components/TrainingTrackPreview";
import { buildWhatsAppUrl } from "@/lib/cta";
import type { SupportedLang } from "@/lib/i18n";

type TrainingsSectionProps = {
  lang: SupportedLang;
};

export function TrainingsSection({ lang }: TrainingsSectionProps) {
  const basePath = lang === "pt" ? "/pt" : "/en";

  const title =
    lang === "pt"
      ? "Treinamentos técnicos com trilha definida"
      : "Technical trainings with a clear track";

  const subtitle =
    lang === "pt"
      ? "Cada curso tem uma trilha sugerida (prévia abaixo). Abra a página da trilha para ver todas as etapas antes de falar com a CTLI."
      : "Each course has a suggested track (preview below). Open the track page to see every step before contacting CTLI.";

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
        {trainingCategories.map((category) => {
          const courses = getTrainingCoursesByCategory(category.id);
          return (
            <Card key={category.id}>
              <div className="flex h-full min-h-0 flex-col gap-3 sm:gap-4">
                <Heading level={3} className="text-balance">
                  {category.title[lang]}
                </Heading>
                <Text muted>{category.description[lang]}</Text>
                <div className="flex min-h-0 flex-col gap-4">
                  {courses.map((course) => (
                    <div
                      key={course.slug}
                      className="rounded-xl border border-slate-200/80 bg-slate-50/50 px-3 py-3 sm:px-4 sm:py-3.5"
                    >
                      <p className="text-[13px] font-semibold leading-snug text-slate-900 sm:text-sm">
                        {course.title[lang]}
                      </p>
                      <TrainingTrackPreview
                        course={course}
                        lang={lang}
                        basePath={basePath}
                      />
                    </div>
                  ))}
                </div>
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
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm text-slate-600">
        <Link
          href={`${basePath}#contact`}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {lang === "pt"
            ? "Ir para contato"
            : "Go to contact"}
        </Link>
      </p>
    </SectionLayout>
  );
}
