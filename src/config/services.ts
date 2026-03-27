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
      pt: "Capacitação técnica para equipes que precisam aplicar normas e metrologia no dia a dia: ISO/IEC 17025, calibração de balanças, incerteza de medição, boas práticas de pesagem e normas correlatas.",
      en: "Technical training for teams that must apply standards and metrology in daily work: ISO/IEC 17025, balance calibration, measurement uncertainty, good weighing practices and related standards."
    },
    highlights: {
      pt: [
        "Metrologia e calibração alinhadas a guias como o EURAMET CG-18",
        "Turmas presenciais, online ou in-company",
        "Foco em resultados auditáveis e na competência do laboratório"
      ],
      en: [
        "Metrology and calibration aligned with guides such as EURAMET CG-18",
        "On-site, online or in-company classes",
        "Focus on auditable results and laboratory competence"
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
      pt: "Apoio completo para laboratórios de ensaio e calibração — com ênfase em massas, balanças e pesos-padrão — planejarem, implementarem e demonstrarem competência técnica perante a CGCRE/INMETRO na RBC.",
      en: "End-to-end support for testing and calibration laboratories — with emphasis on mass, balances and mass standards — to plan, implement and demonstrate technical competence before CGCRE/INMETRO under the RBC."
    },
    highlights: {
      pt: [
        "Diagnóstico do laboratório e roteiro até a acreditação",
        "Sistema de gestão, métodos e registro de evidências técnicas",
        "Preparação para avaliações e desafios típicos da área de massa"
      ],
      en: [
        "Laboratory diagnosis and roadmap to accreditation",
        "Management system, methods and technical evidence records",
        "Preparation for assessments and typical mass-metrology challenges"
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
      pt: "Consultoria presencial ou online para transformar requisitos normativos em processos eficientes: da pesagem industrial a laboratórios acreditados, com foco em metrologia, qualidade e continuidade de negócio.",
      en: "On-site or online consulting to turn standard requirements into efficient processes: from industrial weighing to accredited laboratories, focusing on metrology, quality and business continuity."
    },
    highlights: {
      pt: [
        "Modalidade remota para implantação na área de massa (ISO 17025)",
        "Mapeamento de riscos e priorização de ações",
        "Apoio em auditorias internas e interação com partes interessadas"
      ],
      en: [
        "Remote mode for mass-metrology ISO 17025 implementation",
        "Risk mapping and action prioritization",
        "Support during internal audits and stakeholder interactions"
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
      pt: "Programa estruturado para manter a conformidade com a NORMA ABNT NBR ISO/IEC 17025:2017 e com as exigências do INMETRO após a concessão da acreditação.",
      en: "Structured program to maintain compliance with ISO/IEC 17025:2017 and INMETRO requirements after accreditation is granted."
    },
    highlights: {
      pt: [
        "Gestão de documentação, auditorias internas e ações corretivas",
        "Qualificação de fornecedores e atualização técnica contínua",
        "Alinhamento às mudanças interpretativas e regulatórias da CGCRE"
      ],
      en: [
        "Documentation management, internal audits and corrective actions",
        "Supplier qualification and ongoing technical updates",
        "Alignment with CGCRE regulatory and interpretive changes"
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
      pt: "Planilhas e fluxos para emissão de certificados de calibração de balanças com apoio à rastreabilidade e à NBR ISO/IEC 17025 — incluindo opção manual com automação de incerteza e versão mais automatizada para agilidade.",
      en: "Spreadsheets and workflows for balance calibration certificate issuance supporting traceability and ISO/IEC 17025 — including manual entry with automated uncertainty and a more automated version for speed."
    },
    highlights: {
      pt: [
        "Cadastros de clientes, balanças, pesos-padrão e periodicidade",
        "Cálculo de incerteza com menor retrabalho manual",
        "Layout e campos pensados para laboratórios da RBC"
      ],
      en: [
        "Records for clients, balances, mass standards and periodicity",
        "Uncertainty calculation with less manual rework",
        "Layouts and fields designed for RBC-oriented laboratories"
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
      pt: "Projetos integrados quando a estratégia da empresa exige combinar acreditação técnica com ISO 9001, ISO 14001, segurança do trabalho ou outras bases normativas.",
      en: "Integrated projects when strategy requires combining technical accreditation with ISO 9001, ISO 14001, occupational safety or other standard frameworks."
    },
    highlights: {
      pt: [
        "Sistemas de gestão integrados ao laboratório ou à operação",
        "Conformidade legal e melhoria contínua",
        "Soluções sob medida para cada realidade"
      ],
      en: [
        "Management systems integrated with laboratory or operations",
        "Legal compliance and continuous improvement",
        "Tailored solutions for each context"
      ]
    }
  }
];
