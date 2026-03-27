import { SectionLayout } from "@/layout/SectionLayout";
import { faqItems } from "@/config/faq";
import type { SupportedLang } from "@/lib/i18n";

type FAQSectionProps = {
  lang: SupportedLang;
};

export function FAQSection({ lang }: FAQSectionProps) {
  const title =
    lang === "pt"
      ? "Dúvidas frequentes sobre acreditação e calibração"
      : "Frequently asked questions about accreditation and calibration";

  const subtitle =
    lang === "pt"
      ? "Respostas diretas para quem precisa tomar decisão com segurança."
      : "Straightforward answers for decision-makers who need confidence.";

  return (
    <SectionLayout id="faq" title={title} subtitle={subtitle}>
      <div className="space-y-3 sm:space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.id}
            className="group rounded-2xl border border-border bg-slate-50 p-4 sm:p-5"
          >
            <summary className="cursor-pointer list-none text-[15px] font-medium leading-snug text-slate-900 marker:content-none sm:text-base [&::-webkit-details-marker]:hidden">
              {item.question[lang]}
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {item.answer[lang]}
            </p>
          </details>
        ))}
      </div>
    </SectionLayout>
  );
}

