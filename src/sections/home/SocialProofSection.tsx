import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Text } from "@/ui/Text";
import { LogoCloud } from "@/ui/LogoCloud";
import { testimonials } from "@/config/testimonials";
import { clients } from "@/config/clients";
import { socialProofHighlight } from "@/config/company";
import type { SupportedLang } from "@/lib/i18n";

const chipClass =
  "flex min-h-[2.75rem] items-center justify-center rounded-xl border border-border bg-white px-2.5 py-2 text-center text-[12px] font-medium leading-snug text-slate-800 shadow-sm sm:min-h-0 sm:px-3 sm:py-2.5 sm:text-xs md:text-sm";

type SocialProofSectionProps = {
  lang: SupportedLang;
};

export function SocialProofSection({ lang }: SocialProofSectionProps) {
  const title =
    lang === "pt"
      ? "Resultados e confiança"
      : "Results and trust";

  const subtitle =
    lang === "pt"
      ? "Depoimento, números e organizações que reforçam a atuação da CTLI em acreditação e metrologia."
      : "Testimonial, facts and organizations that reinforce CTLI’s work in accreditation and metrology.";

  const mainTestimonial = testimonials[0];

  const accreditationClients = clients.filter(
    (client) => client.category === "accreditation"
  );
  const serviceClients = clients.filter(
    (client) => client.category === "services"
  );
  const trainingClients = clients.filter(
    (client) => client.category === "training"
  );

  return (
    <SectionLayout id="clients" title={title} subtitle={subtitle}>
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <Card className="border-slate-200/90">
          <div className="space-y-3 sm:space-y-4">
            <Text muted className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
              {lang === "pt" ? "Depoimento" : "Testimonial"}
            </Text>
            <blockquote className="text-[15px] font-normal leading-relaxed text-slate-800 sm:text-base">
              <span className="text-primary">&ldquo;</span>
              {mainTestimonial.quote[lang]}
              <span className="text-primary">&rdquo;</span>
            </blockquote>
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              {mainTestimonial.client} · {mainTestimonial.role}
            </p>
          </div>
        </Card>
        <div className="min-w-0 space-y-5">
          <p className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white px-4 py-3 text-[13px] leading-relaxed text-slate-700 sm:px-5 sm:py-4 sm:text-sm">
            {socialProofHighlight[lang]}
          </p>
          <div className="space-y-2">
            <Text muted className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
              {lang === "pt"
                ? "Laboratórios — acreditação ISO/IEC 17025:2017"
                : "Laboratories — ISO/IEC 17025:2017 accreditation"}
            </Text>
            <LogoCloud variant="compact">
              {accreditationClients.map((client) => (
                <div key={client.id} className={chipClass}>
                  {client.label[lang]}
                </div>
              ))}
            </LogoCloud>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <Card>
              <div className="space-y-2 sm:space-y-3">
                <Text muted className="text-xs font-semibold sm:text-sm">
                  {lang === "pt"
                    ? "Prestação de serviços e consultoria"
                    : "Service and consulting clients"}
                </Text>
                <LogoCloud variant="compact">
                  {serviceClients.map((client) => (
                    <div key={client.id} className={chipClass}>
                      {client.label[lang]}
                    </div>
                  ))}
                </LogoCloud>
              </div>
            </Card>
            <Card>
              <div className="space-y-2 sm:space-y-3">
                <Text muted className="text-xs font-semibold sm:text-sm">
                  {lang === "pt"
                    ? "Treinamentos corporativos"
                    : "Corporate training"}
                </Text>
                <LogoCloud variant="compact">
                  {trainingClients.map((client) => (
                    <div key={client.id} className={chipClass}>
                      {client.label[lang]}
                    </div>
                  ))}
                </LogoCloud>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
