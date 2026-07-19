import { motion } from "framer-motion";
import SectionHeading from "../../components/SectionHeading.jsx";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your goals, users, and constraints, then scope the build together.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes and prototypes get validated with real users before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    description: "Weekly demos, transparent progress, and a codebase your own team could pick up.",
  },
  {
    number: "04",
    title: "Launch & support",
    description: "We ship, monitor, and stay on as a technical partner for whatever comes next.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
      <SectionHeading
        eyebrow="How we work"
        title="A straightforward process"
        description="The same four steps on every engagement, whether it's a two-week sprint or a multi-quarter build."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
        className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step) => (
          <motion.div key={step.number} variants={item} className="relative flex gap-4 pl-0 sm:block sm:gap-0">
            <span className="font-display text-2xl font-semibold text-accent opacity-30 sm:text-sm sm:opacity-100">{step.number}</span>
            <div className="sm:mt-2">
              <h3 className="text-lg font-semibold text-ink sm:mt-0">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </div>
            <div className="mt-5 hidden h-px w-full bg-line sm:block" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
