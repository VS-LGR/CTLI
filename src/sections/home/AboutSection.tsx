import { SectionLayout } from "@/layout/SectionLayout";
import { Text } from "@/ui/Text";
import type { SupportedLang } from "@/lib/i18n";

type AboutSectionProps = {
  lang: SupportedLang;
};

export function AboutSection({ lang }: AboutSectionProps) {
  const title =
    lang === "pt"
      ? "Uma empresa especializada em capacitação humana e acreditação"
      : "A company specialized in human development and accreditation";

  const subtitle =
    lang === "pt"
      ? "Mais de 20 anos de experiência na implementação de normas técnicas em diferentes setores."
      : "Over 20 years of experience implementing technical standards across different sectors.";

  return (
    <SectionLayout id="about" title={title} subtitle={subtitle}>
      <div className="grid gap-8 md:grid-cols-2">
        <Text>
          {lang === "pt"
            ? "O Grupo CTLI apoia laboratórios e empresas de pesagem na implantação e manutenção de sistemas de gestão robustos, com foco na NORMA ABNT NBR ISO/IEC 17025:2017. Atuamos desde o diagnóstico até a preparação para auditorias, sempre com linguagem clara e foco em resultados."
            : "CTLI supports laboratories and weighing companies in implementing and maintaining robust management systems, with a strong focus on ISO/IEC 17025:2017. We work from diagnosis through audit preparation, using clear language and a result-oriented approach."}
        </Text>
        <Text>
          {lang === "pt"
            ? "Além da acreditação, desenvolvemos projetos em Qualidade, Meio Ambiente e Saúde e Segurança no Trabalho, sempre conectando requisitos normativos à estratégia do negócio."
            : "Beyond accreditation, we design projects in Quality, Environment and Occupational Health and Safety, always connecting standard requirements to business strategy."}
        </Text>
      </div>
    </SectionLayout>
  );
}

