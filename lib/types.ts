export type ServiceSlug =
  | "voice-ai"
  | "chat-ai"
  | "crm-integration"
  | "tech-build"
  | "cloud-microsoft";

export type ServiceInterest =
  | "Voice AI Agents"
  | "Chat & WhatsApp AI"
  | "CRM & Workflow Integration"
  | "Custom Tech Build"
  | "Cloud & Microsoft"
  | "Contact Center"
  | "Not Sure Yet"
  | "Multiple Services";

export type CompanySize = "1–10" | "11–50" | "51–200" | "200+ employees";

export interface ContactSubmission {
  id: string;
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  service_interest: string;
  company_size: string | null;
  message: string;
  created_at: string;
}

export interface ContactFormPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceInterest: ServiceInterest;
  companySize: CompanySize | "";
  message: string;
}

export interface ContactApiResponse {
  ok: boolean;
  message: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface ServiceSummary {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  href: string;
  icon: "voice" | "chat" | "crm" | "build" | "cloud" | "center";
}

export interface ServicePageContent {
  slug: ServiceSlug;
  title: string;
  heroDescription: string;
  overview: string;
  capabilities: string[];
  steps: { title: string; description: string }[];
  audiences: { role: string; description: string }[];
  outcomes: { value: string; label: string }[];
  related: ServiceSlug[];
}

export interface IndustryContent {
  slug: string;
  name: string;
  blurb: string;
  paragraphs: string[];
  services: string[];
  icon: "estate" | "fintech" | "health" | "commerce" | "logistics" | "education";
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}
