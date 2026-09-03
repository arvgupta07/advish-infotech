import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconVoice(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v10a3 3 0 0 1-6 0" />
      <path d="M12 13a3 3 0 0 0 6 0V8" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-1" />
      <path d="M12 21v-2" />
    </svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 8h10M7 12h6" />
      <path d="M5 19l2.2-2.2A2 2 0 0 1 8.6 16H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10z" />
    </svg>
  );
}

export function IconCrm(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 13h3M8 16h6" />
    </svg>
  );
}

export function IconBuild(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20h16" />
      <path d="M6 20V9l6-5 6 5v11" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function IconCloud(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 18h10a4 4 0 0 0 1-7.9A6 6 0 0 0 7.2 8.1 4 4 0 0 0 7 18z" />
    </svg>
  );
}

export function IconCenter(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 7.8a6 6 0 0 0 0 8.4" />
      <path d="M19 5a10 10 0 0 1 0 14M5 5a10 10 0 0 0 0 14" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.2 10.8 15 16 9" />
    </svg>
  );
}

export function IconEstate(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function IconFintech(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 15h2M12 15h5" />
    </svg>
  );
}

export function IconHealth(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" />
    </svg>
  );
}

export function IconCommerce(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 8h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.6L5 5H3" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
  );
}

export function IconLogistics(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 16V8h11v8" />
      <path d="M14 11h4l3 3v2h-7" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function IconEducation(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 10 12 5l9 5-9 5-9-5z" />
      <path d="M7 12.2V16c0 .8 2.2 2 5 2s5-1.2 5-2v-3.8" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base({ fill: "currentColor", stroke: "none", ...props })}>
      <path d="M12 3.2 14.5 9l6.3.6-4.8 4.2 1.4 6.2L12 16.8 6.6 20l1.4-6.2L3.2 9.6 9.5 9z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function serviceIcon(name: string) {
  switch (name) {
    case "voice":
      return IconVoice;
    case "chat":
      return IconChat;
    case "crm":
      return IconCrm;
    case "build":
      return IconBuild;
    case "cloud":
      return IconCloud;
    case "center":
      return IconCenter;
    case "estate":
      return IconEstate;
    case "fintech":
      return IconFintech;
    case "health":
      return IconHealth;
    case "commerce":
      return IconCommerce;
    case "logistics":
      return IconLogistics;
    case "education":
      return IconEducation;
    default:
      return IconBuild;
  }
}
