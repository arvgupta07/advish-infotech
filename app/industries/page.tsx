import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { serviceIcon } from "@/components/ui/Icons";
import { INDUSTRIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "How Advish Infotech adapts AI communication, CRM, and tech build for real estate, FinTech, healthcare, e-commerce, logistics, and education.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <FadeUp>
        <h1 className="font-display text-4xl font-bold md:text-5xl">
          Industries We Serve
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          We understand that every industry has different workflows, compliance
          requirements, and customer expectations. Here&apos;s how we adapt.
        </p>
      </FadeUp>

      <div className="mt-14 space-y-10">
        {INDUSTRIES.map((industry, index) => {
          const Icon = serviceIcon(industry.icon);
          return (
            <FadeUp key={industry.slug} delayMs={index * 80}>
              <article className="border-t border-line py-10 md:py-14">
                <div className="flex items-center gap-4">
                  <Icon className="h-7 w-7 text-navy" />
                  <h2 className="font-display text-2xl font-bold md:text-3xl">
                    {industry.name}
                  </h2>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-muted md:text-base">
                  {industry.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <p className="mt-6 text-sm text-text-muted">
                  Relevant services: {industry.services.join(" · ")}
                </p>
                <div className="mt-8">
                  <Button href="/contact">Talk to Us About {industry.name}</Button>
                </div>
              </article>
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
}
