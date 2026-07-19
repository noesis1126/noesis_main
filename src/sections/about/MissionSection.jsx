import { motion } from "framer-motion";
import { COMPANY_NAME } from "../../data/siteData.js";

export default function MissionSection() {
  return (
    <section className="mx-auto max-w-content px-6 pb-14 pt-20 md:px-10 md:pt-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About us
          </span>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
            We build software like we'd want it built for us.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-4 text-base leading-relaxed text-ink-soft"
        >
          <p>
            {COMPANY_NAME} started as a two-person team building internal tools for other startups.
            Today we're a small studio that designs, builds, and ships SaaS products and websites for
            founders and growing teams.
          </p>
          <p>
            Our mission is simple: fewer handoffs, clearer communication, and software that's built to
            be maintained - not just demoed. We work directly with founders and product leads, not
            through layers of account managers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
