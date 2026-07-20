import { motion } from "framer-motion";
import { Star } from "lucide-react";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ReviewsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
      <SectionHeading
        eyebrow="Client reviews"
        title="What clients say about working with us"
        description="Feedback from the founders and teams we've shipped software with."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.name}
            variants={item}
            className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-card"
          >
            <div className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">&ldquo;{review.quote}&rdquo;</p>
            <div className="mt-auto pt-2">
              <p className="text-sm font-semibold text-ink">{review.name}</p>
              <p className="text-xs text-ink-soft">{review.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
