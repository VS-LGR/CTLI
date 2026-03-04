import type { SupportedLang } from "@/lib/i18n";

export type Client = {
  id: string;
  name: string;
  category: "consulting" | "accreditation" | "training" | "services";
  label: Record<SupportedLang, string>;
};

export const clients: Client[] = [
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
    id: "coca-cola-guararapes",
    name: "Coca-Cola Guararapes",
    category: "training",
    label: {
      pt: "Coca-Cola Guararapes",
      en: "Coca-Cola Guararapes"
    }
  }
];

