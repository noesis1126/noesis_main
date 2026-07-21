import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";

// REPLACE ME: swap in real client reviews once collected
const reviews = [
  {
    quote:
      "They scoped the build tightly, shipped on schedule, and the codebase was clean enough that our own team could pick it up without a handover call.",
    name: "Aditya Rao",
    role: "Founder, Zoomtod",
  },
  {
    quote:
      "Weekly demos meant we always knew exactly where the project stood. No surprises at launch, no scope creep along the way.",
    name: "Priya Nair",
    role: "Product Lead, Maha GPS",
  },
  {
    quote:
      "Senior engineers end to end - no juniors learning on our budget. That alone made the investment worth it.",
    name: "Karan Mehta",
    role: "CTO, It Is My Town",
  },
];

// Doubled so the strip can loop seamlessly at the halfway scroll point
const marqueeReviews = [...reviews, ...reviews];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ReviewCard({ review, fixedHeight }) {
  return (
    <div
      className={`relative flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-card md:p-6 ${
        fixedHeight ? "h-52 w-[78vw] max-w-[300px] shrink-0 xs:w-[280px]" : ""
      }`}
    >
      <Quote
        size={28}
        className="absolute right-5 top-5 text-accent/15 md:hidden"
        aria-hidden="true"
      />

      <div className="flex gap-0.5 text-accent" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <span className="sr-only">Rated 5 out of 5 stars</span>

      <p className="text-[15px] leading-relaxed text-ink-soft line-clamp-4 md:text-sm md:line-clamp-none">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-auto pt-2">
        <p className="truncate text-sm font-semibold text-ink">{review.name}</p>
        <p className="truncate text-[13px] text-ink-soft md:text-xs">{review.role}</p>
      </div>
    </div>
  );
}

function ReviewsMarquee() {
  const scrollerRef = useRef(null);
  const halfWidthRef = useRef(0);
  const rafRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Measure the width of one full set of cards (half the doubled track)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    halfWidthRef.current = el.scrollWidth / 2;
  }, []);

  // Autoplay loop: nudges real scrollLeft each frame, so it's the same
  // scroll position a manual drag would produce — no fighting between
  // a CSS transform and native touch scrolling.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const speedPxPerFrame = 0.6; // tune feel here — higher = faster

    const tick = () => {
      if (!isPaused && el) {
        el.scrollLeft += speedPxPerFrame;
        // Wrap seamlessly: once we've scrolled past the first full set,
        // jump back by exactly that width (identical content underneath,
        // so the jump is invisible).
        if (halfWidthRef.current && el.scrollLeft >= halfWidthRef.current) {
          el.scrollLeft -= halfWidthRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  const handleInteractionStart = () => {
    clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleInteractionEnd = () => {
    // Also normalize scrollLeft in case the user dragged past an edge,
    // so autoplay resumes from a sane position instead of snapping.
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      const el = scrollerRef.current;
      if (el && halfWidthRef.current) {
        if (el.scrollLeft >= halfWidthRef.current) {
          el.scrollLeft -= halfWidthRef.current;
        } else if (el.scrollLeft < 0) {
          el.scrollLeft += halfWidthRef.current;
        }
      }
      setIsPaused(false);
    }, 2000); // resume 2s after the user lets go
  };

  return (
    <div className="relative mt-8 md:hidden">
      <div
        ref={scrollerRef}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onWheel={handleInteractionStart}
        className="flex touch-pan-x gap-4 overflow-x-auto pl-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {marqueeReviews.map((review, idx) => (
          <ReviewCard key={`${review.name}-${idx}`} review={review} fixedHeight />
        ))}
      </div>

      {/* edge fades so cards don't feel clipped at the viewport edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-8 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-content py-14 md:px-10 md:py-24">
      <div className="px-5 md:px-0">
        <SectionHeading
          eyebrow="Client reviews"
          title="What clients say about working with us"
          description="Feedback from the founders and teams we've shipped software with."
        />
      </div>

      {/* ── MOBILE (<md): auto-playing + hand-draggable strip ── */}
      <ReviewsMarquee />

      {/* ── TABLET / DESKTOP (md+): original grid, unchanged ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="mt-8 hidden gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid lg:grid-cols-3"
      >
        {reviews.map((review) => (
          <motion.div key={review.name} variants={item}>
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}