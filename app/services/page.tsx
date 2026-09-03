import type { Metadata } from "next";
import { CardLink } from "@/components/ui/Card";
import { FadeUp } from "@/components/ui/FadeUp";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";
import { SERVICE_PAGES, SERVICE_SUMMARIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "We cover the full stack — from AI agents and CRM to cloud infrastructure and custom software builds.",
};

const extraCopy: Record<string, { long: string; bullets: string[] }> = {
  "Contact Center Solutions": {
    long: "We design the floor, the routing, and the reporting — not just a dialer. Agent queues, escalation, call tracking, and productivity dashboards sit on the same stack as Voice AI so humans and machines share one operating picture.",
    bullets: [
      "End-to-end contact center setup",
      "Intent-based agent routing",
      "Call tracking and quality scoring",
      "Escalation flows to specialists",
      "Productivity and SLA dashboards",
    ],
  },
  "/services/voice-ai": {
    long: SERVICE_PAGES["voice-ai"].overview,
    bullets: SERVICE_PAGES["voice-ai"].capabilities.slice(0, 5),
  },
  "/services/chat-ai": {
    long: SERVICE_PAGES["chat-ai"].overview,
    bullets: SERVICE_PAGES["chat-ai"].capabilities.slice(0, 5),
  },
  "/services/crm-integration": {
    long: SERVICE_PAGES["crm-integration"].overview,
    bullets: SERVICE_PAGES["crm-integration"].capabilities.slice(0, 5),
  },
  "/services/tech-build": {
    long: SERVICE_PAGES["tech-build"].overview,
    bullets: SERVICE_PAGES["tech-build"].capabilities.slice(0, 5),
  },
  "/services/cloud-microsoft": {
    long: SERVICE_PAGES["cloud-microsoft"].overview,
    bullets: SERVICE_PAGES["cloud-microsoft"].capabilities.slice(0, 5),
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <FadeUp>
        <h1 className="font-display text-4xl font-bold md:text-5xl">Our Services</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          We cover the full stack — from AI agents and CRM to cloud infrastructure
          and custom software builds.
        </p>
      </FadeUp>
      <div className="mt-12 divide-y divide-line">
        {SERVICE_SUMMARIES.map((service, index) => {
          const extra = extraCopy[service.title] ?? extraCopy[service.href];
          return (
            <FadeUp key={service.title} delayMs={index * 70}>
              <CardLink href={service.href} className="py-10 md:flex md:items-start md:gap-8">
                <ServiceGlyph name={service.icon} className="h-12 w-12" />
                <div className="mt-4 flex-1 md:mt-0">
                  <h2 className="font-display text-2xl font-semibold group-hover:text-accent">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
                    {extra?.long ?? service.shortDescription}
                  </p>
                  <ul className="mt-4 grid gap-2 md:grid-cols-2">
                    {(extra?.bullets ?? []).map((bullet) => (
                      <li key={bullet} className="text-sm text-text-primary">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-block text-sm font-medium text-accent transition duration-200 group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </CardLink>
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
}
