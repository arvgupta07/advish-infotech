import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Advish Infotech website and enquiry process.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-sm text-text-muted">Last updated: 3 September 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-text-muted">
        <p>
          This website describes services offered by Advish Infotech. Content is
          for business information only and does not constitute a binding offer.
          Engagements begin only after a written agreement between Advish Infotech
          and the client.
        </p>
        <p>
          You agree to provide accurate information when submitting an enquiry.
          We may decline work that is outside our scope, or that we cannot
          support responsibly.
        </p>
        <p>
          All trademarks and copy on this site belong to Advish Infotech unless
          otherwise noted. For questions, contact ak@advishinfotech.in.
        </p>
      </div>
    </div>
  );
}
