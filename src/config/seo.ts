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
        "CTLI | Consultoria ISO/IEC 17025, metrologia, pesos-padrão e calibração de balanças | RBC",
      description:
        "CTLI — Centro Tecnológico em Liderança e Inovação. Consultoria ISO/IEC 17025:2017 para laboratórios de calibração de massas e balanças, treinamento técnico (metrologia, EURAMET CG-18, incerteza), manutenção de acreditação CGCRE/INMETRO na RBC e planilhas para certificados de calibração.",
      url: "https://www.ctli.com.br/"
    },
    en: {
      title:
        "CTLI | ISO/IEC 17025 consulting, metrology, mass standards and balance calibration | RBC",
      description:
        "CTLI — Technological Center for Leadership and Innovation. ISO/IEC 17025:2017 consulting for mass and balance calibration laboratories, technical training (metrology, EURAMET CG-18, uncertainty), CGCRE/INMETRO accreditation maintenance in the RBC, and calibration certificate spreadsheets.",
      url: "https://www.ctli.com.br/en"
    }
  }
};
