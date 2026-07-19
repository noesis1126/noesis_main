import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import ServicesGrid from "../../components/ServicesGrid.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";
import { SERVICES, getServiceById } from "../../data/servicesData.js";
import { getProjectsForService } from "../../data/projectsData.js";

const workContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const workItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ServicesList() {
  const [query, setQuery] = useState("");

  // Selected service is kept in the URL (?service=web-development) so that
  // clicking into a project and pressing Back returns to this exact same
  // filtered view - not a fresh, unfiltered page.
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("service");
  const selectedService = selectedId ? getServiceById(selectedId) : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter((service) =>
      [service.title, service.description, ...service.features]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const relatedProjects = useMemo(() => {
    if (!selectedService) return [];
    return getProjectsForService(selectedService.id, 3);
  }, [selectedService]);

  function handleServiceClick(id) {
    // Clicking the already-selected service again toggles the filter off.
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (next.get("service") === id) {
          next.delete("service");
        } else {
          next.set("service", id);
        }
        return next;
      },
      { replace: false }
    );
  }

  // Smoothly bring the related-work panel into view on mobile, where it
  // would otherwise render off-screen below the tapped card.
  useEffect(() => {
    if (!selectedId) return;
    const panel = document.getElementById("related-work-panel");
    if (panel) {
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedId]);

  return (
    <section className="mx-auto max-w-content px-6 pb-14 pt-20 md:px-10 md:pt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end IT services"
          description="Choose a specific service or embed our team into yours. Senior, certified engineers on every engagement - no juniors, no offshore handoffs."
        />
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search services..."
        />
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
        Tap a service to see related work
      </p>

      <div className="mt-6">
        {filtered.length > 0 ? (
          <ServicesGrid
            variant="full"
            columns={3}
            services={filtered}
            selectedId={selectedId}
            onServiceClick={handleServiceClick}
          />
        ) : (
          <p className="text-sm text-ink-soft">No services match "{query}". Try a different search.</p>
        )}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            id="related-work-panel"
            key={selectedService.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="scroll-mt-24 overflow-hidden"
          >
            <div className="mt-10 rounded-2xl border border-line bg-cream-soft p-6 md:p-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Related work
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-ink">
                    Projects that used {selectedService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => handleServiceClick(selectedService.id)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <X size={14} />
                  Close
                </button>
              </div>

              <motion.div
                variants={workContainer}
                initial="hidden"
                animate="show"
                className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} variants={workItem} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
