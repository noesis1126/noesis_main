import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl px-8 py-12 md:flex-row md:items-center md:px-14 md:py-16"
      >
        {/* REPLACE ME: full-cover background image for the CTA card */}
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Smooth dark overlay so text stays legible on the photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/90 to-ink/75" />

        <div className="relative">
          <h2 className="text-2xl font-semibold tracking-tight text-cream md:text-3xl">
            Have a product in mind?
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
            Tell us what you're building. We'll reply within one business day with next steps.
          </p>
        </div>
        <NavLink
          to="/contact"
          className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Talk to us
          <ArrowUpRight size={16} />
        </NavLink>
      </motion.div>
    </section>
  );
}
