import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="border-y border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Quote size={32} className="text-accent/40" strokeWidth={2.5} />
            <p className="mt-4 max-w-xl text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              We're a small, senior team that designs and builds{" "}
              <span className="text-accent">SaaS products</span> and{" "}
              <span className="text-accent">websites</span> end to end — from the first wireframe
              to production infrastructure — and stick around as a technical partner after
              launch.
            </p>
          </motion.div>

          {/* Right: supporting image with a floating badge, echoes the hero mockup treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
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
              className="absolute -bottom-6 -left-6 hidden rounded-xl border border-line bg-white px-4 py-3 shadow-soft sm:block"
            >
              <p className="text-xs font-medium text-ink-soft">Team size</p>
              <p className="font-display text-lg font-semibold text-accent">Senior only</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
