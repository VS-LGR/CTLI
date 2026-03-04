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
      <div className="space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.id}
            className="group rounded-2xl border border-border/60 bg-black/60 p-4"
          >
            <summary className="cursor-pointer text-sm font-medium text-gray-100">
              {item.question[lang]}
            </summary>
            <p className="mt-2 text-sm text-gray-300">
              {item.answer[lang]}
            </p>
          </details>
        ))}
      </div>
    </SectionLayout>
  );
}

