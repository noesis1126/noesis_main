import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Reusable project card — used on Home (SimilarProjectsSection), About
// (ProjectsSection), and Work (WorkSection). Clicking the card or the arrow
// navigates to the full case study at /work/:id.
export default function ProjectCard({ project, variants }) {
  return (
    <motion.div variants={variants} whileHover={{ y: -4 }} className="h-full">
      <Link
        to={`/work/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-soft"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            {project.category}
          </span>
          <div className="mt-1 flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
          <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
            View case study
            <ArrowUpRight size={15} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
