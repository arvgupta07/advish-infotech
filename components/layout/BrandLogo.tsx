import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  height?: number;
}

export function BrandLogo({ className = "", height = 64 }: BrandLogoProps) {
  const width = Math.round(height * 3.2);

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Advish Infotech"
        width={width}
        height={height}
        className="h-14 w-auto md:h-16"
        priority
      />
    </Link>
  );
}
