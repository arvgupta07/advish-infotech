import { FadeUp } from "@/components/ui/FadeUp";
import { IconStar } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <FadeUp>
        <SectionHeading title="What Our Clients Say" />
      </FadeUp>
      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-10 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {TESTIMONIALS.map((item, index) => (
          <FadeUp key={item.name} delayMs={index * 120} className="min-w-[85%] snap-start md:min-w-0">
            <blockquote>
              <div className="flex gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-text-primary">
                “{item.quote}”
              </p>
              <footer className="mt-6">
                <p className="font-display font-semibold">{item.name}</p>
                <p className="text-sm text-text-muted">
                  {item.title}, {item.company}
                </p>
              </footer>
            </blockquote>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
