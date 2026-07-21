import { NavLink } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, Phone } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS, LOGO_FULL, EMAIL, PHONE_DISPLAY } from "../data/siteData.js";

const socialIcons = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 pb-28 pt-12 sm:pb-12 md:px-10 max-sm:px-5 max-sm:pt-9 max-sm:pb-24">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-sm:gap-0 max-sm:divide-y max-sm:divide-line">
          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center max-sm:pb-6">
            <img src={LOGO_FULL} alt={`${COMPANY_NAME} logo`} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft max-sm:mt-3 max-sm:mx-auto">
              We build SaaS products, websites, and provide hands-on technical consulting for teams
              that want to move fast.
            </p>
          </div>

          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center max-sm:py-6">
            <p className="text-sm font-semibold text-ink">Quick links</p>
            <ul className="mt-4 space-y-2.5 max-sm:mt-2 max-sm:space-y-0">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-ink-soft transition-colors hover:text-accent max-sm:inline-block max-sm:py-2.5 max-sm:px-2"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start max-sm:items-center max-sm:text-center max-sm:pt-6">
            <p className="text-sm font-semibold text-ink">Contact</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent max-sm:mt-3 max-sm:justify-center max-sm:py-2.5 max-sm:w-full"
            >
              <Mail size={16} className="text-accent/70" />
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="mt-3 flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent max-sm:mt-1 max-sm:justify-center max-sm:py-2.5 max-sm:w-full"
            >
              <Phone size={16} className="text-accent/70" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5 max-sm:mt-8 max-sm:gap-5 max-sm:pt-5">
          <div className="order-2 flex flex-col gap-3 sm:order-1 sm:flex-row sm:items-center sm:gap-6 max-sm:items-center max-sm:text-center">
            <p className="text-xs text-ink-soft">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-ink-soft max-sm:flex-wrap max-sm:justify-center max-sm:gap-x-4 max-sm:gap-y-2">
              <NavLink to="/privacy" className="transition-colors hover:text-accent max-sm:py-1.5">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="transition-colors hover:text-accent max-sm:py-1.5">
                Terms of Service
              </NavLink>
            </div>
          </div>
          <div className="order-1 flex gap-3 sm:order-2 max-sm:justify-center max-sm:gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent max-sm:h-11 max-sm:w-11"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}