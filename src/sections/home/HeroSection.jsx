import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { COMPANY_NAME, TAGLINE } from "../../data/siteData.js";

export default function HeroSection() {
  return (
    <section id="home-hero" className="relative overflow-hidden">
      {/* Full-bleed background image covering the ENTIRE hero section (both the text side and the mockup side) */}
      <div className="absolute inset-0 h-full w-full" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=70"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Cream-tinted overlay so the image reads as a background, not a full-strength photo,
            and so the ink text stays readable on top of it */}
        <div className="absolute inset-0 bg-cream/80" />
      </div>

      <div className="relative mx-auto max-w-content px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-soft px-3 py-1 text-xs font-medium text-ink-soft">
            <Sparkles size={13} className="text-accent" />
            Product studio for founders &amp; teams
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            {COMPANY_NAME}
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-ink-soft">{TAGLINE}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream shadow-soft transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Start a project
              <ArrowUpRight size={16} />
            </NavLink>
            <NavLink
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-medium text-ink shadow-soft transition-colors hover:border-accent hover:text-accent"
            >
              See our work
            </NavLink>
          </div>
        </motion.div>

        {/* Right: laptop mockup */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Laptop screen */}
            <div className="rounded-2xl border-[6px] border-ink bg-ink p-2 shadow-soft">
              <div className="overflow-hidden rounded-lg">
                {/* Screenshot of product dashboard shown inside the laptop screen */}
                <img
                  // src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Dashboard preview shown on laptop screen"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
            {/* Laptop base */}
            <div className="mx-auto h-3 w-[92%] rounded-b-xl bg-ink/90" />
            <div className="mx-auto h-1.5 w-[60%] rounded-b-md bg-ink/60" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -left-6 top-8 hidden rounded-xl border border-line bg-white px-4 py-3 shadow-card md:block"
            >
              <p className="text-xs font-medium text-ink-soft">Shipped this week</p>
              <p className="font-display text-lg font-semibold text-accent">12 releases</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}