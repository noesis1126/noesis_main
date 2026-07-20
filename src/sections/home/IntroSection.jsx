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

            <div className="relative flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our approach
              </span>
            </div>

            <p className="relative mt-5 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl">
              We design and build <span className="text-accent">AI products</span>, websites, and{" "}
              <span className="text-accent">SaaS platforms</span> end to end - from the first
              wireframe to production-ready infrastructure.
            </p>

            <p className="relative mt-4 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              After launch, we stick around as your long-term technical partner, helping you scale,
              improve, and evolve your product.
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

          
          </motion.div>
        </div>
      </div>
    </section>
  );
}
