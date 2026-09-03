import { CardLink } from "@/components/ui/Card";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceGlyph } from "@/components/ui/ServiceGlyph";
import { SERVICE_SUMMARIES } from "@/lib/content";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <FadeUp>
        <SectionHeading
          align="center"
          title="Everything Under One Roof"
          subtitle="Six service areas. One integrated partner."
        />
      </FadeUp>
      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {SERVICE_SUMMARIES.map((service, index) => (
            <FadeUp key={`${service.title}-${service.href}`} delayMs={index * 80}>
              <CardLink href={service.href} className="h-full">
                <ServiceGlyph name={service.icon} />
                <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent transition duration-200 group-hover:translate-x-1">
                  Learn More →
                </span>
              </CardLink>
            </FadeUp>
        ))}
      </div>
    </section>
  );
}
