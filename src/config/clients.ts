import type { SupportedLang } from "@/lib/i18n";

export type Client = {
  id: string;
  name: string;
  category: "consulting" | "accreditation" | "training" | "services";
  label: Record<SupportedLang, string>;
};

export const clients: Client[] = [
  {
    id: "votre-balancas",
    name: "Votre Balanças",
    category: "accreditation",
    label: {
      pt: "Votre Balanças",
      en: "Votre Balanças"
    }
  },
  {
    id: "d-and-d-instrumentos",
    name: "D&D Instrumentos Laboratoriais",
    category: "accreditation",
    label: {
      pt: "D&D Instrumentos Laboratoriais",
      en: "D&D Instrumentos Laboratoriais"
    }
  },
  {
    id: "fna-balancas",
    name: "FNA Balanças",
    category: "accreditation",
    label: {
      pt: "FNA Balanças",
      en: "FNA Balanças"
    }
  },
  {
    id: "brasil-calibracoes",
    name: "Brasil Calibrações",
    category: "accreditation",
    label: {
      pt: "Brasil Calibrações",
      en: "Brasil Calibrações"
    }
  },
  {
    id: "lider-balancas",
    name: "Líder Balanças",
    category: "accreditation",
    label: {
      pt: "Líder Balanças",
      en: "Líder Balanças"
    }
  },
  {
    id: "balancas-apollo",
    name: "Balanças Apollo",
    category: "accreditation",
    label: {
      pt: "Balanças Apollo",
      en: "Balanças Apollo"
    }
  },
  {
    id: "gero",
    name: "Gero",
    category: "accreditation",
    label: {
      pt: "Gero",
      en: "Gero"
    }
  },
  {
    id: "balancas-genova",
    name: "Balanças Genova",
    category: "accreditation",
    label: {
      pt: "Balanças Genova",
      en: "Balanças Genova"
    }
  },
  {
    id: "sumatec",
    name: "Sumatec",
    category: "accreditation",
    label: {
      pt: "Sumatec",
      en: "Sumatec"
    }
  },
  {
    id: "balancas-jundiai",
    name: "Balanças Jundiai",
    category: "accreditation",
    label: {
      pt: "Balanças Jundiai",
      en: "Balanças Jundiai"
    }
  },
  {
    id: "brancotec-balancas",
    name: "Brancotec Balanças",
    category: "accreditation",
    label: {
      pt: "Brancotec Balanças",
      en: "Brancotec Balanças"
    }
  },
  {
    id: "kalibra",
    name: "Kalibra",
    category: "accreditation",
    label: {
      pt: "Kalibra",
      en: "Kalibra"
    }
  },
  {
    id: "digi-tron",
    name: "Digi Tron",
    category: "accreditation",
    label: {
      pt: "Digi Tron",
      en: "Digi Tron"
    }
  },
  {
    id: "balvag-balancas",
    name: "Balvag Balanças",
    category: "accreditation",
    label: {
      pt: "Balvag Balanças",
      en: "Balvag Balanças"
    }
  },
  {
    id: "qualipeso",
    name: "Qualipeso",
    category: "accreditation",
    label: {
      pt: "Qualipeso",
      en: "Qualipeso"
    }
  },
  {
    id: "global-balancas",
    name: "Global Balanças",
    category: "accreditation",
    label: {
      pt: "Global Balanças",
      en: "Global Balanças"
    }
  },
  {
    id: "soropeso-instrumentos",
    name: "Soropeso Instrumentos",
    category: "accreditation",
    label: {
      pt: "Soropeso Instrumentos",
      en: "Soropeso Instrumentos"
    }
  },
  {
    id: "bortoto-solucoes",
    name: "Bortoto Soluções",
    category: "accreditation",
    label: {
      pt: "Bortoto Soluções",
      en: "Bortoto Soluções"
    }
  },
  {
    id: "unical-calibracao",
    name: "Unical Calibração",
    category: "accreditation",
    label: {
      pt: "Unical Calibração",
      en: "Unical Calibração"
    }
  },
  {
    id: "nts-servicos",
    name: "NTS Serviços",
    category: "accreditation",
    label: {
      pt: "NTS Serviços",
      en: "NTS Serviços"
    }
  },
  {
    id: "ctm",
    name: "CTM",
    category: "accreditation",
    label: {
      pt: "CTM",
      en: "CTM"
    }
  },
  {
    id: "analogic-balancas",
    name: "Analógic Balanças",
    category: "accreditation",
    label: {
      pt: "Analógic Balanças",
      en: "Analógic Balanças"
    }
  },
  {
    id: "prestechnica-balancas",
    name: "Prestécnica Balanças",
    category: "accreditation",
    label: {
      pt: "Prestécnica Balanças",
      en: "Prestécnica Balanças"
    }
  },
  {
    id: "balancas-gerais",
    name: "Balanças Gerais",
    category: "accreditation",
    label: {
      pt: "Balanças Gerais",
      en: "Balanças Gerais"
    }
  },
  {
    id: "imteb",
    name: "IMTEB",
    category: "accreditation",
    label: {
      pt: "IMTEB",
      en: "IMTEB"
    }
  },
  {
    id: "rgd-instrumentos",
    name: "RGD Instrumentos",
    category: "accreditation",
    label: {
      pt: "RGD Instrumentos",
      en: "RGD Instrumentos"
    }
  },
  {
    id: "qualitech",
    name: "Qualitech",
    category: "accreditation",
    label: {
      pt: "Qualitech",
      en: "Qualitech"
    }
  },
  {
    id: "balancas-marilia",
    name: "Balanças Marilia",
    category: "accreditation",
    label: {
      pt: "Balanças Marilia",
      en: "Balanças Marilia"
    }
  },
  {
    id: "equilibrio-precisao",
    name: "Equilibrio Precisão",
    category: "accreditation",
    label: {
      pt: "Equilibrio Precisão",
      en: "Equilibrio Precisão"
    }
  },
  {
    id: "balancas-vinhedo",
    name: "Balanças Vinhedo",
    category: "accreditation",
    label: {
      pt: "Balanças Vinhedo",
      en: "Balanças Vinhedo"
    }
  },
  {
    id: "calltec",
    name: "CallTec Assistência Técnica de Balanças",
    category: "accreditation",
    label: {
      pt: "CallTec Assistência Técnica de Balanças",
      en: "CallTec Assistência Técnica de Balanças"
    }
  },
  {
    id: "balancas-ekilibra",
    name: "Balanças Ekilibra",
    category: "accreditation",
    label: {
      pt: "Balanças Ekilibra",
      en: "Balanças Ekilibra"
    }
  },
  {
    id: "meta-calibracoes",
    name: "Meta Calibrações",
    category: "accreditation",
    label: {
      pt: "Meta Calibrações",
      en: "Meta Calibrações"
    }
  },
  {
    id: "protec-balancas",
    name: "Protec Balanças",
    category: "accreditation",
    label: {
      pt: "Protec Balanças",
      en: "Protec Balanças"
    }
  },
  {
    id: "owtech-balancas",
    name: "Owtech Balanças",
    category: "accreditation",
    label: {
      pt: "Owtech Balanças",
      en: "Owtech Balanças"
    }
  },
  // Prestação de serviços
  {
    id: "labmetro",
    name: "Labmetro",
    category: "services",
    label: {
      pt: "Labmetro",
      en: "Labmetro"
    }
  },
  {
    id: "ofag",
    name: "OFAG",
    category: "services",
    label: {
      pt: "OFAG",
      en: "OFAG"
    }
  },
  {
    id: "latem",
    name: "Latem Recuperação de Metais",
    category: "services",
    label: {
      pt: "Latem Recuperação de Metais",
      en: "Latem Recuperação de Metais"
    }
  },
  {
    id: "exato-balancas-maquinas",
    name: "Exato Balanças e Maquinas",
    category: "services",
    label: {
      pt: "Exato Balanças e Maquinas",
      en: "Exato Balanças e Maquinas"
    }
  },
  {
    id: "hlp-balancas",
    name: "HLP Balanças e Automação",
    category: "services",
    label: {
      pt: "HLP Balanças e Automação",
      en: "HLP Balanças e Automação"
    }
  },
  {
    id: "celmi",
    name: "Celmi Tecnologia em Pesagem",
    category: "services",
    label: {
      pt: "Celmi Tecnologia em Pesagem",
      en: "Celmi Tecnologia em Pesagem"
    }
  },
  {
    id: "peso-forte",
    name: "Peso Forte Balanças",
    category: "services",
    label: {
      pt: "Peso Forte Balanças",
      en: "Peso Forte Balanças"
    }
  },
  {
    id: "sv-magazine",
    name: "SV Magazine",
    category: "services",
    label: {
      pt: "SV Magazine",
      en: "SV Magazine"
    }
  },
  {
    id: "trevo-calibracoes",
    name: "Trevo Calibrações",
    category: "services",
    label: {
      pt: "Trevo Calibrações",
      en: "Trevo Calibrações"
    }
  },
  {
    id: "astebal-balancas",
    name: "Astebal Balanças",
    category: "services",
    label: {
      pt: "Astebal Balanças",
      en: "Astebal Balanças"
    }
  },
  {
    id: "vextec",
    name: "Vextec Edificencia em Soluções",
    category: "services",
    label: {
      pt: "Vextec Edificencia em Soluções",
      en: "Vextec Edificencia em Soluções"
    }
  },
  {
    id: "balancas-e-cia",
    name: "Balanças e Cia",
    category: "services",
    label: {
      pt: "Balanças e Cia",
      en: "Balanças e Cia"
    }
  },
  // Treinamentos
  {
    id: "centro-tecnologico-marinha",
    name: "Centro Tecnológico da Marinha SP",
    category: "training",
    label: {
      pt: "Centro Tecnológico da Marinha SP",
      en: "Navy Technology Center – SP"
    }
  },
  {
    id: "sabesp",
    name: "SABESP",
    category: "training",
    label: {
      pt: "SABESP",
      en: "SABESP"
    }
  },
  {
    id: "vanderlande",
    name: "Vanderlande",
    category: "training",
    label: {
      pt: "Vanderlande",
      en: "Vanderlande"
    }
  },
  {
    id: "bio-extratus",
    name: "Bio Extratus",
    category: "training",
    label: {
      pt: "Bio Extratus",
      en: "Bio Extratus"
    }
  },
  {
    id: "louis-dreyfus",
    name: "Louis Dreyfus Commodities",
    category: "training",
    label: {
      pt: "Louis Dreyfus Commodities",
      en: "Louis Dreyfus Commodities"
    }
  },
  {
    id: "coca-cola-guararapes",
    name: "Coca-Cola Guararapes",
    category: "training",
    label: {
      pt: "Coca-Cola Guararapes",
      en: "Coca-Cola Guararapes"
    }
  }
];

