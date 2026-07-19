import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../components/SectionHeading.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";
import { PROJECTS } from "../../data/projectsData.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WorkSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PROJECTS;
    return PROJECTS.filter((project) =>
      [project.title, project.category, project.description, ...project.tags]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section id="work" className="scroll-mt-24 border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our work"
            description="A look at recent builds - click into any project for the full case study."
          />
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search projects, tech, category..."
          />
        </div>

        {filtered.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} variants={item} />
            ))}
          </motion.div>
        ) : (
          <p className="mt-10 text-sm text-ink-soft">
            No projects match "{query}". Try a different search.
          </p>
        )}
      </div>
    </section>
  );
}
