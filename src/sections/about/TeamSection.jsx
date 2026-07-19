import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Engineering Lead",
    // REPLACE ME: team member photo
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Priya Nair",
    role: "Product Design Lead",
    // REPLACE ME: team member photo
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Senior Full-Stack Engineer",
    // REPLACE ME: team member photo
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sofia Bianchi",
    role: "Client & Consulting Lead",
    // REPLACE ME: team member photo
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TeamSection() {
  return (
    <section className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="The people"
          title="Our team"
          description="A small group of designers and engineers who work on every project together."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-5">
                <div>
                  <p className="font-semibold text-ink">{member.name}</p>
                  <p className="text-sm text-ink-soft">{member.role}</p>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="shrink-0 text-ink-soft transition-colors hover:text-accent"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
