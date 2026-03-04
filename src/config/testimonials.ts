import type { SupportedLang } from "@/lib/i18n";

export type Testimonial = {
  id: string;
  client: string;
  role: string;
  quote: Record<SupportedLang, string>;
};

export const testimonials: Testimonial[] = [
  {
    id: "fna-balancas",
    client: "FNA Balanças",
    role: "Diretor",
    quote: {
      pt: "Realizamos treinamentos com a CTLI abordando ISO 17025, boas práticas de pesagem, cálculo de incerteza e implantação da ISO 17025. Somos assessorados pela CTLI desde 2007 e, desde então, sempre obtivemos ótimos resultados nas avaliações da CGCRE.",
      en: "We carried out trainings with CTLI covering ISO 17025, good weighing practices, uncertainty calculation and ISO 17025 implementation. CTLI has been advising us since 2007 and we have consistently achieved excellent results in CGCRE assessments."
    }
  }
];

