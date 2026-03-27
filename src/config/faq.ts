import type { SupportedLang } from "@/lib/i18n";

export type FaqItem = {
  id: string;
  question: Record<SupportedLang, string>;
  answer: Record<SupportedLang, string>;
};

export const faqItems: FaqItem[] = [
  {
    id: "iso17025-start",
    question: {
      pt: "Por onde começar para buscar a acreditação ISO/IEC 17025:2017?",
      en: "Where should we start when seeking ISO/IEC 17025:2017 accreditation?"
    },
    answer: {
      pt: "O primeiro passo é mapear seus processos críticos de medição (incluindo calibração de balanças e rastreabilidade de pesos-padrão), analisar a situação atual frente aos requisitos da norma e definir um plano realista de implementação. A CTLI apoia desde o diagnóstico até a preparação para as avaliações da CGCRE/INMETRO na RBC.",
      en: "The first step is to map your critical measurement processes (including balance calibration and mass-standard traceability), assess your current situation against the standard requirements and define a realistic implementation plan. CTLI supports you from diagnosis through preparation for CGCRE/INMETRO assessments under the RBC."
    }
  },
  {
    id: "online-consulting-mass",
    question: {
      pt: "A consultoria online atende implantação da ISO/IEC 17025 na área de massa?",
      en: "Does online consulting cover ISO/IEC 17025 implementation in mass metrology?"
    },
    answer: {
      pt: "Sim. A CTLI oferece consultoria remota focada na área de massa (calibração de balanças e pesos-padrão), com sessões orientadas, entrega de modelos de procedimentos e registros e suporte contínuo por e-mail, telefone e acesso remoto quando aplicável — ideal quando o custo de deslocamento inviabiliza o presencial.",
      en: "Yes. CTLI provides remote consulting focused on mass metrology (balance and mass-standard calibration), with guided sessions, delivery of procedure and record templates, and ongoing support by email, phone and remote access when appropriate — ideal when travel costs make on-site work difficult."
    }
  },
  {
    id: "maintenance-vs-audit",
    question: {
      pt: "Manutenção de acreditação é só documentação ou inclui apoio em auditorias?",
      en: "Is accreditation maintenance only documentation or does it include audit support?"
    },
    answer: {
      pt: "O escopo típico inclui gestão de documentação, auditorias internas, ações corretivas, qualificação de fornecedores e alinhamento às exigências do INMETRO. Conforme a necessidade, a CTLI pode apoiar também na preparação e condução de momentos críticos frente à CGCRE, sempre com foco em evidências técnicas e conformidade contínua.",
      en: "The typical scope includes documentation management, internal audits, corrective actions, supplier qualification and alignment with INMETRO requirements. As needed, CTLI can also support preparation and handling of critical moments with CGCRE, always focusing on technical evidence and sustained compliance."
    }
  },
  {
    id: "certificate-spreadsheets",
    question: {
      pt: "O que incluem as planilhas para emissão de certificados de calibração de balanças?",
      en: "What do the balance calibration certificate spreadsheets include?"
    },
    answer: {
      pt: "Há opções com preenchimento manual e automação do cálculo de incerteza, e versão mais automatizada para agilizar a emissão padronizada. Em geral incluem cadastros de clientes, instrumentos e pesos-padrão, controle de periodicidade e modelo alinhado aos requisitos da NBR ISO/IEC 17025 — com material de apoio para rastreabilidade e boas práticas. Detalhes exatos variam conforme o produto contratado.",
      en: "Options include manual entry with automated uncertainty calculation, and a more automated version for faster standardized issuance. They typically cover client, instrument and mass-standard records, periodicity tracking and layouts aligned with ISO/IEC 17025 — plus supporting material on traceability and good practices. Exact scope depends on the purchased product."
    }
  },
  {
    id: "in-company-training",
    question: {
      pt: "Como contratar treinamento in-company?",
      en: "How do we book in-company training?"
    },
    answer: {
      pt: "Envie pelo formulário ou WhatsApp o número de participantes, cidade/modalidade (presencial ou online) e temas desejados (por exemplo calibração EURAMET CG-18, ISO 17025, USP 41/1251). A CTLI retorna com proposta, carga horária e logística. Para alguns cursos há número mínimo de participantes.",
      en: "Use the contact form or WhatsApp with participant count, location/mode (on-site or online) and desired topics (e.g. EURAMET CG-18 calibration, ISO 17025, USP 41/1251). CTLI will reply with a proposal, duration and logistics. Some courses require a minimum number of participants."
    }
  },
  {
    id: "timeline-implementation",
    question: {
      pt: "Quanto tempo leva para implantar a ISO/IEC 17025 em um laboratório de massas?",
      en: "How long does ISO/IEC 17025 implementation take for a mass laboratory?"
    },
    answer: {
      pt: "Depende do estágio atual do laboratório, do escopo de calibração, da maturidade documental e da disponibilidade da equipe. Laboratórios mais estruturados podem evoluir mais rápido; outros precisam de mais tempo para métodos, equipamentos e proficiência. A CTLI trabalha com plano faseado e marcos realistas após o diagnóstico inicial.",
      en: "It depends on the laboratory’s current stage, calibration scope, documentation maturity and team availability. More mature labs can move faster; others need more time for methods, equipment and proficiency. CTLI uses a phased plan with realistic milestones after the initial diagnosis."
    }
  }
];
