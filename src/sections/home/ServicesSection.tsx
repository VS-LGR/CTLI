import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { services } from "@/config/services";
import type { SupportedLang } from "@/lib/i18n";

type ServicesSectionProps = {
  lang: SupportedLang;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  const title =
    lang === "pt"
      ? "Serviços pensados para todo o ciclo da acreditação"
      : "Services designed for the entire accreditation cycle";

  const subtitle =
    lang === "pt"
      ? "Da capacitação da equipe à emissão de certificados de calibração, com foco total na NORMA ABNT NBR ISO/IEC 17025:2017."
      : "From team training to calibration certificate issuance, fully aligned with ISO/IEC 17025:2017.";

  return (
    <SectionLayout id="services" title={title} subtitle={subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id}>
            <div className="space-y-3">
              <Heading level={3}>{service.title[lang]}</Heading>
              <Text>{service.description[lang]}</Text>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-300">
                {service.highlights[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}

