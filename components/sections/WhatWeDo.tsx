import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";

const columns = [
  {
    title: "Managed CRM & BPO Operations",
    desc: "We run your CRM, manage your contact center, and handle your communication workflows — so your team stays focused on closing.",
    glyph: "crm",
  },
  {
    title: "AI-Powered Voice & Chat",
    desc: "Deploy inbound and outbound Voice AI agents, AI receptionists, WhatsApp automations, and chatbots — all routed intelligently.",
    glyph: "voice",
  },
  {
    title: "Custom Tech, Built Fast",
    desc: "From landing pages to full-stack SaaS and mobile apps — we design, build, and migrate your digital infrastructure.",
    glyph: "build",
  },
];

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <FadeUp>
        <SectionHeading
          eyebrow="What we do"
          title="Operations, communication, and software — owned by one team."
          subtitle="Most vendors stop at a tool. Advish stays for the workflow: how calls, chats, CRM records, and custom software actually move work through your company."
        />
      </FadeUp>
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
        {columns.map((column, index) => (
            <FadeUp
              key={column.title}
              delayMs={index * 120}
            >
            <div
              className={
                index === 0 ? "md:pr-10" : "md:border-l md:border-line md:px-10"
              }
            >
              <ServiceGlyph name={column.glyph} />
              <h3 className="mt-4 font-display text-xl font-semibold">
                {column.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {column.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
