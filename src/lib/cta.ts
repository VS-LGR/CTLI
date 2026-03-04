import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message: string): string {
  const base = siteConfig.whatsappBase;
  const encodedMessage = encodeURIComponent(message);
  return `${base}&text=${encodedMessage}`;
}

