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
        <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left md:grid-cols-3">
          <div className="flex flex-col items-center sm:items-start">
            <img src={LOGO_FULL} alt={`${COMPANY_NAME} logo`} className="h-10 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              We build SaaS products, websites, and provide hands-on technical consulting for teams
              that want to move fast.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-ink">Quick links</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-sm text-ink-soft transition-colors hover:text-accent">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-ink">Contact</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="mt-2 flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Bottom bar: copyright + socials together, stacked and centered
            on mobile, side-by-side on larger screens. */}
        <div className="mt-10 flex flex-col items-center gap-5 border-t border-line pt-6 sm:flex-row sm:justify-between">
          <p className="order-2 text-xs text-ink-soft sm:order-1">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
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
