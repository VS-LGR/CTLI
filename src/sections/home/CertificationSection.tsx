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
      ? "Consultoria e ferramentas para acelerar a acreditação e a emissão de certificados de calibração."
      : "Consulting and tools to accelerate accreditation and calibration certificate issuance.";

  return (
    <SectionLayout id="certification" title={title} subtitle={subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <Text>
            {lang === "pt"
              ? "A CTLI apoia laboratórios na interpretação da NORMA ABNT NBR ISO/IEC 17025:2017, na definição de procedimentos e na construção de evidências para as avaliações de acreditação."
              : "CTLI supports laboratories in interpreting ISO/IEC 17025:2017, defining procedures and building evidence for accreditation assessments."}
          </Text>
        </Card>
        <Card>
          <Text>
            {lang === "pt"
              ? "Também disponibilizamos planilhas e sistemas para emissão de certificados de calibração com cálculo automatizado de incerteza, garantindo rastreabilidade e padronização."
              : "We also provide spreadsheets and systems to issue calibration certificates with automated uncertainty calculation, ensuring traceability and standardization."}
          </Text>
        </Card>
      </div>
    </SectionLayout>
  );
}

