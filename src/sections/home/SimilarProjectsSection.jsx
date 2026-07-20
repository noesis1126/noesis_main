import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Bot, Layers, Smartphone, ShoppingCart, ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import { PROJECTS } from "../../data/projectsData.js";

// Pick one representative project per core service line for the homepage
// teaser. Swap the ids below to feature different case studies - the
// layout is built to take three.
const FEATURED_IDS = ["gcon-nanded", "zoomtod", "maha-gps"];
const featured = FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);

function iconForCategory(category = "") {
  const c = category.toLowerCase();
  if (c.includes("ai")) return Bot;
  if (c.includes("mobile")) return Smartphone;
  if (c.includes("commerce")) return ShoppingCart;
  if (c.includes("website")) return Globe;
  return Layers;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SimilarProjectsSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="OUR CORE STRENGTHS"
          title="What makes our work stand out"
          description="A closer look at the capabilities, experience, and thinking behind every solution we deliver."
        />
        <Link
          to="/work"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent transition-transform hover:translate-x-0.5"
        >
          View all work
          <ArrowUpRight size={15} />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featured.map((project) => {
          const Icon = iconForCategory(project.category);
          return (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-soft"
            >
              <Link to={`/work/${project.id}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>

                {/* Icon badge overlapping the image edge */}
                <div className="relative -mt-6 ml-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-cream shadow-soft">
                  <Icon size={20} />
                </div>

                <div className="p-6 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                    View case study
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
