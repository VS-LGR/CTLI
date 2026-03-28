import Link from "next/link";
import type { TrainingCourse } from "@/config/trainingCourses";
import type { SupportedLang } from "@/lib/i18n";

type TrainingTrackPreviewProps = {
  course: TrainingCourse;
  lang: SupportedLang;
  basePath: string;
};

const PREVIEW_STEPS = 3;

export function TrainingTrackPreview({
  course,
  lang,
  basePath
}: TrainingTrackPreviewProps) {
  const steps = course.trackSteps.slice(0, PREVIEW_STEPS);
  const more = course.trackSteps.length - steps.length;
  const href = `${basePath}/treinamentos/${course.slug}`;
  const cta =
    lang === "pt" ? "Ver trilha completa" : "View full track";

  return (
    <div className="mt-3 border-t border-border/80 pt-3">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {lang === "pt" ? "Trilha (prévia)" : "Track (preview)"}
      </p>
      <ol className="relative ms-2 space-y-2 border-s-2 border-primary/25 ps-4">
        {steps.map((step, i) => (
          <li key={i} className="relative text-[12px] leading-snug text-slate-600">
            <span
              className="absolute -start-[1.35rem] top-1.5 size-2 rounded-full bg-primary/80"
              aria-hidden
            />
            <span className="font-medium text-slate-800">{step.title[lang]}</span>
          </li>
        ))}
      </ol>
      {more > 0 ? (
        <p className="mt-2 ps-4 text-[11px] text-slate-500">
          +{more} {lang === "pt" ? "etapas" : "more steps"}
        </p>
      ) : null}
      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:underline"
      >
        {cta}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
