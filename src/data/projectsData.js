// ---------------------------------------------------------------------------
// Single source of truth for portfolio projects. Every project card on
// Home (SimilarProjectsSection), About (ProjectsSection), and Work
// (WorkSection) renders from this list, and each card links to
// /work/:id which renders the full case study via src/pages/WorkDetail.jsx.
//
// To add a new project: add an object below with a unique `id` (used in
// the URL, e.g. /work/bunny) and drop its image in /public/projects.
// ---------------------------------------------------------------------------

export const PROJECTS = [

  {
    id: "gcon-nanded",
    title: "GCON Nanded",
    category: "Website · Institutional",
    subtitle: "Institutional Web Platform",
    description:
      "Official web presence for a government institution — a modern, accessible, high-performance platform serving thousands of students and faculty daily.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "Full Stack"],
    image: "/projects/gcon-nanded.png",
    liveUrl: "https://gconnanded.in",
    year: "2025",
    role: "Full Stack Development",
  },
  {
    id: "mane-mess",
    title: "Mane Mess",
    category: "SaaS · Hospitality",
    subtitle: "Smart Tiffin Service Ecosystem",
    description:
      "A complete digital ecosystem — consumer portal, admin dashboard, QR-based attendance, subscription management, multi-language support, analytics, and a Firebase-powered real-time backend.",
    tags: ["React.js", "Firebase", "i18next", "QR Tech", "GA4"],
    image: "/projects/mane-mess.png",
    liveUrl: "https://manemess.in",
    year: "2025",
    role: "Full Stack Development",
  },
  {
    id: "herbs-magic",
    title: "Herbs Magic",
    category: "E-commerce",
    subtitle: "E-Commerce Platform",
    description:
      "A modern e-commerce frontend designed for maximum engagement and conversion — performance-optimized with smooth transitions and responsive layouts.",
    tags: ["React.js", "Tailwind CSS", "REST API", "React Router"],
    image: "/projects/herbs-magic.png",
    liveUrl: "https://www.theherbsmagic.com/",
    year: "2024",
    role: "Frontend Development",
  },
  {
    id: "maha-gps",
    title: "MahaGPS",
    category: "SaaS · AI",
    subtitle: "AI-Powered Tender Management",
    description:
      "An intelligent tender management system with AI-driven document processing, keyword extraction, and automated candidate matching — deployed on serverless architecture.",
    tags: ["React.js", "FastAPI", "OpenAI API", "AWS Lambda"],
    image: "/projects/maha-gps.png",
    liveUrl: "https://www.mahagps.com/",
    year: "2025",
    role: "Full Stack + AI",
  },
  {
    id: "bunny",
    title: "Bunny",
    category: "Mobile App",
    subtitle: "Consumer Mobile Experience",
    description:
      // REPLACE ME: swap this placeholder description for the real project summary once ready
      "A cross-platform mobile app built for a fast, native-feel consumer experience from day one. Case study details coming soon.",
    tags: ["Flutter", "Firebase", "REST API"],
    // REPLACE ME: swap this placeholder screenshot for the real project image
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    liveUrl: "",
    year: "2026",
    role: "Mobile Development",
  },

    {
    id: "zoomtod",
    title: "ZoomTod",
    category: "Mobile App · Communication",
    subtitle: "Real-Time Audio Communication Platform",
    description:
      "A cross-platform audio communication app enabling structured admin-to-participant voice sessions, optimized for low-bandwidth environments.",
    highlights: [
      "Implemented a permission-based speaking system for admins to selectively grant microphone access, ensuring controlled, structured audio sessions.",
      "Full production lifecycle: Flutter mobile client + React.js web admin dashboard + Node.js/WebSocket backend — deployed live to the Google Play Store with active users.",
    ],
    tags: ["Flutter", "React.js", "Node.js", "WebRTC", "WebSocket"],
    image:
      "/projects/zoomtod.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.zoomtod.dhs",
    year: "2026",
    role: "Full Stack + Mobile Development",
  },
  {
    id: "it-is-my-town",
    title: "It Is My Town",
    category: "Website · E-commerce",
    subtitle: "Hyperlocal Ecommerce Platform",
    description:
      "A web-based, multi-role hyperlocal ecommerce platform connecting buyers, sellers, and delivery/transport agents within a local town network.",
    highlights: [
      "Designed a seller-side storefront and listing management, buyer-side browsing/cart/checkout, and a delivery-agent workflow for real-time order pickup and drop tracking, backed by a SQL database.",
      "Implemented real-time GPS-based order tracking, Firebase push notifications, Razorpay payment gateway, and role-based access control (RBAC) from scratch.",
      "Delivered a scalable end-to-end shopping experience with 1,000+ active users across customer, seller, and delivery-agent roles.",
    ],
    tags: ["React.js", "ASP.NET Core", "SQL", "Razorpay", "Firebase"],
    image: "/projects/it-is-my-town.png",
    liveUrl: "https://www.itismytown.com/",
    year: "2025",
    role: "Full Stack Development",
  },
];

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}

export function getOtherProjects(id, count = 3) {
  return PROJECTS.filter((project) => project.id !== id).slice(0, count);
}

// ---------------------------------------------------------------------------
// Maps each service (see servicesData.js) to the project ids that best show
// off that service. Used to power the "click a service, see related work"
// filter on the Services page. Edit the arrays below to feature different
// case studies per service — first `count` ids are shown.
// ---------------------------------------------------------------------------
const SERVICE_PROJECT_MAP = {
  "web-development": ["gcon-nanded", "it-is-my-town", "herbs-magic"],
  "mobile-app-development": ["zoomtod", "bunny", "it-is-my-town"],
  "ui-ux-design": ["herbs-magic", "it-is-my-town", "mane-mess"],
  "ecommerce-development": ["herbs-magic", "it-is-my-town", "maha-gps"],
  "custom-software-development": ["mane-mess", "maha-gps", "gcon-nanded"],
  "ai-automation-solutions": ["maha-gps", "zoomtod", "mane-mess"],
};

export function getProjectsForService(serviceId, count = 3) {
  const ids = SERVICE_PROJECT_MAP[serviceId] || [];
  const matched = ids
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, count);

  // Fallback: if a service has no mapping (or fewer than `count` matches),
  // top up with other projects so the section is never empty.
  if (matched.length < count) {
    const usedIds = new Set(matched.map((p) => p.id));
    for (const project of PROJECTS) {
      if (matched.length >= count) break;
      if (!usedIds.has(project.id)) matched.push(project);
    }
  }
  return matched;
}
