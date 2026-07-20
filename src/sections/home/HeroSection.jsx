import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { COMPANY_NAME, TAGLINE } from "../../data/siteData.js";

const trustPoints = ["Senior team only", "Fixed-scope estimates", "Ship in weeks, not quarters"];

export default function HeroSection() {
  return (
    <section id="home-hero" className="relative flex min-h-screen items-center overflow-hidden bg-cream">
      {/* Full-bleed banner image as the section background, sitting behind all text */}
      <motion.div
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/main_banner_img.png"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Scrim only on the left where the text sits; fades to fully transparent before the illustration */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent md:w-3/5" />
      </motion.div>

      {/* Soft radial accent glow on top of the image for extra depth */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-content flex-col items-center gap-12 px-5 py-16 sm:px-6 md:items-start md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center md:w-2/5 md:items-start md:gap-6 md:text-left"
        >
          {/* NOESIS wordmark */}
          <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-6xl lg:text-7xl">
            {COMPANY_NAME}
          </h1>

          <p className="max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">{TAGLINE}</p>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 pt-1 sm:w-auto sm:gap-4 md:justify-start">
            <NavLink
              to="/services"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-cream shadow-soft transition-transform hover:scale-[1.03] active:scale-[0.98] sm:flex-none sm:py-3"
            >
              Start a project
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NavLink>
            <NavLink
              to="/work"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-medium text-ink shadow-soft transition-colors hover:border-accent hover:text-accent sm:flex-none sm:py-3"
            >
              See our work
            </NavLink>
          </div>

          {/* Trust row - quick, scannable proof points */}
          <ul className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-2 md:justify-start">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-ink-soft">
                <CheckCircle2 size={16} className="shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}