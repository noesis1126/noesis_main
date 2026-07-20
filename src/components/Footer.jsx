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
      {/* Extra bottom padding on mobile so the fixed floating widget never
          sits on top of the copyright row when the page is scrolled all
          the way down. */}
      <div className="mx-auto max-w-content px-6 pb-28 pt-12 sm:pb-12 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <img src={LOGO_FULL} alt={`${COMPANY_NAME} logo`} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              We build SaaS products, websites, and provide hands-on technical consulting for teams
              that want to move fast.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-ink">Quick links</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-sm text-ink-soft transition-colors hover:text-accent">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-ink">Contact</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <Mail size={16} className="text-accent/70" />
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="mt-3 flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <Phone size={16} className="text-accent/70" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Bottom bar: stacked on mobile, side-by-side on larger screens. */}
        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <div className="order-2 flex flex-col gap-3 sm:order-1 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs text-ink-soft">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-ink-soft">
              <NavLink to="/privacy" className="transition-colors hover:text-accent">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="transition-colors hover:text-accent">
                Terms of Service
              </NavLink>
            </div>
          </div>
          <div className="order-1 flex gap-3 sm:order-2">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
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
