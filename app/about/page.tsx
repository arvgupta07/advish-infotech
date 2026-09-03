import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import {
  IconBuild,
  IconCenter,
  IconCheck,
  IconCrm,
} from "@/components/ui/Icons";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Advish Infotech",
  description:
    "Advish Infotech is a B2B operations and technology company at the intersection of BPO, AI, and tech build.",
};

const differentiators = [
  {
    title: "End-to-End Partner",
    desc: "From AI deployment to cloud setup, one team handles it all",
    icon: IconCenter,
  },
  {
    title: "Integration-First",
    desc: "We connect your existing tools rather than replacing everything",
    icon: IconCrm,
  },
  {
    title: "Measurable Delivery",
    desc: "Every deployment comes with KPIs and reporting",
    icon: IconCheck,
  },
  {
    title: "Built for B2B",
    desc: "Our solutions are designed for business operations, not consumer use cases",
    icon: IconBuild,
  },
];

const steps = [
  {
    n: "01",
    title: "Understand",
    desc: "We audit your current setup and map the gaps",
  },
  {
    n: "02",
    title: "Build",
    desc: "We deploy, integrate, and customise to your workflow",
  },
  {
    n: "03",
    title: "Manage",
    desc: "We monitor, report, and optimise on an ongoing basis",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Who we are
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold md:text-5xl">
            Built to Run the Operations Others Overlook
          </h1>
        </FadeUp>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-muted md:text-lg">
          <FadeUp delay="sm">
            <p>
              Advish Infotech is a B2B operations and technology company that helps
              businesses modernise how they communicate, manage data, and deploy
              software.
            </p>
          </FadeUp>
          <FadeUp delay="md">
            <p>
              We sit at the intersection of BPO, AI, and tech build — which means we
              can be a single partner for companies that need more than a software
              vendor.
            </p>
          </FadeUp>
          <FadeUp delay="lg">
            <p>
              We don&apos;t just set things up and leave. We integrate, manage, and
              continuously optimise so your team can stay focused on the business
              itself.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold">What Sets Us Apart</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delayMs={index * 90}>
                <div>
                  <Icon className="h-7 w-7 text-navy" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{item.desc}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold">Our Approach</h2>
          </FadeUp>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <FadeUp key={step.n} delayMs={index * 120}>
                <p className="font-display text-3xl font-bold text-accent">{step.n}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
