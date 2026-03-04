import type { SupportedLang } from "@/lib/i18n";

type SeoEntry = {
  title: string;
  description: string;
  url: string;
};

type SeoConfig = {
  home: Record<SupportedLang, SeoEntry>;
};

export const seoConfig: SeoConfig = {
  home: {
    pt: {
      title:
        "CTLI | Consultoria ISO/IEC 17025, calibração de balanças e emissão de certificados",
      description:
        "CTLI – Centro Tecnológico em Liderança e Inovação. Consultoria especializada em NORMA ABNT NBR ISO/IEC 17025:2017, calibração de balanças, treinamento de alto impacto e emissão de certificados de calibração.",
      url: "https://www.ctli.com.br/"
    },
    en: {
      title:
        "CTLI | ISO/IEC 17025 consulting, scale calibration and calibration certificates",
      description:
        "CTLI – Technological Center for Leadership and Innovation. Specialized consulting in ISO/IEC 17025:2017, scale calibration, high-impact training and calibration certificate issuance.",
      url: "https://www.ctli.com.br/en"
    }
  }
};

