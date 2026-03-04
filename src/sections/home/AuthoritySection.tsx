import { SectionLayout } from "@/layout/SectionLayout";
import { Text } from "@/ui/Text";
import { teamMembers } from "@/config/team";
import type { SupportedLang } from "@/lib/i18n";

type AuthoritySectionProps = {
  lang: SupportedLang;
};

export function AuthoritySection({ lang }: AuthoritySectionProps) {
  const title =
    lang === "pt"
      ? "Liderança técnica à frente da CTLI"
      : "Technical leadership behind CTLI";

  const subtitle =
    lang === "pt"
      ? "Experiência real em laboratórios de calibração, gestão da qualidade e acreditação."
      : "Real-world experience in calibration laboratories, quality management and accreditation.";

  const founder = teamMembers[0];

  return (
    <SectionLayout id="authority" title={title} subtitle={subtitle}>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">{founder.name}</h3>
          <p className="text-sm font-medium text-primary">
            {founder.role[lang]}
          </p>
          <Text>{founder.bio[lang]}</Text>
        </div>
        <div className="rounded-2xl border border-border bg-slate-50 p-4 text-xs text-slate-600">
          {lang === "pt" ? (
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Atuação direta como gerente da qualidade e gerente técnico em
                diferentes organizações.
              </li>
              <li>
                Vivência em avaliações da CGCRE e outros organismos de
                acreditação.
              </li>
              <li>
                Experiência formando equipes em ISO/IEC 17025, boas práticas de
                pesagem e cálculo de incerteza.
              </li>
            </ul>
          ) : (
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Direct experience as Quality Manager and Technical Manager in
                different organizations.
              </li>
              <li>
                Strong background in CGCRE and other accreditation body
                assessments.
              </li>
              <li>
                Experience training teams in ISO/IEC 17025, good weighing
                practices and uncertainty calculation.
              </li>
            </ul>
          )}
        </div>
      </div>
    </SectionLayout>
  );
}

