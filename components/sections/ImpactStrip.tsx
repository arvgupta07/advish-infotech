import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeUp } from "@/components/ui/FadeUp";

const impact = [
  { value: 3, suffix: "x", label: "Faster CRM go-lives vs. building in-house" },
  { value: 24, suffix: "/7", label: "Voice and chat coverage without night shifts" },
  { value: 80, suffix: "%", label: "Routine enquiries AI can close before a human" },
];

export function ImpactStrip() {
  return (
    <section className="bg-gradient-to-b from-navy to-accent">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <FadeUp>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            How effective the work actually is
          </p>
        </FadeUp>
        <div className="mt-10 grid gap-10 text-white md:grid-cols-3">
          {impact.map((item, index) => (
            <FadeUp key={item.label} delayMs={index * 120}>
              <div className="text-center">
                <p className="font-display text-5xl font-bold md:text-6xl">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-sm text-white/85 md:text-base">{item.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
