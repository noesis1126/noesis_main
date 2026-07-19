import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ContactWidget from "./components/ContactWidget.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Work from "./pages/Work.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";
import Contact from "./pages/Contact.jsx";

// Scrolls the viewport to the top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ContactWidget />
    </div>
  );
}
