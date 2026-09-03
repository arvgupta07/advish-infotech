import type { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { IconCheck } from "@/components/ui/Icons";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us what you're working on. Advish Infotech will come back to you within one business day.",
};

const points = [
  "We'll audit your current setup for free on the first call",
  "No generic pitches — we'll discuss your specific workflow and needs",
  "You'll leave the call with a clear picture of what's possible",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <FadeUp>
        <h1 className="font-display text-4xl font-bold md:text-5xl">Let&apos;s Talk</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">
          Tell us what you&apos;re working on. We&apos;ll come back to you within one
          business day.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ul className="space-y-5">
            {points.map((point, index) => (
              <FadeUp key={point} delayMs={index * 90} from="left">
                <li className="flex gap-3">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-text-primary">{point}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
        <FadeUp delay="md" className="lg:col-span-3">
          <ContactForm />
        </FadeUp>
      </div>
    </div>
  );
}
