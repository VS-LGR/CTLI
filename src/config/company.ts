import type { SupportedLang } from "@/lib/i18n";

type Multilang = Record<SupportedLang, string>;

export const companyFacts = {
  foundedYear: 2012,
  experienceYearsClaim: 20
} as const;

/** Prudent wording aligned with official site claim on mass calibration labs. */
export const socialProofHighlight: Multilang = {
  pt: "Histórico de participação em projetos de acreditação na área de calibração de massas junto a uma parcela expressiva dos laboratórios acreditados no Brasil — números divulgados no site institucional da CTLI.",
  en: "Track record supporting accreditation projects in mass calibration alongside a significant share of accredited laboratories in Brazil — as stated on CTLI’s institutional website."
};

export const heroCopy = {
  badge: {
    pt: "Metrologia, pesos-padrão, balanças e ISO/IEC 17025",
    en: "Metrology, mass standards, balances and ISO/IEC 17025"
  },
  headline: {
    pt: "Consultoria e treinamento para laboratórios de massas e empresas de pesagem que precisam de acreditação e certificados à altura da RBC.",
    en: "Consulting and training for mass laboratories and weighing companies that need accreditation and certificates aligned with the RBC."
  },
  subline: {
    pt: "Da calibração de balanças e pesos-padrão à ISO/IEC 17025 — com consultoria presencial ou online na área de massa, treinamentos técnicos e planilhas para emissão de certificados.",
    en: "From balance and mass-standard calibration to ISO/IEC 17025 — with on-site or online consulting in mass metrology, technical training and spreadsheets for certificate issuance."
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
    pt: "Laboratórios de calibração de massas, balanças e empresas que precisam de competência comprovável perante CGCRE/INMETRO e clientes.",
    en: "Mass calibration laboratories, balances and companies that need demonstrable competence before CGCRE/INMETRO and customers."
  },
  paragraphs: [
    {
      pt: "Fundado em 2012, o Grupo CTLI reúne mais de 20 anos de experiência na implementação de normas técnicas, com foco em laboratórios de calibração de massas, pesos-padrão e balanças, e na NORMA ABNT NBR ISO/IEC 17025:2017. Apoiamos desde o diagnóstico até a manutenção da acreditação na Rede Brasileira de Calibração (RBC), com linguagem clara e entregas priorizadas.",
      en: "Founded in 2012, CTLI Group brings 20+ years of experience implementing technical standards, focused on mass calibration laboratories, mass standards and balances, and ISO/IEC 17025:2017. We support from diagnosis through maintaining accreditation in the Brazilian Calibration Network (RBC), with clear language and prioritized deliverables."
    },
    {
      pt: "Oferecemos consultoria especializada presencial e online (incluindo modalidade remota para implantação na área de massa), treinamento de alto impacto, manutenção de acreditação conforme exigências do INMETRO e soluções para emissão de certificados — planilha com preenchimento manual e automação de incerteza, ou planilha automatizada para fluxo mais rápido e padronizado.",
      en: "We provide specialized on-site and online consulting (including remote implementation support in mass metrology), high-impact training, accreditation maintenance aligned with INMETRO requirements, and certificate issuance solutions — manual spreadsheet with automated uncertainty, or a more automated spreadsheet for faster, standardized workflows."
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
    pt: "Treinamento de alto impacto, consultoria ISO/IEC 17025 (presencial ou online na área de massa), manutenção de acreditação junto ao INMETRO e planilhas para emissão de certificados de calibração de balanças.",
    en: "High-impact training, ISO/IEC 17025 consulting (on-site or online in mass metrology), accreditation maintenance with INMETRO, and spreadsheets for balance calibration certificates."
  }
} as const;
