import { motion } from "framer-motion";

const stats = [
  { value: "15", label: "Projects shipped" },
  { value: "95%", label: "Client retention" },
  { value: "6", label: "Industries served" },
  { value: "12hr", label: "Average response time" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-line">
      {/* REPLACE ME: full-bleed background image behind the stats */}
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
        srcSet="
          https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=65 800w,
          https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70 1200w,
          https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80 1800w
        "
        sizes="100vw"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Mobile: even vertical overlay so both grid columns stay readable.
          md+: exact original left-to-right gradient, untouched. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/92 via-ink/88 to-ink/92 md:bg-gradient-to-r md:from-ink/95 md:via-ink/90 md:to-ink/80" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="relative mx-auto grid max-w-content grid-cols-2 gap-x-5 gap-y-9 px-5 py-14 sm:gap-8 md:grid-cols-4 md:px-10 md:py-20"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="flex flex-col gap-1.5 rounded-xl border border-cream/10 bg-cream/[0.06] p-4 md:gap-1 md:rounded-none md:border-0 md:border-l-2 md:border-cream/20 md:bg-transparent md:p-0 md:pl-3"
          >
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-[13px] leading-snug text-cream/70 sm:text-sm md:text-cream/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}