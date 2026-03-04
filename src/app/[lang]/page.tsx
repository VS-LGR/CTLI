import { HeroSection } from "@/sections/home/HeroSection";
import { AboutSection } from "@/sections/home/AboutSection";
import { ServicesSection } from "@/sections/home/ServicesSection";
import { MethodologySection } from "@/sections/home/MethodologySection";
import { AuthoritySection } from "@/sections/home/AuthoritySection";
import { SocialProofSection } from "@/sections/home/SocialProofSection";
import { CertificationSection } from "@/sections/home/CertificationSection";
import { FAQSection } from "@/sections/home/FAQSection";
import { ContactSection } from "@/sections/home/ContactSection";
import { isSupportedLang, type SupportedLang } from "@/lib/i18n";

type LangPageProps = {
  params: { lang: string };
};

export default function LangHomePage({ params }: LangPageProps) {
  const lang: SupportedLang = isSupportedLang(params.lang)
    ? params.lang
    : "pt";

  return (
    <>
      <HeroSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <MethodologySection lang={lang} />
      <AuthoritySection lang={lang} />
      <SocialProofSection lang={lang} />
      <CertificationSection lang={lang} />
      <FAQSection lang={lang} />
      <ContactSection lang={lang} />
    </>
  );
}

