import HeroSection from "../sections/home/HeroSection.jsx";
import IntroSection from "../sections/home/IntroSection.jsx";
import SimilarProjectsSection from "../sections/home/SimilarProjectsSection.jsx";
import ServicesPreviewSection from "../sections/home/ServicesPreviewSection.jsx";
import StatsSection from "../sections/home/StatsSection.jsx";
import ProcessSection from "../sections/home/ProcessSection.jsx";
import CTASection from "../sections/home/CTASection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SimilarProjectsSection />
      <ServicesPreviewSection />
      <StatsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
