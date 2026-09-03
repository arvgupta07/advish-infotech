import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-b from-navy to-accent">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
        <FadeUp>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to modernise your operations?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Tell us what you&apos;re working on and we&apos;ll show you exactly how
            Advish can help.
          </p>
        </FadeUp>
        <FadeUp delay="md">
          <div className="mt-8">
            <Button href="/contact" variant="light" size="lg">
              Get in Touch
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
