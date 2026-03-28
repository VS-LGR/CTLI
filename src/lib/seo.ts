import type { Metadata } from "next";
import { seoConfig } from "@/config/seo";
import type { SupportedLang } from "./i18n";

export function getHomeSeo(lang: SupportedLang): Metadata {
  const base = seoConfig.home[lang];

  return {
    title: base.title,
    description: base.description,
    openGraph: {
      title: base.title,
      description: base.description,
      url: base.url,
      type: "website"
    }
  };
}

export function getClientsPageSeo(lang: SupportedLang): Metadata {
  const base = seoConfig.clients[lang];
  return {
    title: base.title,
    description: base.description,
    openGraph: {
      title: base.title,
      description: base.description,
      url: base.url,
      type: "website"
    }
  };
}

export function getTrainingTrackSeo(
  lang: SupportedLang,
  courseTitle: string
): Metadata {
  const suffix = lang === "pt" ? "Trilha do treinamento | CTLI" : "Training track | CTLI";
  const title = `${courseTitle} — ${suffix}`;
  const description =
    lang === "pt"
      ? `Veja a trilha sugerida para o treinamento “${courseTitle}” e fale com a CTLI para turma in company ou agenda aberta.`
      : `See the suggested track for “${courseTitle}” and contact CTLI for in-company or public sessions.`;
  const baseUrl = lang === "pt" ? "https://www.ctli.com.br/pt" : "https://www.ctli.com.br/en";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
      type: "website"
    }
  };
}

