import type { SupportedLang } from "@/lib/i18n";

type NavItem = {
  label: string;
  href: string;
};

type NavigationConfig = Record<
  SupportedLang,
  {
    items: NavItem[];
  }
>;

export const navigationConfig: NavigationConfig = {
  pt: {
    items: [
      { label: "Início", href: "#hero" },
      { label: "A empresa", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Acreditação 17025", href: "#certification" },
      { label: "Clientes", href: "#clients" },
      { label: "Contato", href: "#contact" }
    ]
  },
  en: {
    items: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "ISO/IEC 17025", href: "#certification" },
      { label: "Clients", href: "#clients" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

