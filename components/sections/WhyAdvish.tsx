import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeUp } from "@/components/ui/FadeUp";
import { IconCheck } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: 60, suffix: "%+", label: "Typical lift in agent productivity" },
  { value: 45, suffix: "%", label: "Less time spent on manual updates" },
  { value: 10, suffix: "+", label: "Platforms we routinely connect" },
];

const points = [
  "Single vendor for AI, CRM, and tech build",
  "Deployments that are tracked and reported",
  "No long contracts — start with what you need",
  "Your team stays focused on strategy, we handle systems",
];

export function WhyAdvish() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <FadeUp>
        <SectionHeading
          align="center"
          title="Why teams stay with Advish"
          subtitle="These are typical outcomes from live deployments — not a pitch deck. We measure them on dashboards your ops team can open."
        />
      </FadeUp>
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:divide-x md:divide-line">
        {stats.map((stat, index) => (
          <FadeUp key={stat.label} delayMs={index * 120}>
            <div className="text-center md:px-8">
              <p className="font-display text-5xl font-bold text-accent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-text-muted">{stat.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
      <FadeUp delay="sm">
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
