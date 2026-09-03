import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Advish Infotech collects and uses information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-text-muted">Last updated: 3 September 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-text-muted">
        <p>
          Advish Infotech collects the information you submit through the contact
          form — name, company, work email, phone, service interest, company size,
          and your message — solely to respond to your enquiry and to operate our
          B2B services.
        </p>
        <p>
          Submissions are stored in our database and accessed by authorised Advish
          staff. We do not sell personal data. We may share information with
          infrastructure providers (such as hosting and database vendors) who
          process it on our behalf.
        </p>
        <p>
          You may request access, correction, or deletion of your enquiry data by
          emailing ak@advishinfotech.in. This site does not use advertising
          pixels or a payment processor.
        </p>
      </div>
    </div>
  );
}
