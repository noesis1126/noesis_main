import { motion } from "framer-motion";
import SectionHeading from "../../components/SectionHeading.jsx";
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

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
      <SectionHeading
        eyebrow="Selected work"
        title="Our projects"
        description="A few products and sites we've designed, built, and shipped for clients. Click into any project for the full case study."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-6 sm:grid-cols-2"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variants={item} />
        ))}
      </motion.div>
    </section>
  );
}
