import type { SupportedLang } from "@/lib/i18n";

export type TeamMember = {
  id: string;
  name: string;
  role: Record<SupportedLang, string>;
  bio: Record<SupportedLang, string>;
};

export const teamMembers: TeamMember[] = [
  {
    id: "guilherme-matheus-rodrigues",
    name: "Guilherme Matheus Rodrigues",
    role: {
      pt: "Fundador • Gerente da Qualidade e Gerente Técnico em diversos laboratórios",
      en: "Founder • Quality Manager and Technical Manager in multiple laboratories"
    },
    bio: {
      pt: "Lidera a equipe da CTLI com foco em resultados consistentes, garantindo que cada projeto de consultoria, treinamento e acreditação seja conduzido com rigor técnico e visão estratégica.",
      en: "Leads CTLI's team with a strong focus on consistent results, ensuring each consulting, training and accreditation project is delivered with technical rigor and strategic vision."
    }
  }
];

