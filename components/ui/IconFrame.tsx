import type { ReactNode } from "react";

interface IconFrameProps {
  children: ReactNode;
}

export function IconFrame({ children }: IconFrameProps) {
  return (
    <div className="mb-4 text-navy">
      <span className="flex h-8 w-8 items-center justify-center">{children}</span>
    </div>
  );
}
