import type { SupportedLang } from "@/lib/i18n";

export type ServiceId =
  | "highImpactTraining"
  | "specializedConsulting"
  | "isoImplementation"
  | "accreditationMaintenance"
  | "certificateIssuance"
  | "technicalProjects";

export type Service = {
  id: ServiceId;
  title: Record<SupportedLang, string>;
  description: Record<SupportedLang, string>;
  highlights: Record<SupportedLang, string[]>;
};

export const services: Service[] = [
  {
    id: "highImpactTraining",
    title: {
      pt: "Treinamento de Alto Impacto",
      en: "High-Impact Training"
    },
    description: {
      pt: "Programas focados em resultados, alinhados às normas técnicas e à realidade dos laboratórios e empresas de pesagem.",
      en: "Result-oriented training aligned with technical standards and the reality of laboratories and weighing companies."
    },
    highlights: {
      pt: [
        "Conteúdo prático aplicado ao dia a dia",
        "Ênfase em ISO/IEC 17025 e boas práticas de pesagem",
        "Turmas in-company ou abertas"
      ],
      en: [
        "Practical content for day-to-day operations",
        "Focus on ISO/IEC 17025 and good weighing practices",
        "In-company or open classes"
      ]
    }
  },
  {
    id: "isoImplementation",
    title: {
      pt: "Implantação e Acreditação ISO/IEC 17025",
      en: "ISO/IEC 17025 Implementation and Accreditation"
    },
    description: {
      pt: "Apoio completo para planejar, implementar e evidenciar a competência técnica exigida pela ISO/IEC 17025.",
      en: "End-to-end support to plan, implement and demonstrate the technical competence required by ISO/IEC 17025."
    },
    highlights: {
      pt: [
        "Diagnóstico do laboratório e plano de implantação",
        "Desenho do sistema de gestão e da documentação técnica",
        "Preparação para avaliações da CGCRE/INMETRO"
      ],
      en: [
        "Laboratory diagnosis and implementation roadmap",
        "Design of management system and technical documentation",
        "Preparation for CGCRE/INMETRO assessments"
      ]
    }
  },
  {
    id: "specializedConsulting",
    title: {
      pt: "Consultoria Especializada",
      en: "Specialized Consulting"
    },
    description: {
      pt: "Consultoria para implementação, adequação e melhoria de sistemas de gestão em laboratórios e empresas de pesagem.",
      en: "Consulting for implementation and improvement of management systems in laboratories and weighing companies."
    },
    highlights: {
      pt: [
        "Mapeamento de processos críticos",
        "Apoio em auditorias internas e externas",
        "Planos de ação orientados a resultados"
      ],
      en: [
        "Critical process mapping",
        "Support during internal and external audits",
        "Result-driven action plans"
      ]
    }
  },
  {
    id: "accreditationMaintenance",
    title: {
      pt: "Manutenção de Acreditação",
      en: "Accreditation Maintenance"
    },
    description: {
      pt: "Sistema estruturado para manter a conformidade com a NORMA ABNT NBR ISO/IEC 17025:2017.",
      en: "Structured system to maintain compliance with ISO/IEC 17025:2017."
    },
    highlights: {
      pt: [
        "Gestão de documentação e registros",
        "Acompanhamento de ações corretivas",
        "Atualização contínua frente às exigências do INMETRO"
      ],
      en: [
        "Documentation and records management",
        "Corrective action follow-up",
        "Continuous updates to meet INMETRO requirements"
      ]
    }
  },
  {
    id: "certificateIssuance",
    title: {
      pt: "Emissão de Certificados de Calibração",
      en: "Calibration Certificate Issuance"
    },
    description: {
      pt: "Planilhas e sistemas que automatizam cálculos de incerteza e padronizam certificados de calibração.",
      en: "Spreadsheets and systems that automate uncertainty calculations and standardize calibration certificates."
    },
    highlights: {
      pt: [
        "Cálculo automatizado de incerteza",
        "Emissão rápida e padronizada",
        "Redução de erros manuais"
      ],
      en: [
        "Automated uncertainty calculation",
        "Fast, standardized issuance",
        "Reduced manual errors"
      ]
    }
  },
  {
    id: "technicalProjects",
    title: {
      pt: "Projetos em Qualidade, Meio Ambiente e SST",
      en: "Projects in Quality, Environment and OHS"
    },
    description: {
      pt: "Projetos técnicos sob medida para integrar qualidade, meio ambiente e segurança do trabalho à estratégia do negócio.",
      en: "Tailored technical projects to align quality, environment and occupational health and safety with business strategy."
    },
    highlights: {
      pt: [
        "Sistemas de gestão integrados",
        "Mapeamento de riscos e controles operacionais",
        "Adequação a requisitos legais e normativos"
      ],
      en: [
        "Integrated management systems",
        "Risk mapping and operational controls",
        "Compliance with legal and standard requirements"
      ]
    }
  }
];

