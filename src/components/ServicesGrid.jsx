import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/servicesData.js";

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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`grid gap-6 ${gridCols}`}
    >
      {services.map(({ id, icon: Icon, title, description, features, image, integrations }) => {
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

            <div className="flex flex-1 flex-col p-6">
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

                  {interactive ? (
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-accent">
                        {isSelected ? "Showing related work \u2193" : "Tap to see related work"}
                      </span>
                      <Link
                        to={`/services/${id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
                      >
                        Details
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                      View details
                      <ArrowUpRight size={15} />
                    </span>
                  )}
                </>
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
            className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-all hover:shadow-soft ${
              isSelected ? "border-accent ring-2 ring-accent" : "border-line"
            }`}
          >
            {interactive ? (
              <div
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => onServiceClick(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onServiceClick(id);
                  }
                }}
                className={cardClasses}
              >
                {cardInner}
              </div>
            ) : (
              <Link to={`/services/${id}`} className={cardClasses}>
                {cardInner}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
