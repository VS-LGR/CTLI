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
    lang === "pt" ? "Falar agora com especialista" : "Talk to a specialist";
  const secondaryCtaLabel =
    lang === "pt" ? "Ver soluções em consultoria" : "See consulting solutions";

  return (
    <SectionContainer id="hero">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <Badge>
            {lang === "pt"
              ? "Especialistas em ISO/IEC 17025:2017"
              : "Experts in ISO/IEC 17025:2017"}
          </Badge>
          <Heading level={1}>
            {lang === "pt"
              ? "Consultoria, treinamento e acreditação pensados para laboratórios que não podem errar."
              : "Consulting, training and accreditation for laboratories that cannot afford mistakes."}
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

