import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ServicesGrid from "../../components/ServicesGrid.jsx";

export default function ServicesPreviewSection() {
  return (
    <section className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end IT services"
            description="From a single feature to a full product build — one team, start to finish."
          />
          <NavLink
            to="/services"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent transition-transform hover:translate-x-0.5"
          >
            View all services
            <ArrowUpRight size={15} />
          </NavLink>
        </div>

        <div className="mt-10">
          <ServicesGrid variant="compact" columns={3} />
        </div>
      </div>
    </section>
  );
}
