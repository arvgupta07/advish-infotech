import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ink" | "ghost" | "light";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
}

const classes: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover hover:shadow-glow",
  ink: "bg-navy text-white hover:bg-navy-deep",
  ghost: "bg-surface text-ink border border-line hover:border-accent",
  light: "bg-white text-navy hover:bg-accent-soft",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const cn = `inline-flex items-center justify-center rounded-btn font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${classes[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
}
