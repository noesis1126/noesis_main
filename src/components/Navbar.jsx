import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail, Phone } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS, LOGO_FULL, EMAIL, PHONE_DISPLAY } from "../data/siteData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Lock body scroll while the mobile drawer is open, and always close the
  // drawer if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // On the home page, watch the actual hero section (#home-hero) and reveal
  // the bar the moment it's fully scrolled out of view - works no matter how
  // tall the hero ends up being.
  useEffect(() => {
    if (!isHome) {
      setPastHero(false);
      return;
    }
    const heroEl = document.getElementById("home-hero");
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isHome]);

  // On the home hero, the entire bar stays off-screen until the user
  // scrolls past the hero; every other page keeps it visible as usual.
  const hiddenOnHero = isHome && !pastHero;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hiddenOnHero ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`top-0 z-50 w-full border-b border-line bg-cream/90 backdrop-blur-sm transition-colors duration-300 ${isHome ? "fixed" : "sticky"
          }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={LOGO_FULL} alt={`${COMPANY_NAME} logo`} className="h-11 w-auto md:h-14" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative pb-1">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-cream transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </NavLink>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream-soft md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer - rendered as a sibling of <header>, not a descendant.
          The header applies backdrop-blur (a CSS filter) when solid, and a
          filter on an ancestor turns it into the containing block for any
          position:fixed descendant - which was pinning this drawer to the
          header's own box instead of the viewport. Keeping it outside the
          header sidesteps that entirely. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex h-full w-[82%] max-w-xs flex-col bg-cream shadow-soft md:hidden"
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <img src={LOGO_FULL} alt={`${COMPANY_NAME} logo`} className="h-10 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-cream-soft hover:text-ink"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.25, ease: "easeOut" }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive
                          ? "bg-accent-soft text-accent"
                          : "text-ink-soft hover:bg-cream-soft hover:text-ink"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <link.icon size={18} className={isActive ? "text-accent" : "text-ink-soft"} />
                          {link.label}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-line px-6 py-6">
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-sm font-medium text-cream shadow-soft transition-transform active:scale-[0.98]"
                >
                  Get in touch
                  <ArrowUpRight size={15} />
                </NavLink>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2 text-xs font-medium text-ink-soft hover:text-ink"
                  >
                    <Mail size={14} className="text-accent" />
                    {EMAIL}
                  </a>
                  <a
                    href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-xs font-medium text-ink-soft hover:text-ink"
                  >
                    <Phone size={14} className="text-accent" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}