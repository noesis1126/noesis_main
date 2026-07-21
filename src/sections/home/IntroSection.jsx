import { motion } from "framer-motion";
import { Quote, Bot, Globe, Layers3, Sparkles } from "lucide-react";
import { PLACEHOLDER_TEAM_WORK } from "../../data/siteData.js";

const capabilities = [
  { label: "AI products", icon: Bot },
  { label: "Websites", icon: Globe },
  { label: "SaaS platforms", icon: Layers3 },
];

export default function IntroSection() {
  return (
    <section className="overflow-x-hidden border-y border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
        <div className="flex flex-col-reverse gap-10 items-center md:grid md:grid-cols-[1.3fr_1fr] md:gap-16">
          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full"
          >
            <Quote
              size={96}
              strokeWidth={1.5}
              className="pointer-events-none absolute -left-1 -top-3 h-14 w-14 text-accent/10 sm:-top-10 md:-left-4 md:-top-12 md:h-24 md:w-24"
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our approach
              </span>
            </div>

            <p className="relative mt-4 max-w-xl text-xl font-semibold leading-snug tracking-tight text-ink sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl">
              We design and build <span className="text-accent">AI products</span>, websites, and{" "}
              <span className="text-accent">SaaS platforms</span> end to end - from the first
              wireframe to production-ready infrastructure.
            </p>

            <p className="relative mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:mt-4 sm:text-base md:text-lg">
              After launch, we stick around as your long-term technical partner, helping you scale,
              improve, and evolve your product.
            </p>

            <div className="relative mt-5 h-1 w-12 rounded-full bg-accent md:mt-6" />

            <ul className="relative mt-6 flex flex-wrap gap-2 md:mt-7 md:gap-2.5">
              {capabilities.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-accent/15 bg-white px-3.5 py-2.5 text-sm font-medium text-ink shadow-[0_2px_8px_-4px_rgba(0,0,0,0.08)] md:py-2"
                >
                  <Icon size={15} className="shrink-0 text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: supporting image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border border-line shadow-card">
              <img
                src={PLACEHOLDER_TEAM_WORK}
                alt="Team collaborating on a product build"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover md:aspect-[4/5]"
              />
            </div>

            <div className="absolute -bottom-4 right-2 flex items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-card sm:-right-3 md:-bottom-5 md:-right-3 md:px-4 md:py-3 sm:right-auto">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 md:h-9 md:w-9">
                <Sparkles size={15} className="text-accent md:size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-ink md:text-sm">End-to-end</p>
                <p className="text-[11px] text-ink-soft md:text-xs">idea to launch</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}