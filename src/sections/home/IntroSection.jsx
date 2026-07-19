import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="border-y border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          {/* Left: statement - bold pull-quote treatment, with an oversized
              quote mark sitting behind the text as a watermark rather than
              a small icon floating above it. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <Quote
              size={96}
              strokeWidth={1.5}
              className="pointer-events-none absolute -left-3 -top-8 text-accent/10 sm:-top-10 md:-left-4 md:-top-12"
              aria-hidden="true"
            />

            <span className="relative text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Our approach
            </span>

            <p className="relative mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl">
              We're a small, senior team that designs and builds{" "}
              <span className="text-accent">SaaS products</span> and{" "}
              <span className="text-accent">websites</span> end to end - from the first wireframe
              to production infrastructure - and stick around as a technical partner after
              launch.
            </p>

            <div className="relative mt-6 h-1 w-12 rounded-full bg-accent" />
          </motion.div>

          {/* Right: supporting image with a floating badge, echoes the hero mockup treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border border-line shadow-card">
              {/* REPLACE ME: photo representing the team at work */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating on a product build"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-3 rounded-xl border border-line bg-white px-3 py-2 shadow-soft sm:-bottom-6 sm:-left-6 sm:px-4 sm:py-3"
            >
              <p className="text-[10px] font-medium text-ink-soft sm:text-xs">Team size</p>
              <p className="font-display text-base font-semibold text-accent sm:text-lg">Senior only</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
