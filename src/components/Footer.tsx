import { siteConfig } from "@/config/site";
import type { SupportedLang } from "@/lib/i18n";

type FooterProps = {
  lang?: SupportedLang;
};

export function Footer({ lang = "pt" }: FooterProps) {
  return (
    <footer className="border-t border-border/60 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-xs text-gray-400">
          <p className="font-medium text-gray-200">{siteConfig.name}</p>
          <p>{siteConfig.tagline[lang]}</p>
          <p>© {new Date().getFullYear()} CTLI. Todos os direitos reservados.</p>
        </div>
        <div className="space-y-1 text-xs text-gray-400">
          <p>{siteConfig.address.line1}</p>
          <p>{siteConfig.address.line2}</p>
          <p>
            E-mail:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary">
              {siteConfig.email}
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href={siteConfig.whatsappUrl} className="text-primary">
              {siteConfig.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

