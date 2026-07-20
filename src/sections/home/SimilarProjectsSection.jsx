import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import { STRENGTHS } from "../../data/strengthsData.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SimilarProjectsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="OUR CORE STRENGTHS"
          title="What makes our work stand out"
          description="Six capabilities that define how we design, build, and ship. Click any to go deeper."
        />
        <Link
          to="/work"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent transition-transform hover:translate-x-0.5"
        >
          View all work
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {STRENGTHS.map(({ id, Icon, eyebrow, title, tagline, image }) => (
          <motion.div key={id} variants={item} whileHover={{ y: -4 }}>
            <Link
              to={`/strengths/${id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line shadow-card"
            >
              {/* Image with gradient scrim */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                {/* Icon badge */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cream backdrop-blur-sm ring-1 ring-white/20 transition-colors group-hover:bg-accent group-hover:ring-accent">
                  <Icon size={17} />
                </div>
              </div>

              {/* Text body on white */}
              <div className="flex flex-1 flex-col bg-white p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {eyebrow}
                </span>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-2">{tagline}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                  Explore
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
