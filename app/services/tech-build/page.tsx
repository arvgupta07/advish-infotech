import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Custom Tech Build",
  description:
    "Landing pages, full-stack SaaS, mobile apps, migrations, and API integrations built by Advish Infotech.",
};

export default function TechBuildPage() {
  return <ServicePageTemplate service={SERVICE_PAGES["tech-build"]} />;
}
