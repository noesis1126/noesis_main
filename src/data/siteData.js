import { Home, Info, Layers, Briefcase, Mail } from "lucide-react";

// ---------------------------------------------------------------------------
// Central place for placeholder content. Edit these values to rebrand the
// site without touching any component markup.
// ---------------------------------------------------------------------------

export const COMPANY_NAME = "NOESIS";
export const TAGLINE = "We design and build SaaS products and websites that ship.";

export const EMAIL = "noesis1126@gmail.com";

// Display format shown on the page (with country code, spaced for readability)
export const PHONE_DISPLAY = "+91 70572 05190";
// Digits only, country code first, no "+" or spaces - used for the WhatsApp
// link (https://wa.me/...). Assumes India (91); update if that's wrong.
export const PHONE_NUMBER = "917057205190";

// Logo files - served from /public/logo, so these paths work as-is with no import needed.
export const LOGO_FULL = "/logo/noesis-logo.png"; // icon + wordmark, used in navbar / footer
export const LOGO_ICON = "/logo/noesis-icon.png"; // icon only, used in tight spaces

export const NAV_LINKS = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: Info },
  { label: "Services", path: "/services", icon: Layers },
  { label: "Work", path: "/work", icon: Briefcase },
  { label: "Contact Us", path: "/contact", icon: Mail },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];
