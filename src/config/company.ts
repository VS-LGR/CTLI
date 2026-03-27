import type { SupportedLang } from "@/lib/i18n";

type Multilang = Record<SupportedLang, string>;

export const companyFacts = {
  foundedYear: 2012,
  experienceYearsClaim: 20
} as const;

/** Prudent wording aligned with official site claim on mass calibration labs. */
export const socialProofHighlight: Multilang = {
  pt: "Participação relevante em projetos de acreditação na calibração de massas no Brasil — alinhado ao histórico divulgado no site da CTLI.",
  en: "Significant involvement in mass-calibration accreditation projects across Brazil — consistent with CTLI’s published track record."
};

export const heroCopy = {
  badge: {
    pt: "Metrologia, pesos-padrão, balanças e ISO/IEC 17025",
    en: "Metrology, mass standards, balances and ISO/IEC 17025"
  },
  headline: {
    pt: "Acreditação ISO/IEC 17025, metrologia de massas e certificados para laboratórios e pesagem.",
    en: "ISO/IEC 17025 accreditation, mass metrology and certificates for labs and weighing."
  },
  subline: {
    pt: "Balanças, pesos-padrão e RBC: consultoria presencial ou online, treinamento técnico e planilhas para certificados de calibração.",
    en: "Balances, mass standards and the RBC: on-site or online consulting, technical training and calibration certificate spreadsheets."
  },
  trustLine: {
    pt: "Grupo fundado em 2012, com mais de 20 anos de experiência em normas técnicas e metrologia.",
    en: "Group founded in 2012, with 20+ years of experience in technical standards and metrology."
  }
} as const;

export const heroWhatsAppMessages: Multilang = {
  pt: "Olá, gostaria de agendar um diagnóstico de acreditação ISO/IEC 17025 (área de massa / balanças) com a CTLI.",
  en: "Hello, I would like to schedule an ISO/IEC 17025 accreditation assessment (mass / balances) with CTLI."
};

export const heroSecondaryWhatsAppMessages: Multilang = {
  pt: "Olá, quero montar uma trilha de treinamento técnico (metrologia, balanças ou ISO 17025) com a CTLI.",
  en: "Hello, I want to design a technical training track (metrology, balances or ISO 17025) with CTLI."
};

export const heroCtaLabels = {
  primary: {
    pt: "Agendar diagnóstico de acreditação",
    en: "Schedule accreditation assessment"
  },
  secondary: {
    pt: "Falar sobre treinamentos",
    en: "Discuss training options"
  },
  tertiaryAnchor: {
    pt: "Ver trilhas de treinamento",
    en: "View training tracks"
  }
} as const;

export const aboutSectionCopy = {
  title: {
    pt: "CTLI: metrologia, acreditação e capacitação técnica",
    en: "CTLI: metrology, accreditation and technical training"
  },
  subtitle: {
    pt: "Quem calibra massas e balanças e precisa demonstrar competência perante CGCRE, INMETRO e clientes.",
    en: "For teams calibrating mass and balances who must demonstrate competence to CGCRE, INMETRO and customers."
  },
  paragraphs: [
    {
      pt: "Desde 2012, o Grupo CTLI soma mais de 20 anos em normas técnicas e metrologia. Foco em laboratórios de massas, pesos-padrão, balanças e na ABNT NBR ISO/IEC 17025:2017 — do diagnóstico à manutenção da acreditação na RBC.",
      en: "Since 2012, CTLI Group has 20+ years in technical standards and metrology. We focus on mass labs, mass standards, balances and ISO/IEC 17025:2017 — from diagnosis to maintaining RBC accreditation."
    },
    {
      pt: "Consultoria presencial e online (incluindo implantação na área de massa), treinamentos, manutenção de acreditação junto ao INMETRO e planilhas para certificados — manual com incerteza automatizada ou fluxo mais automatizado.",
      en: "On-site and online consulting (including mass-scope implementation), training, INMETRO-aligned accreditation maintenance, and certificate spreadsheets — manual with automated uncertainty or a more automated flow."
    }
  ] as const,
  bullets: {
    pt: [
      "Metrologia legal e científica aplicada a pesagem e massas",
      "Acreditação ISO/IEC 17025 e acompanhamento CGCRE",
      "Treinamentos técnicos (EURAMET CG-18, USP, ISO, incerteza)",
      "Ferramentas para certificados de calibração de balanças"
    ],
    en: [
      "Legal and scientific metrology applied to weighing and mass",
      "ISO/IEC 17025 accreditation and CGCRE support",
      "Technical training (EURAMET CG-18, USP, ISO, uncertainty)",
      "Tools for balance calibration certificates"
    ]
  } as const
} as const;

export const locationLine: Multilang = {
  pt: "Base em Mairinque (SP), com acesso facilitado à região metropolitana de São Paulo — atendimento em todo o território nacional.",
  en: "Based in Mairinque (SP), with convenient access to Greater São Paulo — serving clients nationwide."
};

export const servicesSectionCopy = {
  title: {
    pt: "Serviços para todo o ciclo: da capacitação ao certificado",
    en: "Services for the full cycle: from training to certificates"
  },
  subtitle: {
    pt: "Treinamento, consultoria ISO/IEC 17025 (presencial ou online em massa), manutenção de acreditação e planilhas para certificados de balanças.",
    en: "Training, ISO/IEC 17025 consulting (on-site or online in mass), accreditation maintenance and spreadsheets for balance certificates."
  }
} as const;
