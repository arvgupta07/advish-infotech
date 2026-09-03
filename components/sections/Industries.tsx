import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcon } from "@/components/ui/Icons";
import { INDUSTRIES } from "@/lib/content";

export function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <FadeUp>
        <SectionHeading title="Built for Your Industry" />
      </FadeUp>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry, index) => {
          const Icon = serviceIcon(industry.icon);
          return (
            <FadeUp key={industry.slug} delayMs={index * 90}>
              <div className="h-full rounded-card border border-line bg-surface p-8 shadow-card">
                <Icon className="h-6 w-6 text-navy" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {industry.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {industry.blurb}
                </p>
              </div>
            </FadeUp>
          );
        })}
      </div>
      <p className="mt-10">
        <Link
          href="/industries"
          className="inline-block text-sm font-medium text-accent transition duration-200 hover:translate-x-1 hover:text-accent-hover"
        >
          See how we work in each industry →
        </Link>
      </p>
    </section>
  );
}
