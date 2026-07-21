import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/servicesData.js";
import { useRef, useState, useEffect } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// Reusable service card grid, shared by the Home page preview and the full
// Services page. `variant="full"` shows the feature checklist and a
// "Discuss this service" link; `variant="compact"` shows just the image,
// icon, title, and description. Both variants pull from the same data file.
//
// Pass `onServiceClick` + `selectedId` to switch cards from "navigate to
// /services/:id" into "toggle this service as the active filter" mode
// (used on the Services page to show related work below the grid). This is
// a plain onClick/tap handler so it works the same on mobile. A small
// "Details" link inside the card still navigates to the full service page,
// without triggering the toggle (it stops click propagation).
export default function ServicesGrid({
  variant = "full",
  columns = 3,
  services = SERVICES,
  selectedId,
  onServiceClick,
}) {
  const isFull = variant === "full";
  const interactive = typeof onServiceClick === "function";
  const gridCols =
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  // Only the compact, non-interactive preview (Home page) gets the mobile
  // carousel treatment. The full Services page has feature lists and
  // integration chips per card - too much content to swipe through, so it
  // keeps a plain stacked column on mobile like before.
  const useMobileCarousel = !isFull && !interactive;

  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!useMobileCarousel) return;
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / services.length;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), services.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [useMobileCarousel, services.length]);

  function renderCard({ id, icon: Icon, title, description, features, image, integrations }) {
    const isSelected = interactive && selectedId === id;

    const cardInner = (
      <>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={`${title} illustration`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Icon size={18} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>

          {isFull && (
            <>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {integrations && integrations.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                  {integrations.map(({ icon: IntegrationIcon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent"
                    >
                      <IntegrationIcon size={14} />
                      {label}
                    </span>
                  ))}
                </div>
              )}

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                View details
                <ArrowUpRight size={15} />
              </span>
            </>
          )}

          {!isFull && (
            <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
              Explore
              <ArrowUpRight size={14} />
            </span>
          )}
        </div>
      </>
    );

    const cardClasses = `flex flex-1 flex-col ${interactive ? "cursor-pointer" : ""} group`;

    return (
      <motion.div
        key={title}
        variants={item}
        whileHover={{ y: -4 }}
        className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-all hover:shadow-soft ${
          isSelected ? "border-accent ring-2 ring-accent" : "border-line"
        }`}
      >
        <Link to={`/services/${id}`} className={cardClasses}>
          {cardInner}
        </Link>
      </motion.div>
    );
  }

  if (!useMobileCarousel) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className={`grid gap-5 sm:gap-6 ${gridCols}`}
      >
        {services.map((service) => renderCard(service))}
      </motion.div>
    );
  }

  return (
    <>
      {/* ── MOBILE (<sm): horizontal snap-scroll carousel ──
          Same swipe-with-a-peek pattern as the strengths section, so the
          two Home page preview grids feel like one design language instead
          of a stacked column of cards competing for attention.
          NOTE: no outer -mx/px here anymore - cards run flush to the
          screen edges, no left/right gap before the first/last card. */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="relative overflow-x-hidden md:hidden"
      >
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => (
            <div key={service.id} className="w-[82%] shrink-0 snap-center xs:w-[75%]">
              {renderCard(service)}
            </div>
          ))}
          <div className="w-4 shrink-0" aria-hidden="true" />
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l from-cream-soft to-transparent" />

        <div className="mt-4 flex justify-center gap-1.5">
          {services.map((s, i) => (
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

      {/* ── TABLET / DESKTOP (sm+): original grid, unchanged ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className={`hidden gap-5 md:grid md:gap-6 ${gridCols}`}
      >
        {services.map((service) => renderCard(service))}
      </motion.div>
    </>
  );
}