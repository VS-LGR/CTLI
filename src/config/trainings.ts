import type { SupportedLang } from "@/lib/i18n";

export type TrainingCategoryId =
  | "metrologyCalibration"
  | "isoSystems"
  | "pharmaQuality"
  | "qualityTools"
  | "specialModules";

export type TrainingCategory = {
  id: TrainingCategoryId;
  title: Record<SupportedLang, string>;
  description: Record<SupportedLang, string>;
  examples: Record<SupportedLang, string[]>;
};

export const trainingCategories: TrainingCategory[] = [
  {
    id: "metrologyCalibration",
    title: {
      pt: "Metrologia e Calibração de Balanças",
      en: "Metrology and Balance Calibration"
    },
    description: {
      pt: "Capacitações alinhadas a guias reconhecidos (como EURAMET Calibration Guide n.º 18) para rastreabilidade, pesos-padrão, calibração não automática e incerteza de medição em balanças.",
      en: "Training aligned with recognized guides (such as EURAMET Calibration Guide No. 18) for traceability, mass standards, non-automatic weighing instrument calibration and measurement uncertainty."
    },
    examples: {
      pt: [
        "Calibração de Balanças e Cálculo de Incerteza (CG-18)",
        "Curso de Calibração de Balanças",
        "Curso de Incerteza de Medição",
        "Metrologia Básica e Metrologia Aplicada à Pesagem"
      ],
      en: [
        "Balance Calibration and Uncertainty Calculation (CG-18)",
        "Balance Calibration Course",
        "Measurement Uncertainty Course",
        "Basic Metrology and Applied Weighing Metrology"
      ]
    }
  },
  {
    id: "isoSystems",
    title: {
      pt: "Normas ISO e Sistemas de Gestão",
      en: "ISO Standards and Management Systems"
    },
    description: {
      pt: "Formações para implementação, interpretação e manutenção de sistemas de gestão — com foco em ISO/IEC 17025:2017 para laboratórios — e normas ISO 9001, ISO 14001, auditoria interna e documentação.",
      en: "Training for implementation, interpretation and maintenance of management systems — with emphasis on ISO/IEC 17025:2017 for laboratories — plus ISO 9001, ISO 14001, internal auditing and documentation."
    },
    examples: {
      pt: [
        "Interpretação da ISO/IEC 17025:2017",
        "Elaboração do Manual da Qualidade ISO/IEC 17025",
        "Interpretação da NBR ISO 9001",
        "Formação de Auditores Internos ISO"
      ],
      en: [
        "ISO/IEC 17025:2017 Interpretation",
        "ISO/IEC 17025 Quality Manual Development",
        "ISO 9001 Interpretation",
        "Internal Auditor Training for ISO Systems"
      ]
    }
  },
  {
    id: "pharmaQuality",
    title: {
      pt: "Indústria Farmacêutica e Qualidade",
      en: "Pharmaceutical Industry and Quality"
    },
    description: {
      pt: "Treinamentos para pesagem, inspeção por amostragem e gestão de risco aplicados a ambientes farmacêuticos regulados.",
      en: "Training on weighing, sampling inspection and risk management applied to regulated pharmaceutical environments."
    },
    examples: {
      pt: [
        "Boas Práticas de Pesagem na Indústria Farmacêutica – USP 41 e 1251",
        "Inspeção da Qualidade por Amostragem – ISO 2859-1",
        "Gerenciamento de Risco da Qualidade ICH Q9"
      ],
      en: [
        "Good Weighing Practices in the Pharmaceutical Industry – USP 41 and 1251",
        "Quality Inspection by Sampling – ISO 2859-1",
        "Quality Risk Management ICH Q9"
      ]
    }
  },
  {
    id: "qualityTools",
    title: {
      pt: "Ferramentas da Qualidade e Ensaios de Proficiência",
      en: "Quality Tools and Proficiency Testing"
    },
    description: {
      pt: "Cursos voltados a estatística aplicada, ensaios de proficiência e verificação de desempenho de laboratórios.",
      en: "Courses focused on applied statistics, proficiency testing and evaluation of laboratory performance."
    },
    examples: {
      pt: [
        "Cursos de Ensaios de Proficiência",
        "Interpretação de Certificado de Calibração",
        "Determinação da Periodicidade entre Calibrações"
      ],
      en: [
        "Proficiency Testing Courses",
        "Calibration Certificate Interpretation",
        "Determining Calibration Interval"
      ]
    }
  },
  {
    id: "specialModules",
    title: {
      pt: "Módulos Especializados e Fundição",
      en: "Specialized Modules and Foundry"
    },
    description: {
      pt: "Conteúdos customizados para setores específicos que exigem domínio técnico aprofundado.",
      en: "Tailored content for specific sectors that require deep technical expertise."
    },
    examples: {
      pt: ["Curso para Fundição de Alumínio"],
      en: ["Aluminium Foundry Course"]
    }
  }
];

