import { SectionContainer } from "@/ui/SectionContainer";
import { Badge } from "@/ui/Badge";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { Button } from "@/ui/Button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/cta";
import type { SupportedLang } from "@/lib/i18n";

type HeroSectionProps = {
  lang: SupportedLang;
};

export function HeroSection({ lang }: HeroSectionProps) {
  const primaryCtaLabel =
    lang === "pt"
      ? "Agendar diagnóstico de acreditação"
      : "Schedule accreditation assessment";
  const secondaryCtaLabel =
    lang === "pt"
      ? "Ver treinamentos técnicos"
      : "See technical trainings";

  return (
    <SectionContainer id="hero">
      <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-slate-50 shadow-lg ring-1 ring-slate-900/40 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%)]" />
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Badge>
              {lang === "pt"
                ? "ISO/IEC 17025, metrologia e acreditação"
                : "ISO/IEC 17025, metrology and accreditation"}
            </Badge>
            <Heading level={1}>
              {lang === "pt"
                ? "Consultoria, treinamentos e certificados para laboratórios que não podem errar."
                : "Consulting, training and certificates for laboratories that cannot afford mistakes."}
            </Heading>
            <Text muted={false}>
              {siteConfig.tagline[lang]}
            </Text>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href={buildWhatsAppUrl(primaryCtaLabel)}>
                <Button size="lg">{primaryCtaLabel}</Button>
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline"
              >
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                {lang === "pt"
                  ? "O que a CTLI resolve"
                  : "What CTLI delivers"}
              </p>
              <dl className="mt-4 space-y-3 text-sm text-slate-200/90">
                <div>
                  <dt className="font-semibold">
                    {lang === "pt"
                      ? "Implantação e manutenção da ISO/IEC 17025"
                      : "ISO/IEC 17025 implementation and maintenance"}
                  </dt>
                  <dd className="text-slate-300/80">
                    {lang === "pt"
                      ? "Planejamento, documentação e suporte às avaliações da CGCRE/INMETRO."
                      : "Planning, documentation and support for CGCRE/INMETRO assessments."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    {lang === "pt"
                      ? "Treinamentos técnicos de alto impacto"
                      : "High-impact technical trainings"}
                  </dt>
                  <dd className="text-slate-300/80">
                    {lang === "pt"
                      ? "Metrologia, calibração de balanças, incerteza de medição e normas ISO."
                      : "Metrology, balance calibration, measurement uncertainty and ISO standards."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    {lang === "pt"
                      ? "Emissão estruturada de certificados"
                      : "Structured certificate issuance"}
                  </dt>
                  <dd className="text-slate-300/80">
                    {lang === "pt"
                      ? "Planilhas automatizadas para certificados rastreados conforme ISO/IEC 17025."
                      : "Automated spreadsheets for ISO/IEC 17025-traceable certificates."}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

