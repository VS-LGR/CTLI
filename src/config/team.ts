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
      pt: "Lidera a equipe da CTLI com mais de 20 anos de experiência em metrologia, acreditação e gestão da qualidade. Atuou em projetos que contribuíram para a acreditação de dezenas de laboratórios de calibração de massas em todo o Brasil, garantindo que cada projeto de consultoria, treinamento e acreditação seja conduzido com rigor técnico e visão estratégica.",
      en: "Leads CTLI's team with more than 20 years of experience in metrology, accreditation and quality management. Has worked on projects that contributed to the accreditation of dozens of mass calibration laboratories across Brazil, ensuring each consulting, training and accreditation project is delivered with technical rigor and strategic vision."
    }
  }
];

