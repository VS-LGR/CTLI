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

/** Rotas absolutas para funcionar fora da home (âncoras com /{lang}#id). */
export const navigationConfig: NavigationConfig = {
  pt: {
    items: [
      { label: "Início", href: "/pt#hero" },
      { label: "A empresa", href: "/pt#about" },
      { label: "Serviços", href: "/pt#services" },
      { label: "Treinamentos", href: "/pt#trainings" },
      { label: "Metodologia", href: "/pt#methodology" },
      { label: "Acreditação 17025", href: "/pt#certification" },
      { label: "Clientes", href: "/pt/clientes" },
      { label: "Contato", href: "/pt#contact" }
    ]
  },
  en: {
    items: [
      { label: "Home", href: "/en#hero" },
      { label: "About", href: "/en#about" },
      { label: "Services", href: "/en#services" },
      { label: "Training", href: "/en#trainings" },
      { label: "Methodology", href: "/en#methodology" },
      { label: "ISO/IEC 17025", href: "/en#certification" },
      { label: "Clients", href: "/en/clientes" },
      { label: "Contact", href: "/en#contact" }
    ]
  }
};
