import Link from "next/link";
import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Text } from "@/ui/Text";
import { Button } from "@/ui/Button";
import { testimonials } from "@/config/testimonials";
import { socialProofHighlight } from "@/config/company";
import type { SupportedLang } from "@/lib/i18n";

type SocialProofSectionProps = {
  lang: SupportedLang;
};

export function SocialProofSection({ lang }: SocialProofSectionProps) {
  const basePath = lang === "pt" ? "/pt" : "/en";
  const clientsHref = `${basePath}/clientes`;

  const title =
    lang === "pt"
      ? "Resultados e confiança"
      : "Results and trust";

  const subtitle =
    lang === "pt"
      ? "Depoimento em destaque e acesso à lista completa de organizações atendidas pela CTLI."
      : "Featured testimonial and access to the full list of organizations CTLI has served.";

  const mainTestimonial = testimonials[0];

  const clientsCta =
    lang === "pt"
      ? "Ver todos os clientes"
      : "View all clients";

  return (
    <SectionLayout id="clients" title={title} subtitle={subtitle}>
      <div className="mx-auto grid max-w-3xl gap-6 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:items-start">
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
        <div className="flex flex-col justify-center gap-5 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-5 sm:p-6 lg:min-h-[200px]">
          <p className="text-[13px] leading-relaxed text-slate-700 sm:text-sm">
            {socialProofHighlight[lang]}
          </p>
          <div>
            <Link href={clientsHref}>
              <Button className="w-full sm:w-auto">{clientsCta}</Button>
            </Link>
            <p className="mt-2 text-xs text-slate-500">
              {lang === "pt"
                ? "Laboratórios de acreditação, serviços e treinamentos corporativos em página dedicada."
                : "Accreditation labs, service clients and corporate training on a dedicated page."}
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
