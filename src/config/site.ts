import type { SupportedLang } from "@/lib/i18n";

type MultilangText = Record<SupportedLang, string>;

type SiteConfig = {
  name: string;
  slogan: MultilangText;
  tagline: MultilangText;
  email: string;
  whatsappDisplay: string;
  whatsappBase: string;
  whatsappUrl: string;
  address: {
    line1: string;
    line2: string;
  };
};

const whatsappNumber = "5511976305363";
const whatsappBase = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

export const siteConfig: SiteConfig = {
  name: "CTLI Consultoria e Treinamento",
  slogan: {
    pt: "Soluções em treinamento de alto impacto e consultoria em acreditação.",
    en: "High-impact training and accreditation consulting solutions."
  },
  tagline: {
    pt: "Especialistas em NORMA ABNT NBR ISO/IEC 17025:2017, metrologia de massas, pesos-padrão, calibração de balanças e certificados na RBC.",
    en: "Experts in ISO/IEC 17025:2017, mass metrology, mass standards, balance calibration and RBC-aligned certificates."
  },
  email: "contato@ctli.com.br",
  whatsappDisplay: "(11) 97630-5363",
  whatsappBase,
  whatsappUrl: `${whatsappBase}&text=${encodeURIComponent(
    "Olá, gostaria de falar com a CTLI sobre consultoria e acreditação de laboratório."
  )}`,
  address: {
    line1: "Rua Francisco Angeline, 130 – Centro",
    line2: "Mairinque – SP • CEP 18120-000"
  }
};

