import { SectionLayout } from "@/layout/SectionLayout";
import { Text } from "@/ui/Text";
import {
  aboutSectionCopy,
  locationLine
} from "@/config/company";
import type { SupportedLang } from "@/lib/i18n";

type AboutSectionProps = {
  lang: SupportedLang;
};

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <SectionLayout
      id="about"
      title={aboutSectionCopy.title[lang]}
      subtitle={aboutSectionCopy.subtitle[lang]}
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div className="min-w-0 space-y-4 sm:space-y-5">
          {aboutSectionCopy.paragraphs.map((paragraph, index) => (
            <Text key={index} className="text-slate-700">
              {paragraph[lang]}
            </Text>
          ))}
        </div>
        <div className="min-w-0 space-y-4">
          <ul className="list-disc space-y-2.5 pl-5 text-[14px] leading-snug text-slate-700 sm:text-[15px]">
            {aboutSectionCopy.bullets[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Text muted>{locationLine[lang]}</Text>
        </div>
      </div>
    </SectionLayout>
  );
}
