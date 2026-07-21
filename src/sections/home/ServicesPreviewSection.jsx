import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ServicesGrid from "../../components/ServicesGrid.jsx";

export default function ServicesPreviewSection() {
  return (
    <section className="border-t border-line bg-cream-soft">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <SectionHeading
            eyebrow="Services"
            title="End-to-end IT services"
            description="From a single feature to a full product build - one team, start to finish."
          />
          <NavLink
            to="/services"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent transition-transform active:scale-[0.97] md:border-none md:bg-transparent md:px-0 md:py-0 md:hover:translate-x-0.5"
          >
            View all services
            <ArrowUpRight size={15} />
          </NavLink>
        </div>

        <div className="mt-8 md:mt-10">
          <ServicesGrid variant="compact" columns={3} />
        </div>
      </div>
    </section>
  );
}