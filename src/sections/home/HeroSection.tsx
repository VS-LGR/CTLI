import Image from "next/image";
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
  const deliverables =
    lang === "pt"
      ? [
          "ISO/IEC 17025 na RBC (documentação e CGCRE/INMETRO)",
          "Treinamentos: balanças, incerteza, normas",
          "Planilhas para certificados de calibração"
        ]
      : [
          "ISO/IEC 17025 in the RBC (documentation and CGCRE/INMETRO)",
          "Training: balances, uncertainty, standards",
          "Spreadsheets for calibration certificates"
        ];

  return (
    <section
      id="hero"
      className="relative isolate w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(15,118,110,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[min(52%,28rem)] opacity-[0.18] md:block lg:w-[min(45%,32rem)] lg:opacity-[0.2]">
        <Image
          src={introGif}
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="(max-width: 1024px) 40vw, 480px"
          loading="lazy"
          fetchPriority="low"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[90rem] px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 md:px-8 md:pb-20 md:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-12 lg:items-center lg:gap-16">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <Badge className="border-sky-400/35 bg-sky-500/15 text-[11px] font-semibold uppercase tracking-wider text-sky-100 sm:text-xs">
              {heroCopy.badge[lang]}
            </Badge>
            <Heading
              level={1}
              className="max-w-4xl text-balance text-white lg:max-w-5xl"
            >
              {heroCopy.headline[lang]}
            </Heading>
            <Text
              inverted
              className="max-w-2xl text-[15px] sm:text-base lg:text-lg lg:leading-relaxed"
            >
              {heroCopy.subline[lang]}
            </Text>
            <p className="max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm">
              {heroCopy.trustLine[lang]}
            </p>
            <ul className="md:hidden">
              {deliverables.map((line) => (
                <li
                  key={line}
                  className="border-l-2 border-sky-500/50 py-1 pl-3 text-xs leading-snug text-slate-300 first:pt-0 last:pb-0"
                >
                  {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <a
                href={buildWhatsAppUrl(heroWhatsAppMessages[lang])}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  {heroCtaLabels.primary[lang]}
                </Button>
              </a>
              <a
                href={buildWhatsAppUrl(heroSecondaryWhatsAppMessages[lang])}
                className="text-center text-sm font-medium text-sky-300 underline-offset-4 sm:text-left hover:text-sky-200 hover:underline"
              >
                {heroCtaLabels.secondary[lang]}
              </a>
              <a
                href="#trainings"
                className="text-center text-sm font-medium text-slate-400 underline-offset-4 sm:text-left hover:text-slate-200 hover:underline"
              >
                {heroCtaLabels.tertiaryAnchor[lang]}
              </a>
            </div>
          </div>

          <div className="hidden min-w-0 md:block">
            <div className="border-l border-slate-700/60 pl-8 lg:pl-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                {lang === "pt"
                  ? "O que a CTLI resolve"
                  : "What CTLI delivers"}
              </p>
              <dl className="mt-6 space-y-6 text-sm">
                <div>
                  <dt className="font-semibold text-slate-100">
                    {lang === "pt"
                      ? "ISO/IEC 17025 na RBC (CGCRE/INMETRO)"
                      : "ISO/IEC 17025 in the RBC (CGCRE/INMETRO)"}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                    {lang === "pt"
                      ? "Documentação, evidências técnicas e preparação para avaliações."
                      : "Documentation, technical evidence and assessment readiness."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-100">
                    {lang === "pt"
                      ? "Treinamentos em metrologia e normas"
                      : "Metrology and standards training"}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                    {lang === "pt"
                      ? "Calibração de balanças (EURAMET CG-18), incerteza e boas práticas de pesagem."
                      : "Balance calibration (EURAMET CG-18), uncertainty and good weighing practices."}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-100">
                    {lang === "pt"
                      ? "Certificados de calibração"
                      : "Calibration certificates"}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                    {lang === "pt"
                      ? "Planilhas com incerteza automatizada — fluxo manual ou mais automatizado."
                      : "Spreadsheets with automated uncertainty — manual or streamlined workflows."}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
