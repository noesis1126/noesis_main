import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getServiceById, getOtherServices } from "../data/servicesData.js";
import { getProjectsForService } from "../data/projectsData.js";
import ConsultationCard from "../components/ConsultationCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = getServiceById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const otherServices = getOtherServices(service.id, 3);
  const relatedProjects = getProjectsForService(service.id, 3);

  return (
    <>
      <section className="border-b border-line bg-cream-soft">
        <div className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
          >
            <ArrowLeft size={15} />
            Back to services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 flex items-start gap-3 sm:gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent sm:h-14 sm:w-14">
              <Icon size={22} className="sm:hidden" />
              <Icon size={26} className="hidden sm:block" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Service
              </span>
              <h1 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-5xl">
                {service.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-10">
          <div>
            <div className="overflow-hidden rounded-3xl border border-line shadow-card">
              <img
                src={service.image}
                alt={`${service.title} illustration`}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight text-ink">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{service.description}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              In today's fast-paced digital landscape, having a robust, scalable solution isn't
              optional - it's a requirement. Our {service.title.toLowerCase()} engagements are
              built on senior engineering, clear communication, and industry best practices from
              day one.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
                What's included
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
                Ready to build?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Let's talk through your {service.title.toLowerCase()} needs and scope a plan.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream shadow-soft"
                >
                  Discuss this service
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-line bg-cream-soft">
          <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Related work
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Projects that used {service.title}
            </h2>
            <p className="mt-2 text-base text-ink-soft">
              A few case studies where we delivered this exact service.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variants={item} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {otherServices.length > 0 && (
        <section className="border-t border-line bg-cream-soft">
          <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Other services
            </h2>
            <p className="mt-2 text-base text-ink-soft">A few more ways we can help.</p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {otherServices.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <motion.div key={s.id} variants={item} whileHover={{ y: -4 }}>
                    <Link
                      to={`/services/${s.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-soft"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={s.image}
                          alt={`${s.title} illustration`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                          <OtherIcon size={18} />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                          {s.description}
                        </p>
                        <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                          View details
                          <ArrowUpRight size={15} />
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
