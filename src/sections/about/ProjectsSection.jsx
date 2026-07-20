import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";
import { PROJECTS } from "../../data/projectsData.js";

const VISIBLE_COUNT = 4;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsSection() {
  const visibleProjects = PROJECTS.slice(0, VISIBLE_COUNT);
  const teaserProject = PROJECTS[VISIBLE_COUNT];
  const remainingCount = PROJECTS.length - VISIBLE_COUNT;

  return (
    <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
      <SectionHeading
        eyebrow="Selected work"
        title="Our projects"
        description="A few products and sites we've designed, built, and shipped for clients. Click into any project for the full case study."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="mt-10 grid gap-6 sm:grid-cols-2"
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variants={item} />
        ))}

        {teaserProject && remainingCount > 0 && (
          <motion.div variants={item} className="h-full">
            <Link
              to="/work"
              aria-label={`See ${remainingCount} more project${remainingCount === 1 ? "" : "s"} in our work section`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={teaserProject.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover blur-md scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6 blur-sm">
                <span className="text-xs font-medium uppercase tracking-wide text-accent">
                  {teaserProject.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-ink">{teaserProject.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {teaserProject.description}
                </p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/40 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-cream shadow-soft transition-transform group-hover:scale-110">
                  <Plus size={26} />
                </span>
                <span className="px-4 text-sm font-semibold text-white">
                  {remainingCount} more project{remainingCount === 1 ? "" : "s"} in our work
                </span>
              </div>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
