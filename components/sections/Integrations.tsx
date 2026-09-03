import Image from "next/image";
import type { ReactNode } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

type Tool = {
  name: string;
  src?: string;
  icon?: ReactNode;
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-20 w-20 fill-[#25D366]" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.76 13.98c-.24.68-1.4 1.26-1.93 1.34-.49.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.15-4.92-4.34-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.24-.27.54-.34.72-.34h.52c.17 0 .4-.06.62.47.24.56.8 1.94.87 2.08.07.14.12.3.02.49-.1.2-.14.32-.28.5-.14.17-.3.38-.42.51-.14.14-.28.29-.12.56.16.27.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.22 1.38.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.27.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.46.2.53.32.07.11.07.65-.17 1.33z" />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-20 w-20 text-accent" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="6" className="fill-accent" />
      <circle cx="34" cy="14" r="6" className="fill-navy" />
      <circle cx="24" cy="34" r="6" className="fill-[#4A7FBF]" />
      <path d="M18 18 22 29M30 18 26 29" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

function SmsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-20 w-20" fill="none" aria-hidden>
      <rect x="6" y="10" width="36" height="24" rx="6" className="fill-[#0EA5A0]" />
      <path d="M16 34 12 42 24 34" className="fill-[#0EA5A0]" />
      <path d="M14 20h20M14 26h12" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function HelpdeskIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-20 w-20 text-navy" fill="none" aria-hidden>
      <path
        d="M10 28v-4a14 14 0 0 1 28 0v4"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <rect x="6" y="26" width="10" height="12" rx="3" className="fill-accent" />
      <rect x="32" y="26" width="10" height="12" rx="3" className="fill-accent" />
    </svg>
  );
}

const tools: Tool[] = [
  { name: "WhatsApp", icon: <WhatsAppIcon /> },
  { name: "Voice", src: "/images/integrations/voice.png" },
  { name: "CRM", icon: <CrmIcon /> },
  { name: "Microsoft Teams", src: "/images/integrations/teams.png" },
  { name: "Outlook", src: "/images/integrations/outlook.png" },
  { name: "SMS", icon: <SmsIcon /> },
  { name: "SharePoint", src: "/images/integrations/sharepoint.png" },
  { name: "Helpdesk", icon: <HelpdeskIcon /> },
];

function LogoRow({ copy }: { copy: string }) {
  return (
    <>
      {tools.map((tool) => (
        <div
          key={`${copy}-${tool.name}`}
          className="flex min-w-[180px] flex-col items-center gap-3 px-5"
        >
          <div className="flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
            {tool.src ? (
              <Image
                src={tool.src}
                alt={tool.name}
                width={120}
                height={120}
                unoptimized
                className="h-[88%] w-[88%] object-contain"
              />
            ) : (
              tool.icon
            )}
          </div>
          <span className="text-sm font-semibold text-ink">{tool.name}</span>
        </div>
      ))}
    </>
  );
}

export function Integrations() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeUp>
          <h2 className="max-w-xl font-display text-3xl font-bold md:text-4xl">
            Keep your tools. Connect the workflow.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            We do not ask you to rip out the stack you already pay for. Advish
            sits between voice, chat, CRM, and Microsoft 365 so the same
            conversation is visible to sales, support, and ops.
          </p>
        </FadeUp>
      </div>
      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          <LogoRow copy="a" />
          <LogoRow copy="b" />
        </div>
      </div>
    </section>
  );
}
