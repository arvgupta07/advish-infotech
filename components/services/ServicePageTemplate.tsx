import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { IconCheck } from "@/components/ui/Icons";
import { SERVICE_PAGES } from "@/lib/content";
import type { ServicePageContent } from "@/lib/types";

export function ServicePageTemplate({ service }: { service: ServicePageContent }) {
  const related = service.related.map((slug) => SERVICE_PAGES[slug]);

  return (
    <>
      <section className="hero-wash relative overflow-hidden border-b border-line">
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="animate-fadeUp text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Service
          </p>
          <h1 className="mt-4 max-w-3xl animate-fadeUp font-display text-4xl font-bold [animation-delay:120ms] md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl animate-fadeUp text-lg leading-relaxed text-text-muted [animation-delay:240ms]">
            {service.heroDescription}
          </p>
          <div className="mt-8 animate-fadeUp [animation-delay:360ms]">
            <Button href="/contact" size="lg">
              Contact Us About This
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold">What it includes</h2>
          <p className="mt-4 max-w-3xl text-text-muted">{service.overview}</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {service.capabilities.map((item) => (
              <li key={item} className="flex gap-3 text-text-primary">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="font-display text-3xl font-bold">How it works</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-4">
            {service.steps.map((step, index) => (
              <FadeUp key={step.title} delayMs={index * 90}>
                <div>
                  <p className="font-display text-3xl font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold">Who it&apos;s for</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {service.audiences.map((audience, index) => (
            <FadeUp key={audience.role} delayMs={index * 100}>
              <h3 className="font-display text-lg font-semibold">{audience.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {audience.description}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold">Key outcomes</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3 md:divide-x md:divide-line">
          {service.outcomes.map((outcome, index) => (
            <FadeUp key={outcome.label} delayMs={index * 100}>
              <div className="text-center md:px-6">
                <p className="font-display text-3xl font-bold text-accent">{outcome.value}</p>
                <p className="mt-2 text-sm text-text-muted">{outcome.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold">Related services</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group block transition duration-200 hover:-translate-y-0.5"
            >
              <h3 className="font-display text-xl font-semibold group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-text-muted">{item.heroDescription}</p>
              <p className="mt-4 text-sm font-medium text-accent transition duration-200 group-hover:translate-x-1">Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-navy to-accent">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to get started? Talk to us.
          </h2>
          <div className="mt-8">
            <Button href="/contact" variant="light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
