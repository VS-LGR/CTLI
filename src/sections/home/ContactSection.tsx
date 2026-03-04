import { SectionLayout } from "@/layout/SectionLayout";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/ui/Button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/cta";
import type { SupportedLang } from "@/lib/i18n";

type ContactSectionProps = {
  lang: SupportedLang;
};

export function ContactSection({ lang }: ContactSectionProps) {
  const title =
    lang === "pt"
      ? "Vamos falar sobre o seu laboratório ou empresa"
      : "Let’s talk about your laboratory or company";

  const subtitle =
    lang === "pt"
      ? "Envie uma mensagem ou fale agora pelo WhatsApp com um especialista da CTLI."
      : "Send a message or talk now via WhatsApp with a CTLI specialist.";

  const whatsappLabel =
    lang === "pt" ? "Falar pelo WhatsApp" : "Talk on WhatsApp";

  return (
    <SectionLayout id="contact" title={title} subtitle={subtitle}>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ContactForm lang={lang} />
        <div className="space-y-4 rounded-2xl border border-border/60 bg-black/70 p-5 text-sm text-gray-200">
          <p>
            {lang === "pt"
              ? "Preferem uma conversa direta? Utilize o botão abaixo para abrir o WhatsApp com uma mensagem inicial já preparada."
              : "Prefer a direct conversation? Use the button below to open WhatsApp with a pre-filled introductory message."}
          </p>
          <a href={buildWhatsAppUrl(whatsappLabel)}>
            <Button size="md">{whatsappLabel}</Button>
          </a>
          <p className="text-xs text-gray-400">
            {siteConfig.email} • {siteConfig.whatsappDisplay}
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}

