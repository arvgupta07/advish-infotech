"use client";

import { FormEvent, useState } from "react";
import {
  COMPANY_SIZE_OPTIONS,
  SERVICE_INTEREST_OPTIONS,
} from "@/lib/content";
import type {
  CompanySize,
  ContactApiResponse,
  ContactFormPayload,
  ServiceInterest,
} from "@/lib/types";
import { Button } from "./Button";

const initial: ContactFormPayload = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  serviceInterest: "Not Sure Yet",
  companySize: "",
  message: "",
};

function validate(payload: ContactFormPayload): string | null {
  if (!payload.fullName.trim()) return "Full name is required.";
  if (!payload.companyName.trim()) return "Company name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Enter a valid work email.";
  }
  if (!payload.phone.trim() || payload.phone.trim().length < 7) {
    return "Enter a valid phone number.";
  }
  if (!payload.serviceInterest) return "Select a service of interest.";
  if (payload.message.trim().length < 20) {
    return "Tell us a little more — at least 20 characters.";
  }
  return null;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormPayload>(initial);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [savedName, setSavedName] = useState("");

  const update = <K extends keyof ContactFormPayload>(
    key: K,
    value: ContactFormPayload[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      setStatus("idle");
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as ContactApiResponse;
      if (!response.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setSavedName(form.fullName.trim().split(" ")[0] ?? form.fullName);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-1">
        <p className="font-display text-2xl font-bold text-text-primary">
          Thanks {savedName}, we&apos;ve received your message. Our team will
          reach out within one business day.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div>
        <p className="text-lg text-text-primary">
          Something went wrong. Please try again or email us directly.
        </p>
        <Button
          className="mt-6"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Try again
        </Button>
      </div>
    );
  }

  const field =
    "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-text-primary outline-none transition duration-200 placeholder:text-text-muted focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="md:pl-8 md:border-l md:border-line">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm text-text-muted">
          Full Name
          <input
            className={`${field} mt-2`}
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm text-text-muted">
          Company Name
          <input
            className={`${field} mt-2`}
            required
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm text-text-muted">
          Work Email
          <input
            className={`${field} mt-2`}
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="block text-sm text-text-muted">
          Phone Number
          <input
            className={`${field} mt-2`}
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel"
          />
        </label>
        <label className="block text-sm text-text-muted">
          Service of Interest
          <select
            className={`${field} mt-2`}
            required
            value={form.serviceInterest}
            onChange={(e) =>
              update("serviceInterest", e.target.value as ServiceInterest)
            }
          >
            {SERVICE_INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm text-text-muted">
          Company Size
          <select
            className={`${field} mt-2`}
            value={form.companySize}
            onChange={(e) =>
              update("companySize", e.target.value as CompanySize | "")
            }
          >
            <option value="">Select size</option>
            {COMPANY_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm text-text-muted">
        Tell us about your requirement
        <textarea
          className={`${field} mt-2 min-h-32`}
          required
          minLength={20}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </label>
      {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
      <Button
        className="mt-6 w-full md:w-auto"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
