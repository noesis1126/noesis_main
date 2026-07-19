import ServicesList from "../sections/services/ServicesList.jsx";
import EngagementModelsSection from "../sections/services/EngagementModelsSection.jsx";
import ConsultationCard from "../components/ConsultationCard.jsx";

export default function Services() {
  return (
    <>
      <ServicesList />
      <EngagementModelsSection />
      <ConsultationCard />
    </>
  );
}
