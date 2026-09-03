"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: "none" | "sm" | "md" | "lg" | "xl";
  delayMs?: number;
  from?: "up" | "left";
}

const delayMap: Record<NonNullable<FadeUpProps["delay"]>, number> = {
  none: 0,
  sm: 100,
  md: 200,
  lg: 320,
  xl: 450,
};

export function FadeUp({
  children,
  className = "",
  delay = "none",
  delayMs,
  from = "up",
}: FadeUpProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  });

  const hidden =
    from === "left" ? "translate-x-5 translate-y-0 opacity-0" : "translate-y-7 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs ?? delayMap[delay]}ms` } as CSSProperties}
      className={`motion-safe-fade transition-[opacity,transform] duration-700 ease-out ${
        inView ? "translate-x-0 translate-y-0 opacity-100" : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
