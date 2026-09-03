import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cloud & Microsoft Solutions",
  description:
    "Microsoft 365 licensing, cloud infrastructure, migration, security, and ongoing cloud management.",
};

export default function CloudMicrosoftPage() {
  return <ServicePageTemplate service={SERVICE_PAGES["cloud-microsoft"]} />;
}
