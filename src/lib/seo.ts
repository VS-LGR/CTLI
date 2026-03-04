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

