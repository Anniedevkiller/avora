import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { QualitySection } from "@/components/sections/QualitySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/layout/CTABand";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <IndustriesSection />
      <HowItWorks />
      <PricingPreview />
      <QualitySection />
      <FAQSection />
      <CTABand />
    </>
  );
}
