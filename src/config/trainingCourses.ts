import type { SupportedLang } from "@/lib/i18n";
import { trainingCategories, type TrainingCategoryId } from "@/config/trainings";

export type TrainingTrackStep = {
  title: Record<SupportedLang, string>;
  body: Record<SupportedLang, string>;
};

export type TrainingCourse = {
  slug: string;
  categoryId: TrainingCategoryId;
  title: Record<SupportedLang, string>;
  trackSteps: TrainingTrackStep[];
};

const slugByCategory: Record<TrainingCategoryId, string[]> = {
  metrologyCalibration: [
    "balance-calibration-uncertainty-cg-18",
    "balance-calibration-course",
    "measurement-uncertainty-course",
    "basic-metrology-applied-weighing"
  ],
  isoSystems: [
    "iso-iec-17025-interpretation",
    "iso-iec-17025-quality-manual",
    "iso-9001-interpretation",
    "internal-auditor-iso-systems"
  ],
  pharmaQuality: [
    "pharma-weighing-usp-41-1251",
    "quality-sampling-iso-2859-1",
    "ich-q9-quality-risk-management"
  ],
  qualityTools: [
    "proficiency-testing-courses",
    "calibration-certificate-interpretation",
    "calibration-interval-determination"
  ],
  specialModules: ["aluminium-foundry-course"]
};

function technicalTrack(title: Record<SupportedLang, string>): TrainingTrackStep[] {
  return [
    {
      title: {
        pt: "Diagnóstico e alinhamento",
        en: "Diagnostics and alignment"
      },
      body: {
        pt: `Mapeamos expectativas da equipe e do laboratório em relação a “${title.pt}”: pré-requisitos, duração sugerida e resultados que vocês precisam levar para a rotina.`,
        en: `We map your team’s and lab’s expectations for “${title.en}”: prerequisites, suggested duration, and concrete outcomes you need for day-to-day work.`
      }
    },
    {
      title: {
        pt: "Fundamentos e referências",
        en: "Foundations and references"
      },
      body: {
        pt: "Bloco teórico objetivo: normas, guias (ex.: EURAMET quando aplicável), definições e boas práticas que sustentam o que será exercitado na prática.",
        en: "Focused theory: standards, guides (e.g. EURAMET where relevant), definitions and good practices that underpin the hands-on part."
      }
    },
    {
      title: {
        pt: "Exercícios guiados",
        en: "Guided exercises"
      },
      body: {
        pt: "Atividades passo a passo com checklists, planilhas ou roteiros — sempre ancorados em situações reais de laboratório de calibração ou metrologia.",
        en: "Step-by-step work with checklists, spreadsheets or scripts — grounded in real calibration-lab and metrology scenarios."
      }
    },
    {
      title: {
        pt: "Caso prático em conjunto",
        en: "Joint practical case"
      },
      body: {
        pt: "Consolidação com um caso integrador: leitura de requisitos, decisões técnicas e registro documental, com espaço para dúvidas finas.",
        en: "Capstone case: reading requirements, technical decisions and documentation, with room for detailed Q&A."
      }
    },
    {
      title: {
        pt: "Material de apoio e próximos passos",
        en: "Takeaways and next steps"
      },
      body: {
        pt: "Entrega de referências, modelos e sugestões de aplicação imediata; canal comercial da CTLI para proposta fechada ou turma in company.",
        en: "References, templates and ideas for immediate use; CTLI’s commercial channel for a formal proposal or in-company cohort."
      }
    }
  ];
}

