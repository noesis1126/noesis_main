import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { COMPANY_NAME, TAGLINE } from "../../data/siteData.js";

const trustPoints = ["Senior team only", "Fixed-scope estimates", "Agile Methodology"];

export default function HeroSection() {
  return (
    <section id="home-hero" className="overflow-hidden bg-cream">

      {/* ─────────────────────────────────────────────────────────
          MOBILE  (<md)
          Image FIRST (top, full clarity), text SECOND (below).
      ───────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:hidden">

        {/* Image block — sits at the top, sharp, no overlay on top of it */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[46vh] w-full overflow-hidden"
        >
          <img
            src="/main_banner_img.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[72%_30%]"
          />
          {/* Faint fades so the image edges melt into the cream bg instead of a hard cutoff */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-cream/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-cream to-transparent" />
        </motion.div>

        {/* Content — below the image, plain cream background */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col items-center gap-6 bg-cream px-6 pb-12 pt-10 text-center"
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Design · Build · Ship
            </span>
          </div>

          <h1 className="text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink">
            {COMPANY_NAME}
          </h1>

          <p className="max-w-[17rem] text-base leading-relaxed text-ink-soft">
            We design &amp; build websites, mobile apps, AI/ML and SaaS products that <em className="not-italic font-semibold text-accent">ship</em>.
          </p>

          {/* CTA buttons — stacked, full-width, clearer hierarchy + real depth */}
          <div className="flex w-full max-w-xs flex-col gap-3 pt-1">
            <NavLink
              to="/services"
              className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-accent px-5 py-4 text-[15px] font-semibold text-cream shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)] transition-transform duration-150 active:scale-[0.97] active:shadow-[0_4px_12px_-6px_rgba(0,0,0,0.3)]"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 to-transparent" />
              <span className="relative">Start a project</span>
              <ArrowUpRight size={16} className="relative shrink-0 transition-transform group-active:translate-x-0.5 group-active:-translate-y-0.5" />
            </NavLink>

            <NavLink
              to="/work"
              className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-ink/12 bg-white px-5 py-4 text-[15px] font-semibold text-ink shadow-[0_2px_10px_-4px_rgba(0,0,0,0.12)] transition-transform duration-150 active:scale-[0.97] active:bg-ink/[0.03]"
            >
              See our work
            </NavLink>
          </div>

          {/* Trust points — horizontal chip row instead of a stacked list */}
          <ul className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-ink/10 pt-5">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 rounded-full bg-ink/[0.03] px-3 py-1.5 text-[13px] font-medium text-ink-soft"
              >
                <CheckCircle2 size={13} className="shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          DESKTOP  (md+)  — unchanged
          Full-viewport image bg — kept sharp, overlay lightened
          so it reads as clear, not washed out/blurry.
      ───────────────────────────────────────────────────────── */}
      <div className="relative hidden min-h-screen items-center md:flex">
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/main_banner_img.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          {/* Lighter, narrower scrim — only enough to keep text legible,
              image stays crisp instead of looking hazy/blurred */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/35 to-transparent md:w-2/3" />
        </motion.div>

        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-content px-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-[42%] flex-col items-start gap-6 text-left"
          >
            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight text-ink lg:text-7xl">
              {COMPANY_NAME}
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-ink-soft">{TAGLINE}</p>

            <div className="flex items-center gap-4 pt-1">
              <NavLink
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream shadow-soft transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Start a project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NavLink>
              <NavLink
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-medium text-ink shadow-soft transition-colors hover:border-accent hover:text-accent"
              >
                See our work
              </NavLink>
            </div>

            <ul className="flex flex-col gap-2 pt-1">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-ink-soft">
                  <CheckCircle2 size={16} className="shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

    </section>
  );
}