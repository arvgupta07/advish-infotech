"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { IconClose, IconMenu } from "@/components/ui/Icons";
import { BrandLogo } from "@/components/layout/BrandLogo";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-200 ${
        scrolled ? "border-b border-line bg-surface/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <div className="shrink-0">
          <BrandLogo />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-sm font-medium transition duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-accent after:transition-all after:duration-300 ${
                isActive(pathname, link.href)
                  ? "text-ink after:w-full"
                  : "text-text-muted after:w-0 hover:text-ink hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button href="/contact">Contact Us</Button>
        </div>

        <button
          type="button"
          className="rounded-btn border border-line bg-surface p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-surface transition-all duration-200 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-btn px-3 py-2 text-sm ${
                isActive(pathname, link.href)
                  ? "bg-accent-soft text-accent"
                  : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-2">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
