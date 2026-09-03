import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden pb-16 pt-6">
      <div className="relative mx-auto w-full max-w-4xl px-5 pt-10 text-center lg:px-8">
        <p className="mb-5 animate-fadeUp text-sm text-text-muted [animation-delay:40ms]">
          Trusted by operations teams across real estate, fintech, healthcare,
          e-commerce, logistics, and education.
        </p>
        <h1 className="animate-fadeUp font-display text-[40px] font-bold leading-[1.12] tracking-tight [animation-delay:140ms] md:text-[58px]">
          Your operations, automated.
          <br />
          Your business,{" "}
          <span className="accent-mark text-accent">unblocked.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl animate-fadeUp text-lg leading-relaxed text-text-muted [animation-delay:260ms]">
          Advish Infotech delivers AI-powered BPO, CRM integration, and contact
          center solutions that reduce manual work and give your team back the
          time to grow.
        </p>
        <div className="mt-8 flex animate-fadeUp flex-col items-center justify-center gap-3 [animation-delay:380ms] sm:flex-row">
          <Button href="/contact" variant="ink" size="lg">
            Talk to Our Team
          </Button>
          <Button href="/services" variant="ghost" size="lg">
            Explore Services
          </Button>
        </div>
        <p className="mt-10 animate-fadeUp text-sm leading-relaxed text-text-muted [animation-delay:500ms]">
          Voice AI — inbound & outbound
          <span className="mx-3 text-line">|</span>
          Full CRM integration
          <span className="mx-3 text-line">|</span>
          End-to-end tech build
        </p>
      </div>
    </section>
  );
}
