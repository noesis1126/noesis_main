import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProjectById, getOtherProjects } from "../data/projectsData.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ConsultationCard from "../components/ConsultationCard.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WorkDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Unknown project id - send back to the archive instead of a dead page.
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const otherProjects = getOtherProjects(project.id, 3);

  return (
    <>
      <section className="border-b border-line bg-cream-soft">
        <div className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
          >
            <ArrowLeft size={15} />
            Back to work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {project.category}
            </span>
            <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-base text-ink-soft sm:text-lg">{project.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mt-8 grid max-w-2xl grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Role</p>
              <p className="mt-1 text-sm font-semibold text-ink">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Year</p>
              <p className="mt-1 text-sm font-semibold text-ink">{project.year}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Category</p>
              <p className="mt-1 text-sm font-semibold text-ink">{project.category}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-line shadow-card"
        >
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">The objective</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{project.description}</p>

            {project.highlights && project.highlights.length > 0 ? (
              <ul className="mt-6 flex flex-col gap-3">
                {project.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-ink-soft">
                    <Check size={16} className="mt-1 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Delivering high performance while keeping the interface clean and intuitive was the
                priority throughout. We prioritized a robust architecture, accessibility, and a
                modern design system to bring {project.title} to life end to end.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Tech stack</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Check size={15} className="shrink-0 text-accent" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream shadow-soft"
              >
                Visit live project
                <ArrowUpRight size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="border-t border-line bg-cream-soft">
          <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              More projects
            </h2>
            <p className="mt-2 text-base text-ink-soft">A few other builds worth a look.</p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {otherProjects.map((p) => (
                <ProjectCard key={p.id} project={p} variants={item} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <ConsultationCard />
    </>
  );
}
