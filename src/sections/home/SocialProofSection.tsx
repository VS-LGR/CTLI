import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Text } from "@/ui/Text";
import { LogoCloud } from "@/ui/LogoCloud";
import { testimonials } from "@/config/testimonials";
import { clients } from "@/config/clients";
import { socialProofHighlight } from "@/config/company";
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
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]">
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
        <div className="space-y-4">
          <p className="rounded-2xl border border-border bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600 md:text-sm">
            {socialProofHighlight[lang]}
          </p>
          <div>
            <Text muted>
              {lang === "pt"
                ? "Laboratórios acreditados ISO/IEC 17025:2017"
                : "ISO/IEC 17025 accredited laboratories"}
            </Text>
            <LogoCloud>
              {accreditationClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-center rounded-xl border border-border bg-white px-3 py-3 text-xs font-medium text-slate-700 shadow-sm"
                >
                  {client.label[lang]}
                </div>
              ))}
            </LogoCloud>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="space-y-2">
                <Text muted>
                  {lang === "pt"
                    ? "Empresas com contratos de serviços e consultoria"
                    : "Companies with consulting and service engagements"}
                </Text>
                <LogoCloud>
                  {serviceClients.map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-center rounded-xl border border-border bg-white px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
                      {client.label[lang]}
                    </div>
                  ))}
                </LogoCloud>
              </div>
            </Card>
            <Card>
              <div className="space-y-2">
                <Text muted>
                  {lang === "pt"
                    ? "Organizações que confiaram nos treinamentos CTLI"
                    : "Organizations trained by CTLI"}
                </Text>
                <LogoCloud>
                  {trainingClients.map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-center rounded-xl border border-border bg-white px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
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

