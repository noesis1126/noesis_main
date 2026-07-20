import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { COMPANY_NAME, TAGLINE } from "../../data/siteData.js";

const trustPoints = ["Senior team only", "Fixed-scope estimates", "Ship in weeks, not quarters"];

export default function HeroSection() {
  return (
    <section id="home-hero" className="overflow-hidden bg-cream">

      {/* ─────────────────────────────────────────────────────────
          MOBILE  (<md)
          Single-canvas layout: image fills the bottom half of the
          viewport, content card sits on top — no dead gap, no bleed.
      ───────────────────────────────────────────────────────── */}
      <div className="relative md:hidden" style={{ minHeight: "100dvh" }}>

        {/* Background image — anchored to bottom so character is always visible */}
        <div className="absolute inset-x-0 bottom-0 h-[58%]">
          <motion.img
            src="/main_banner_img.png"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="h-full w-full object-cover object-[72%_30%]"
          />
          {/* Top-edge fade blends image into cream content above */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent" />
        </div>

        {/* Content — sits in top 50% on solid cream, no overlap with character */}
        <div className="relative z-10 flex flex-col gap-0 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center gap-5 bg-cream px-6 pb-10 text-center"
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

            {/* Tagline — rewritten to avoid the comma-lead wrap bug */}
            <p className="max-w-[17rem] text-base leading-relaxed text-ink-soft">
              We design &amp; build websites, mobile apps, AI/ML and SaaS products that <em className="not-italic font-semibold text-accent">ship</em>.
            </p>

            <div className="flex w-full max-w-xs gap-3">
              <NavLink
                to="/services"
                className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3.5 text-sm font-semibold text-cream shadow-soft active:scale-[0.97]"
              >
                Start a project
                <ArrowUpRight size={14} className="transition-transform group-active:translate-x-0.5 group-active:-translate-y-0.5" />
              </NavLink>
              <NavLink
                to="/work"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-ink/15 bg-white px-4 py-3.5 text-sm font-semibold text-ink shadow-soft"
              >
                See our work
              </NavLink>
            </div>

            {/* Trust points — centered, matches heading alignment */}
            <ul className="flex flex-col items-center gap-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-ink-soft">
                  <CheckCircle2 size={14} className="shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────
          DESKTOP  (md+)
          Full-viewport image bg, text overlaid left with scrim.
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
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/75 to-transparent" />
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