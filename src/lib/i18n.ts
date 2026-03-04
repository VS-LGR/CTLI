export type SupportedLang = "pt" | "en";

export function isSupportedLang(value: string): value is SupportedLang {
  return value === "pt" || value === "en";
}

