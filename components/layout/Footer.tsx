import Link from "next/link";
import { SERVICE_PAGES, SITE } from "@/lib/content";
import { BrandLogo } from "@/components/layout/BrandLogo";

export function Footer() {
  const services = Object.values(SERVICE_PAGES);

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <BrandLogo />
          <p className="mt-3 text-sm font-semibold text-accent">{SITE.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            B2B operations partner for AI communication, CRM, contact centers,
            and custom technology.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-text-muted transition duration-200 hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Company</p>
          <ul className="mt-4 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/industries", label: "Industries" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-muted transition duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition duration-200 hover:text-accent"
              >
                {SITE.email}
              </a>
            </li>
            <li>{SITE.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-text-muted md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2025 Advish Infotech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
