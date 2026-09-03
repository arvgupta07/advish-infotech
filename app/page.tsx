import type { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { Industries } from "@/components/sections/Industries";
import { Integrations } from "@/components/sections/Integrations";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyAdvish } from "@/components/sections/WhyAdvish";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `${SITE.name} | Intelligent Operations. Scalable Growth.`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ImpactStrip />
      <WhatWeDo />
      <ServicesGrid />
      <WhyAdvish />
      <Industries />
      <Integrations />
      <Testimonials />
      <CTABanner />
    </>
  );
}
