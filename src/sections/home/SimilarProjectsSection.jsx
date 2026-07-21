import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import { STRENGTHS } from "../../data/strengthsData.js";
import { useRef, useState, useEffect } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function StrengthCard({ id, Icon, eyebrow, title, tagline, image }) {
  return (
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
  );
}

export default function SimilarProjectsSection() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / STRENGTHS.length;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), STRENGTHS.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="mx-auto max-w-content py-14 md:px-10 md:py-24">
      <div className="flex flex-col items-start gap-4 px-6 md:flex-row md:items-end md:justify-between md:gap-6 md:px-0">
        <SectionHeading
          eyebrow="OUR CORE STRENGTHS"
          title="What makes our work stand out"
          description="Six capabilities that define how we design, build, and ship. Tap any to go deeper."
        />
        <Link
          to="/work"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-2.5 text-sm font-medium text-accent transition-transform active:scale-[0.97] md:border-none md:bg-transparent md:px-0 md:py-0 md:hover:translate-x-0.5"
        >
          View all work
          <ArrowUpRight size={15} />
        </Link>
      </div>

      {/* ── MOBILE (<md): horizontal snap-scroll carousel ──
          Peeking next card signals "more to swipe", each card gets
          full focus instead of competing in a tall stacked column. */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        className="relative mt-8 overflow-x-hidden md:hidden"
      >
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {STRENGTHS.map((strength) => (
            <motion.div
              key={strength.id}
              variants={item}
              className="w-[78%] shrink-0 snap-start xs:w-[70%]"
            >
              <StrengthCard {...strength} />
            </motion.div>
          ))}
          {/* trailing spacer so the last card can snap fully into view */}
          <div className="w-4 shrink-0" aria-hidden="true" />
        </div>

        {/* edge fade hinting there's more to scroll */}
        <div className="pointer-events-none absolute bottom-3 right-0 top-0 w-10 bg-gradient-to-l from-cream to-transparent" />

        {/* progress dots — reflect the actual active card */}
        <div className="mt-4 flex justify-center gap-1.5 px-6">
          {STRENGTHS.map((s, i) => (
            <span
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 bg-accent" : "w-1.5 bg-ink/15"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </motion.div>

      {/* ── TABLET / DESKTOP (md+): original grid, unchanged ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        className="mt-10 hidden gap-5 sm:grid-cols-2 md:grid lg:grid-cols-3"
      >
        {STRENGTHS.map((strength) => (
          <motion.div key={strength.id} variants={item} whileHover={{ y: -4 }}>
            <StrengthCard {...strength} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}