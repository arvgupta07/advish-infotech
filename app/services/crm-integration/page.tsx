import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "CRM & Workflow Integration",
  description:
    "CRM setup, workflow automation, and integration between calling, messaging, ERP, and marketing tools.",
};

export default function CrmIntegrationPage() {
  return <ServicePageTemplate service={SERVICE_PAGES["crm-integration"]} />;
}
