import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import { services } from "@/config/services";
import { servicesSectionCopy } from "@/config/company";
import type { SupportedLang } from "@/lib/i18n";

type ServicesSectionProps = {
  lang: SupportedLang;
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  return (
    <SectionLayout
      id="services"
      title={servicesSectionCopy.title[lang]}
      subtitle={servicesSectionCopy.subtitle[lang]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id}>
            <div className="space-y-3">
              <Heading level={3}>{service.title[lang]}</Heading>
              <Text>{service.description[lang]}</Text>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600">
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

