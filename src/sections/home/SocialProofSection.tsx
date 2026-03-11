import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Text } from "@/ui/Text";
import { LogoCloud } from "@/ui/LogoCloud";
import { testimonials } from "@/config/testimonials";
import { clients } from "@/config/clients";
import type { SupportedLang } from "@/lib/i18n";

type SocialProofSectionProps = {
  lang: SupportedLang;
};

export function SocialProofSection({ lang }: SocialProofSectionProps) {
  const title =
    lang === "pt"
      ? "Prova social e confiança"
      : "Social proof and trust";

  const subtitle =
    lang === "pt"
      ? "Laboratórios de calibração, empresas de pesagem e indústrias que fortalecem seus resultados de acreditação e calibração com a CTLI."
      : "Calibration laboratories, weighing companies and industries that strengthen their accreditation and calibration results with CTLI.";

  const mainTestimonial = testimonials[0];

  return (
    <SectionLayout id="clients" title={title} subtitle={subtitle}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Card>
          <div className="space-y-3">
            <Text muted>
              {lang === "pt" ? "Depoimento" : "Testimonial"}
            </Text>
            <p className="text-sm text-slate-700">
              “{mainTestimonial.quote[lang]}”
            </p>
            <p className="text-xs font-medium text-slate-500">
              {mainTestimonial.client} • {mainTestimonial.role}
            </p>
          </div>
        </Card>
        <div className="space-y-3">
          <Text muted>
            {lang === "pt" ? "Alguns clientes atendidos" : "Selected clients"}
          </Text>
          <LogoCloud>
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center rounded-xl border border-border bg-white px-3 py-3 text-xs font-medium text-slate-700 shadow-sm"
              >
                {client.label[lang]}
              </div>
            ))}
          </LogoCloud>
        </div>
      </div>
    </SectionLayout>
  );
}

