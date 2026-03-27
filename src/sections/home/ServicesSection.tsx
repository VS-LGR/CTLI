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
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id}>
            <div className="flex h-full flex-col gap-3 sm:gap-4">
              <Heading level={3} className="text-balance">
                {service.title[lang]}
              </Heading>
              <Text muted>{service.description[lang]}</Text>
              <ul className="mt-auto list-disc space-y-2 pl-5 text-[14px] leading-snug text-slate-600 sm:text-sm">
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

