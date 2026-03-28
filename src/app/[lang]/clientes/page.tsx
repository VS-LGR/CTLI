import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ClientsPageContent } from "@/sections/clients/ClientsPageContent";
import { isSupportedLang, type SupportedLang } from "@/lib/i18n";
import { getClientsPageSeo } from "@/lib/seo";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang: SupportedLang = isSupportedLang(langParam) ? langParam : "pt";
  return getClientsPageSeo(lang);
}

export default async function ClientesPage({ params }: PageProps) {
  const { lang: langParam } = await params;
  if (!isSupportedLang(langParam)) notFound();
  const lang = langParam;

  return <ClientsPageContent lang={lang} />;
}
