import { SectionLayout } from "@/layout/SectionLayout";
import { Card } from "@/ui/Card";
import { Text } from "@/ui/Text";
import type { SupportedLang } from "@/lib/i18n";

type CertificationSectionProps = {
  lang: SupportedLang;
};

export function CertificationSection({ lang }: CertificationSectionProps) {
  const title =
    lang === "pt"
      ? "Foco em NORMA ABNT NBR ISO/IEC 17025:2017"
      : "Focus on ISO/IEC 17025:2017";

  const subtitle =
    lang === "pt"
      ? "Norma, RBC e CGCRE: interpretação, evidências e certificados de calibração."
      : "Standard, RBC and CGCRE: interpretation, evidence and calibration certificates.";

  return (
    <SectionLayout id="certification" title={title} subtitle={subtitle}>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        <Card>
          <Text>
            {lang === "pt"
              ? "Apoio na ISO/IEC 17025:2017: procedimentos, competência técnica e evidências para avaliações de acreditação."
              : "Support on ISO/IEC 17025:2017: procedures, technical competence and evidence for accreditation assessments."}
          </Text>
        </Card>
        <Card>
          <Text>
            {lang === "pt"
              ? "Planilhas para certificados de calibração de balanças com incerteza automatizada, rastreabilidade e padronização."
              : "Spreadsheets for balance calibration certificates with automated uncertainty, traceability and standardization."}
          </Text>
        </Card>
      </div>
    </SectionLayout>
  );
}

