import { NextResponse } from "next/server";
import { COMPANY_SIZE_OPTIONS, SERVICE_INTEREST_OPTIONS } from "@/lib/content";
import { getSupabaseClient } from "@/lib/supabase";
import type { ContactApiResponse, ContactFormPayload } from "@/lib/types";

function isServiceInterest(
  value: string,
): value is ContactFormPayload["serviceInterest"] {
  return (SERVICE_INTEREST_OPTIONS as readonly string[]).includes(value);
}

function isCompanySize(value: string): value is ContactFormPayload["companySize"] {
  return value === "" || (COMPANY_SIZE_OPTIONS as readonly string[]).includes(value);
}

function parseBody(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;
  const fullName = typeof data.fullName === "string" ? data.fullName.trim() : "";
  const companyName =
    typeof data.companyName === "string" ? data.companyName.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const serviceInterest =
    typeof data.serviceInterest === "string" ? data.serviceInterest : "";
  const companySize = typeof data.companySize === "string" ? data.companySize : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (
    !fullName ||
    !companyName ||
    !email ||
    !phone ||
    !isServiceInterest(serviceInterest) ||
    !isCompanySize(companySize) ||
    message.length < 20
  ) {
    return null;
  }

  return {
    fullName,
    companyName,
    email,
    phone,
    serviceInterest,
    companySize,
    message,
  };
}

export async function POST(request: Request) {
  const json = (await request.json().catch(() => null)) as unknown;
  const payload = parseBody(json);

  if (!payload) {
    const response: ContactApiResponse = {
      ok: false,
      message: "Invalid form submission.",
    };
    return NextResponse.json(response, { status: 400 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    const response: ContactApiResponse = {
      ok: false,
      message: "Server is not configured.",
    };
    return NextResponse.json(response, { status: 500 });
  }

  const { error } = await supabase.from("contact_submissions").insert({
    full_name: payload.fullName,
    company_name: payload.companyName,
    email: payload.email,
    phone: payload.phone,
    service_interest: payload.serviceInterest,
    company_size: payload.companySize || null,
    message: payload.message,
  });

  if (error) {
    const response: ContactApiResponse = {
      ok: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
    return NextResponse.json(response, { status: 500 });
  }

  const response: ContactApiResponse = {
    ok: true,
    message: "Received",
  };
  return NextResponse.json(response);
}
