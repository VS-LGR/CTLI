import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { trainingCourses, getTrainingCourseBySlug } from "@/config/trainingCourses";
import { trainingCategories } from "@/config/trainings";
import { TrainingTrackVertical } from "@/components/TrainingTrackVertical";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { Button } from "@/ui/Button";
import { buildWhatsAppUrl } from "@/lib/cta";
import { isSupportedLang, type SupportedLang } from "@/lib/i18n";
import { getTrainingTrackSeo } from "@/lib/seo";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  return trainingCourses.flatMap((c) => [
    { lang: "pt", slug: c.slug },
    { lang: "en", slug: c.slug }
  ]);
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang: SupportedLang = isSupportedLang(langParam) ? langParam : "pt";
  const course = getTrainingCourseBySlug(slug);
  if (!course) return { title: "CTLI" };
  return getTrainingTrackSeo(lang, course.title[lang]);
}

export default async function TrainingTrackPage({ params }: PageProps) {
  const { lang: langParam, slug } = await params;
  if (!isSupportedLang(langParam)) notFound();
  const lang = langParam;

  const course = getTrainingCourseBySlug(slug);
  if (!course) notFound();

  const category = trainingCategories.find((c) => c.id === course.categoryId);
  const basePath = lang === "pt" ? "/pt" : "/en";
  const trainingsHash = `${basePath}#trainings`;

  const waMsg =
    lang === "pt"
      ? `Olá, tenho interesse no treinamento "${course.title.pt}" (trilha no site).`
      : `Hello, I'm interested in the training "${course.title.en}" (track on the website).`;

  const backLabel = lang === "pt" ? "Voltar aos treinamentos" : "Back to trainings";
  const ctaLabel =
    lang === "pt" ? "Falar sobre este treinamento" : "Discuss this training";

  return (
    <div>
      <article className="border-b border-border bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav className="mb-6 flex flex-wrap gap-x-2 gap-y-1 text-sm text-slate-500">
            <Link href={basePath} className="text-primary hover:underline">
              {lang === "pt" ? "Início" : "Home"}
            </Link>
            <span className="text-slate-300">/</span>
            <Link href={trainingsHash} className="text-primary hover:underline">
              {lang === "pt" ? "Treinamentos" : "Training"}
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700">{course.title[lang]}</span>
          </nav>

          {category ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {category.title[lang]}
            </p>
          ) : null}

          <Heading level={1} className="mt-2 text-balance">
            {course.title[lang]}
          </Heading>
          <Text className="mt-3 text-slate-600">
            {lang === "pt"
              ? "Trilha sugerida — a sequência pode ser ajustada in company conforme o laboratório."
              : "Suggested track — the sequence can be tailored in-company for your lab."}
          </Text>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={buildWhatsAppUrl(waMsg)}>
              <Button>{ctaLabel}</Button>
            </a>
            <Link href={trainingsHash}>
              <Button variant="secondary">{backLabel}</Button>
            </Link>
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="sr-only">
          {lang === "pt" ? "Etapas da trilha" : "Track steps"}
        </h2>
        <TrainingTrackVertical steps={course.trackSteps} lang={lang} />
        <div className="mt-12 flex flex-wrap justify-center gap-3 border-t border-border pt-10">
          <a href={buildWhatsAppUrl(waMsg)}>
            <Button size="lg">{ctaLabel}</Button>
          </a>
          <Link href={trainingsHash}>
            <Button size="lg" variant="secondary">
              {backLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
