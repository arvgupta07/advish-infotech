import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice AI Agents & Contact Center",
  description:
    "Inbound and outbound Voice AI agents, AI receptionists, routing, and full contact center deployment from Advish Infotech.",
};

export default function VoiceAiPage() {
  return <ServicePageTemplate service={SERVICE_PAGES["voice-ai"]} />;
}
