import { motion } from "framer-motion";

// Reusable eyebrow + heading + description block used at the top of sections
export default function SectionHeading({ eyebrow, title, description, align = "left", titleClassName = "" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
       className={`flex max-w-2xl flex-col gap-2.5 sm:gap-3 ${alignment}`}
    >
      {eyebrow && (
        <>
          {/* Mobile: pill chip with a dot, matching the Hero eyebrow badge
              so every section opens the same way on a phone. */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 sm:hidden">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {eyebrow}
            </span>
          </span>

          {/* Tablet/desktop: original plain label, unchanged */}
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:inline">
            {eyebrow}
          </span>
        </>
      )}
      <h2 className={`text-[1.625rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-3xl md:text-4xl ${titleClassName}`}>{title}</h2>
      {description && <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">{description}</p>}
    </motion.div>
  );
}