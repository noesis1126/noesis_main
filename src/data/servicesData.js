import { Globe, Smartphone, PenTool, ShoppingCart, Layers, Bot } from "lucide-react";
import { WhatsAppIcon } from "../components/icons.jsx";

// ---------------------------------------------------------------------------
// Single source of truth for the services grid. Both the Home page preview
// and the full Services page render from this same list via
// src/components/ServicesGrid.jsx - edit it once here and both pages update.
// ---------------------------------------------------------------------------

export const SERVICES = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Fast, scalable, SEO-ready marketing sites and web apps with modern stacks.",
    features: ["React / Next.js apps", "REST & GraphQL APIs", "CMS integration", "SEO & Core Web Vitals"],
    // REPLACE ME: service thumbnail image
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feel iOS and Android apps powered by React Native and Swift.",
    features: ["iOS & Android", "React Native & Flutter", "Push notifications", "App Store deployment"],
    // Highlighted integrations shown as icon badges on this card only.
    integrations: [
      { icon: WhatsAppIcon, label: "WhatsApp" },
      { icon: Bot, label: "Chatbot" },
    ],
    // REPLACE ME: service thumbnail image
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design",
    description: "Beautiful, intuitive product experiences crafted by senior designers.",
    features: ["UX research & wireframes", "Design systems", "Interactive prototypes", "Accessibility (WCAG 2.1)"],
    // REPLACE ME: service thumbnail image
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "ecommerce-development",
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Shopify, headless and custom commerce that converts visitors into buyers.",
    features: ["Custom storefronts", "Payment gateway integration", "Inventory & order management", "Conversion optimisation"],
    // REPLACE ME: service thumbnail image
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "custom-software-development",
    icon: Layers,
    title: "Custom Software Development",
    description: "Internal tools, dashboards and SaaS platforms built for scale and security.",
    features: ["Enterprise SaaS platforms", "Internal tools & dashboards", "API & third-party integrations", "Legacy system modernisation"],
    // REPLACE ME: service thumbnail image
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "ai-automation-solutions",
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "LLM-powered features, workflow automation and intelligent integrations.",
    features: ["LLM integration & fine-tuning", "RAG pipelines", "Intelligent agents & chatbots", "Business workflow automation"],
    // REPLACE ME: service thumbnail image
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80",
  },
];

export function getServiceById(id) {
  return SERVICES.find((service) => service.id === id);
}

export function getOtherServices(id, count = 3) {
  return SERVICES.filter((service) => service.id !== id).slice(0, count);
}
