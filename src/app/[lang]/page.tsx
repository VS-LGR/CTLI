import type { Metadata } from "next";
import { HeroSection } from "@/sections/home/HeroSection";
import { AboutSection } from "@/sections/home/AboutSection";
import { ServicesSection } from "@/sections/home/ServicesSection";
import { TrainingsSection } from "@/sections/home/TrainingsSection";
import { MethodologySection } from "@/sections/home/MethodologySection";
import { AuthoritySection } from "@/sections/home/AuthoritySection";
import { SocialProofSection } from "@/sections/home/SocialProofSection";
import { CertificationSection } from "@/sections/home/CertificationSection";
import { FAQSection } from "@/sections/home/FAQSection";
import { ContactSection } from "@/sections/home/ContactSection";
import { isSupportedLang, type SupportedLang } from "@/lib/i18n";
import { getHomeSeo } from "@/lib/seo";

type LangPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params
}: LangPageProps): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang: SupportedLang = isSupportedLang(langParam) ? langParam : "pt";
  return getHomeSeo(lang);
}

export default async function LangHomePage({ params }: LangPageProps) {
  const { lang: langParam } = await params;
  const lang: SupportedLang = isSupportedLang(langParam) ? langParam : "pt";

  return (
    <>
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <TrainingsSection lang={lang} />
      <MethodologySection lang={lang} />
      <AuthoritySection lang={lang} />
      <SocialProofSection lang={lang} />
      <CertificationSection lang={lang} />
      <FAQSection lang={lang} />
      <ContactSection lang={lang} />
    </>
  );
}

