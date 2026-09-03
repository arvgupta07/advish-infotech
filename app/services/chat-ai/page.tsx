import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chat AI, WhatsApp & Messaging Automation",
  description:
    "Chat AI agents, WhatsApp Business automation, SMS, and multi-channel messaging unified into your CRM.",
};

export default function ChatAiPage() {
  return <ServicePageTemplate service={SERVICE_PAGES["chat-ai"]} />;
}
