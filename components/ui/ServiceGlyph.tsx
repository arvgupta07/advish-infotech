import Image from "next/image";
import { serviceIcon } from "@/components/ui/Icons";

interface ServiceGlyphProps {
  name: string;
  className?: string;
}

export function ServiceGlyph({ name, className = "h-10 w-10" }: ServiceGlyphProps) {
  if (name === "voice" || name === "center") {
    return (
      <Image
        src="/images/integrations/voice.png"
        alt=""
        width={40}
        height={40}
        unoptimized
        className={`${className} object-contain mix-blend-multiply`}
      />
    );
  }

  const Icon = serviceIcon(name);
  return <Icon className={`${className} text-navy`} />;
}
