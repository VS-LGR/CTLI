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
      ? "Ver soluções em ISO/IEC 17025"
      : "See ISO/IEC 17025 solutions";

  return (
    <SectionContainer id="hero">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <Badge>
            {lang === "pt"
              ? "Consultoria ISO/IEC 17025, calibração e certificados"
              : "ISO/IEC 17025 consulting, calibration and certificates"}
          </Badge>
          <Heading level={1}>
            {lang === "pt"
              ? "Acreditação, calibração e certificados pensados para laboratórios que não podem errar."
              : "Accreditation, calibration and certificates for laboratories that cannot afford mistakes."}
          </Heading>
          <Text>
            {siteConfig.tagline[lang]}
          </Text>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={buildWhatsAppUrl(primaryCtaLabel)}>
              <Button size="lg">{primaryCtaLabel}</Button>
            </a>
            <a
              href="#services"
              className="text-sm text-slate-600 underline-offset-4 hover:text-primary hover:underline"
            >
              {secondaryCtaLabel}
            </a>
          </div>
        </div>
        <div className="hidden md:block rounded-2xl border border-border bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            ISO/IEC 17025 • Balanças • Certificados
          </p>
          <p className="mt-4 text-sm text-slate-600">
              {lang === "pt"
                ? "Mais de 20 anos de experiência em normas técnicas, acreditação e metrologia, apoiando laboratórios em todo o Brasil."
                : "Over 20 years of experience in technical standards, accreditation and metrology, supporting laboratories throughout Brazil."}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

