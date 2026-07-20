import { motion } from "framer-motion";
import { FileCheck, Users, LifeBuoy, Clock } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";

const models = [
  {
    icon: FileCheck,
    title: "Fixed-Price Project",
    description:
      "Defined scope, agreed deliverables and a fixed timeline. Best for well-scoped software builds.",
  },
  {
    icon: Clock,
    title: "Time and Material Project",
    description:
      "Billed for actual hours and resources used. Best when scope evolves as the project takes shape.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A dedicated squad of engineers integrated into your workflow. Best for startups and scale-ups.",
  },
  {
    icon: LifeBuoy,
    title: "Support Retainer",
    description:
      "Monthly SLA-backed engineering capacity for ongoing development, security patches and feature work.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function EngagementModelsSection() {
  return (
    <section className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="Engagement models"
          title="Flexible ways to work together"
          description="Pick the model that fits how your team already operates - all three come with the same senior engineers."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {models.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
