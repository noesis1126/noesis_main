import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "98%", label: "Client retention" },
  { value: "12", label: "Industries served" },
  { value: "24hr", label: "Average response time" },
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
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient overlay so the stats stay readable on top of the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/90 to-ink/80" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto grid max-w-content grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:px-10 md:py-20"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item} className="flex flex-col gap-1">
            <p className="font-display text-3xl font-semibold text-cream md:text-4xl">{stat.value}</p>
            <p className="text-sm text-cream/60">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
