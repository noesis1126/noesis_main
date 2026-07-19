import { motion } from "framer-motion";

// Reusable eyebrow + heading + description block used at the top of sections
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">{title}</h2>
      {description && <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">{description}</p>}
    </motion.div>
  );
}
