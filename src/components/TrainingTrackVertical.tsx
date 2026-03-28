import type { TrainingTrackStep } from "@/config/trainingCourses";
import type { SupportedLang } from "@/lib/i18n";

type TrainingTrackVerticalProps = {
  steps: TrainingTrackStep[];
  lang: SupportedLang;
};

export function TrainingTrackVertical({
  steps,
  lang
}: TrainingTrackVerticalProps) {
  return (
    <ol className="relative mx-auto max-w-2xl space-y-0">
      {steps.map((step, index) => {
        const last = index === steps.length - 1;
        return (
          <li key={index} className="relative flex gap-4 pb-10 sm:gap-6 sm:pb-12">
            {!last ? (
              <div
                className="absolute start-[15px] top-10 h-[calc(100%-0.5rem)] w-0.5 bg-gradient-to-b from-primary/50 to-primary/15 sm:start-[19px]"
                aria-hidden
              />
            ) : null}
            <div className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md ring-4 ring-white sm:size-10 sm:text-base">
              {index + 1}
            </div>
            <div className="min-w-0 flex-1 rounded-2xl border border-slate-200/90 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {step.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {step.body[lang]}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
