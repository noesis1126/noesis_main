import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getStrengthById, getOtherStrengths } from "../data/strengthsData.js";
import { getProjectById } from "../data/projectsData.js";
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

export default function StrengthDetail() {
  const { id } = useParams();
  const strength = getStrengthById(id);

  if (!strength) return <Navigate to="/" replace />;

  const { Icon, eyebrow, title, tagline, description, image, capabilities, process, stack, projectIds } = strength;
  const relatedProjects = projectIds.map((pid) => getProjectById(pid)).filter(Boolean);
  const otherStrengths = getOtherStrengths(id, 3);

  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden border-b border-line">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />

        <div className="relative mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cream/60 transition-colors hover:text-cream"
            >
              <ArrowLeft size={15} />
              Back to home
            </Link>

            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cream backdrop-blur-sm ring-1 ring-white/20">
                <Icon size={26} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                  {eyebrow}
                </span>
                <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl md:text-5xl">
                  {title}
                </h1>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                  {tagline}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Overview + Capabilities ── */}
      <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          {/* Left: prose overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Overview</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              How we approach {eyebrow.toLowerCase()}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{description}</p>
            <div className="mt-8 h-px w-12 rounded-full bg-accent" />
          </motion.div>

          {/* Right: capabilities checklist card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">What's included</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Tech we use</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-ink-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="border-y border-line bg-cream-soft">
        <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">How it works</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Our process</h2>
          <p className="mt-2 max-w-xl text-base text-ink-soft">
            A clear, repeatable process that keeps you informed at every step — no black boxes.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map(({ step, title: stepTitle, body }) => (
              <motion.div
                key={step}
                variants={item}
                className="relative rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <span className="font-display text-4xl font-bold text-accent/10 leading-none">{step}</span>
                <h3 className="mt-3 text-base font-bold text-ink">{stepTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Related work ── */}
      {relatedProjects.length > 0 && (
        <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Related work</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Projects that showcase this
          </h2>
          <p className="mt-2 text-base text-ink-soft">
            Real deliverables from real clients — each one built with these exact capabilities.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {relatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={item} />
            ))}
          </motion.div>
        </section>
      )}

      {/* ── Other strengths ── */}
      {otherStrengths.length > 0 && (
        <section className="border-t border-line bg-cream-soft">
          <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Other capabilities</h2>
            <p className="mt-2 text-base text-ink-soft">More ways we can help you build.</p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {otherStrengths.map((s) => {
                const OtherIcon = s.Icon;
                return (
                  <motion.div key={s.id} variants={item} whileHover={{ y: -4 }}>
                    <Link
                      to={`/strengths/${s.id}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line shadow-card"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
                        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cream backdrop-blur-sm ring-1 ring-white/20">
                          <OtherIcon size={16} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col bg-white p-5">
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{s.eyebrow}</span>
                        <h3 className="mt-1.5 text-base font-bold text-ink leading-snug">{s.title}</h3>
                        <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                          Explore
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      <ConsultationCard />
    </>
  );
}