function isoTrack(title: Record<SupportedLang, string>): TrainingTrackStep[] {
  return [
    {
      title: {
        pt: "Contexto do sistema e do laboratório",
        en: "System and laboratory context"
      },
      body: {
        pt: `Entendimento do escopo de “${title.pt}” no seu cenário: papéis, processos críticos e encaixe com ISO/IEC 17025 ou ISO 9001 conforme o caso.`,
        en: `How “${title.en}” fits your context: roles, critical processes and alignment with ISO/IEC 17025 or ISO 9001 as applicable.`
      }
    },
    {
      title: {
        pt: "Requisitos da norma, cláusula a cláusula",
        en: "Clause-by-clause requirements"
      },
      body: {
        pt: "Leitura orientada dos requisitos, com ênfase em documentação, competência, equipamentos, traçabilidade e melhoria contínua.",
        en: "Guided reading of requirements, focusing on documentation, competence, equipment, traceability and improvement."
      }
    },
    {
      title: {
        pt: "Modelos e armadilhas comuns",
        en: "Templates and common pitfalls"
      },
      body: {
        pt: "Exemplos de registros, não conformidades típicas e como auditorias internas ou de acreditação costumam olhar cada ponto.",
        en: "Sample records, typical nonconformities and how internal or accreditation audits usually examine each area."
      }
    },
    {
      title: {
        pt: "Oficina aplicada",
        en: "Applied workshop"
      },
      body: {
        pt: "Exercícios em grupo ou individualmente: preenchimento de procedimentos, checklists de auditoria ou trechos de manual da qualidade.",
        en: "Group or solo exercises: procedures, audit checklists or quality-manual excerpts."
      }
    },
    {
      title: {
        pt: "Encerramento e continuidade",
        en: "Close-out and continuity"
      },
      body: {
        pt: "Plano de ação pós-treinamento e contato CTLI para suporte em implementação, auditoria ou acreditação.",
        en: "Post-training action plan and CTLI contact for implementation, audit or accreditation support."
      }
    }
  ];
}

function pharmaTrack(title: Record<SupportedLang, string>): TrainingTrackStep[] {
  return [
    {
      title: {
        pt: "Regulatório e contexto GxP",
        en: "Regulatory and GxP context"
      },
      body: {
        pt: `Como “${title.pt}” se relaciona com BPF, validação e expectativas de inspeção no ambiente farmacêutico.`,
        en: `How “${title.en}” relates to GMP, validation and inspection expectations in pharma.`
      }
    },
    {
      title: {
        pt: "Requisitos técnicos focados",
        en: "Focused technical requirements"
      },
      body: {
        pt: "USP, ISO 2859-1 ou ICH Q9 conforme o curso: leitura prática dos trechos mais usados em operações e QA.",
        en: "USP, ISO 2859-1 or ICH Q9 as relevant: practical reading of sections used in operations and QA."
      }
    },
    {
      title: {
        pt: "Cenários de sala limpa e produção",
        en: "Clean-room and production scenarios"
      },
      body: {
        pt: "Estudos de caso em pesagem, inspeção por amostragem ou gestão de risco aplicados a lotes, fornecedores e desvios.",
        en: "Case studies in weighing, sampling inspection or risk management for batches, suppliers and deviations."
      }
    },
    {
      title: {
        pt: "Registros e rastreabilidade",
        en: "Records and traceability"
      },
      body: {
        pt: "Boas práticas de documentação e evidências que sustentam decisões de liberação e auditorias.",
        en: "Documentation and evidence practices that support release decisions and audits."
      }
    },
    {
      title: {
        pt: "Síntese e contato comercial",
        en: "Summary and commercial follow-up"
      },
      body: {
        pt: "Checklist de adoção imediata e canal CTLI para treinamento in company ou consultoria associada.",
        en: "Adoption checklist and CTLI channel for in-company training or related consulting."
      }
    }
  ];
}

function trackForCategory(
  categoryId: TrainingCategoryId,
  title: Record<SupportedLang, string>
): TrainingTrackStep[] {
  if (categoryId === "isoSystems") return isoTrack(title);
  if (categoryId === "pharmaQuality") return pharmaTrack(title);
  return technicalTrack(title);
}

function buildCourses(): TrainingCourse[] {
  const list: TrainingCourse[] = [];
  for (const cat of trainingCategories) {
    const slugs = slugByCategory[cat.id];
    const n = cat.examples.pt.length;
    if (slugs.length !== n) {
      throw new Error(`trainingCourses: slug count mismatch for ${cat.id}`);
    }
    for (let i = 0; i < n; i++) {
      const title = { pt: cat.examples.pt[i], en: cat.examples.en[i] };
      list.push({
        slug: slugs[i],
        categoryId: cat.id,
        title,
        trackSteps: trackForCategory(cat.id, title)
      });
    }
  }
  return list;
}

export const trainingCourses: TrainingCourse[] = buildCourses();

export function getTrainingCourseBySlug(slug: string): TrainingCourse | undefined {
  return trainingCourses.find((c) => c.slug === slug);
}

export function getTrainingCoursesByCategory(
  categoryId: TrainingCategoryId
): TrainingCourse[] {
  return trainingCourses.filter((c) => c.categoryId === categoryId);
}
