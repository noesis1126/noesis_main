import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PLACEHOLDER_CTA_BG } from "../../data/siteData.js";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl px-5 py-9 shadow-xl shadow-ink/20 sm:gap-8 sm:px-8 sm:py-12 md:flex-row md:items-center md:rounded-3xl md:px-14 md:py-16 md:shadow-none"
      >
        <img
          src={PLACEHOLDER_CTA_BG}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Smooth dark overlay so text stays legible on the photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/90 to-ink/75" />
        <div className="relative">
          <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight text-cream md:text-3xl">
            Have a product in mind?
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream/70 md:text-sm">
            Tell us what you're building. We'll reply within one business day with next steps.
          </p>
        </div>
        <NavLink
          to="/contact"
          className="group relative inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-[15px] font-medium text-cream transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto sm:py-3 md:text-sm"
        >
          Talk to us
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </NavLink>
      </motion.div>
    </section>
  );
}