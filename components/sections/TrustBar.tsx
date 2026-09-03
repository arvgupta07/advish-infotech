import {
  IconCommerce,
  IconEducation,
  IconEstate,
  IconFintech,
  IconHealth,
  IconLogistics,
} from "@/components/ui/Icons";
import { FadeUp } from "@/components/ui/FadeUp";

const industries = [
  { name: "Real Estate", icon: IconEstate },
  { name: "FinTech", icon: IconFintech },
  { name: "Healthcare", icon: IconHealth },
  { name: "E-commerce", icon: IconCommerce },
  { name: "Logistics", icon: IconLogistics },
  { name: "Education", icon: IconEducation },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <FadeUp>
          <p className="text-center text-sm text-text-muted">
            Trusted across industries
          </p>
        </FadeUp>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.name} delayMs={index * 70}>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                  <Icon className="h-5 w-5 text-accent" />
                  {item.name}
                </span>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
