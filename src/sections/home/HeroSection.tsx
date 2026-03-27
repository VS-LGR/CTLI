import Image from "next/image";
import { SectionContainer } from "@/ui/SectionContainer";
import { Badge } from "@/ui/Badge";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { Button } from "@/ui/Button";
import { buildWhatsAppUrl } from "@/lib/cta";
import {
  heroCopy,
  heroCtaLabels,
  heroWhatsAppMessages,
  heroSecondaryWhatsAppMessages
} from "@/config/company";
import type { SupportedLang } from "@/lib/i18n";
import introGif from "@/components/CTLI INTRo.gif";

type HeroSectionProps = {
  lang: SupportedLang;
};

export function HeroSection({ lang }: HeroSectionProps) {
  return (
    <SectionContainer id="hero">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-slate-50 shadow-lg ring-1 ring-slate-900/40 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%)]" />
        {/* GIF decorativo: lazy + baixa prioridade de fetch para não competir com o LCP; futuro: poster WebP estático ou asset otimizado em /public */}
        <div className="pointer-events-none absolute inset-y-0 right-[-10%] -z-20 hidden w-1/2 opacity-25 md:block">
          <Image
            src={introGif}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
            loading="lazy"
            fetchPriority="low"
          />
        </div>
        <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Badge>{heroCopy.badge[lang]}</Badge>
            <Heading level={1}>{heroCopy.headline[lang]}</Heading>
            <Text muted={false}>{heroCopy.subline[lang]}</Text>
            <p className="text-xs text-slate-400 md:text-sm">{heroCopy.trustLine[lang]}</p>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a href={buildWhatsAppUrl(heroWhatsAppMessages[lang])}>
                <Button size="lg">{heroCtaLabels.primary[lang]}</Button>
              </a>
              <a
                href={buildWhatsAppUrl(heroSecondaryWhatsAppMessages[lang])}
                className="text-sm font-medium text-sky-300 underline-offset-4 hover:text-sky-200 hover:underline"
              >
                {heroCtaLabels.secondary[lang]}
              </a>
              <a
                href="#trainings"
                className="text-sm font-medium text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
              >
                {heroCtaLabels.tertiaryAnchor[lang]}
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
                      ? "Implantação e manutenção da ISO/IEC 17025 (RBC/CGCRE)"
                      : "ISO/IEC 17025 implementation and maintenance (RBC/CGCRE)"}
                  </dt>
                  <dd className="text-slate-300/80">
                    {lang === "pt"
                      ? "Documentação, evidências técnicas e preparação para avaliações do INMETRO."
                      : "Documentation, technical evidence and preparation for INMETRO assessments."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    {lang === "pt"
                      ? "Treinamentos em metrologia e normas"
                      : "Training in metrology and standards"}
                  </dt>
                  <dd className="text-slate-300/80">
                    {lang === "pt"
                      ? "Calibração de balanças (EURAMET CG-18), incerteza, ISO 17025 e boas práticas de pesagem."
                      : "Balance calibration (EURAMET CG-18), uncertainty, ISO 17025 and good weighing practices."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    {lang === "pt"
                      ? "Certificados de calibração de balanças"
                      : "Balance calibration certificates"}
                  </dt>
                  <dd className="text-slate-300/80">
                    {lang === "pt"
                      ? "Planilhas com incerteza automatizada e opção de fluxo manual ou altamente automatizado."
                      : "Spreadsheets with automated uncertainty and manual or highly automated workflows."}
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
