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
      "Official web presence for a government institution - a modern, accessible, high-performance platform serving thousands of students and faculty daily.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "Full Stack"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468265/gcon-nanded_t6nb6u.jpg",
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
      "A complete digital ecosystem - consumer portal, admin dashboard, QR-based attendance, subscription management, multi-language support, analytics, and a Firebase-powered real-time backend.",
    tags: ["React.js", "Firebase", "i18next", "QR Tech", "GA4"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468262/mane-mess_gj27vy.jpg",
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
      "A modern e-commerce frontend designed for maximum engagement and conversion - performance-optimized with smooth transitions and responsive layouts.",
    tags: ["React.js", "Tailwind CSS", "REST API", "React Router"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468268/herbs-magic_q7i4nm.jpg",
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
      "An intelligent tender management system with AI-driven document processing, keyword extraction, and automated candidate matching - deployed on serverless architecture.",
    tags: ["React.js", "FastAPI", "OpenAI API", "AWS Lambda"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468261/maha-gps_nrhdfd.jpg",
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
      "Full production lifecycle: Flutter mobile client + React.js web admin dashboard + Node.js/WebSocket backend - deployed live to the Google Play Store with active users.",
    ],
    tags: ["Flutter", "React.js", "Node.js", "WebRTC", "WebSocket"],
    image:
      "https://res.cloudinary.com/afytkgjc/image/upload/v1784468264/zoomtod_gl3o70.png",
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
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468136/ChatGPT_Image_Jul_19_2026_06_35_27_AM_km8vuu.png",
    liveUrl: "https://www.itismytown.com/",
    year: "2025",
    role: "Full Stack Development",
  },
  {
    id: "tarushpranaa",
    title: "Tarushpranaa",
    category: "Website · E-commerce",
    subtitle: "Tarot E-commerce & Consultation Platform",
    description:
      "A tarot-focused e-commerce platform combining product sales, guided courses, and expert consultation booking in one seamless experience.",
    highlights: [
      "Built a unified storefront for tarot decks and spiritual products alongside a structured course catalog for self-paced learning.",
      "Implemented an expert consultation booking flow, letting customers schedule and pay for one-on-one sessions with tarot practitioners.",
    ],
    tags: ["React.js", "E-commerce", "Courses", "Consultation Booking"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468266/proj_tarushpranaa_zk9qxt.png",
    liveUrl: "https://tarushpranaa.com/",
    year: "2026",
    role: "Full Stack Development",
  },

    {
    id: "flygen",
    title: "FlyGen",
    category: "SaaS · AI",
    subtitle: "AI-Powered Flyer & Template Generation Tool",
    description:
      "An intelligent flyer creation platform that auto-generates print-ready professional designs from user input, using AI image generation and dynamic SVG rendering.",
    highlights: [
      "Built a React.js interactive template editor with real-time preview alongside a Node.js backend handling AI API orchestration and the SVG rendering pipeline.",
      "Supports multiple templates with one-click export as a high-quality image or SVG, so users go from prompt to print-ready design in a few clicks.",
    ],
    tags: ["React.js", "Node.js", "AI API Integration", "SVG Generation"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784467493/ChatGPT_Image_Jul_19_2026_06_24_45_AM_kdzgbb.png",
    liveUrl: "https://flygen.achyutkr1122.workers.dev/",
    year: "2026",
    role: "Full Stack Development",
  },
  {
    id: "babaji-ki-buti",
    title: "Babaji Ki Buti",
    category: "Website · E-commerce",
    subtitle: "Ayurvedic Health & Wellness Store",
    description:
      "An e-commerce storefront for authentic Ayurvedic products, built to help customers discover remedies by health need - from immunity and energy to hair, skin, and digestive care.",
    highlights: [
      "Built a category-driven shopping experience letting customers browse products by wellness need such as immunity, energy & stamina, pain relief, hair & skin care, and digestive health.",
      "Implemented cart, wishlist, and account management alongside a promotional banner system for offers like free shipping and new product launches.",
    ],
    tags: ["React.js", "E-commerce", "Tailwind CSS", "Cart & Checkout"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468264/proj_bbjkb_iauuqt.png",
    liveUrl: "https://babajikibuti.com/home",
    year: "2026",
    role: "Full Stack Development",
  },
     {
    id: "sitara-it",
    title: "Sitara IT Innovations",
    category: "SaaS · FinTech",
    subtitle: "Core Banking Platform for Co-operatives & NBFCs",
    description:
      "An all-in-one core banking platform for co-operative societies and NBFCs, helping institutions digitize operations, manage compliance, and serve members with confidence.",
    highlights: [
      "Delivered a secure, NABARD & RCS-compliant core banking system with real-time transactions and multi-branch operations for day-to-day banking.",
      "Built dedicated modules for PACS, Credit Societies, Housing Societies, and Employee Societies, each tailored to how that institution type actually operates.",
      "Shipped Asia's first voice-enabled cooperative society software, purpose-built for blind and visually impaired members with multilingual voice interaction cutting transaction time by up to 90%.",
    ],
    tags: ["React.js", "Node.js", "Core Banking", "Compliance", "Multilingual"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784467141/ChatGPT_Image_Jul_19_2026_06_18_30_AM_vzudje.png",
    liveUrl: "https://www.sitarait.com/",
    year: "2026",
    role: "Full Stack Development",
  },
  {
    id: "agrovedant",
    title: "AgroVedant",
    category: "SaaS · Multi-Vendor E-commerce",
    subtitle: "Multi-Vendor Agriculture Marketplace",
    description:
      "A multi-vendor e-commerce marketplace connecting farmers and buyers to trade farming equipment, seeds, and crop-protection products, with real-time mandi price tracking and digital khata book records.",
    highlights: [
      "Built a multi-vendor storefront where farmers and vendors can list and sell their own products, with role-based access control (RBAC) governing admin, vendor, and buyer permissions.",
      "Implemented live mandi price tracking and a digital khata book for maintaining vendor/farmer transaction ledgers directly within the platform.",
      "Delivered order management, settlements, commissions, invoicing, and dashboards across vendor and admin roles on a full Spring Boot backend.",
    ],
    tags: ["React.js", "Spring Boot", "PostgreSQL", "Multi-Vendor", "RBAC"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468265/proj_agro_bes2gc.png",
    liveUrl: "https://gitest2.shop/",
    year: "2026",
    role: "Full Stack Development",
  },
  {
    id: "mahipatsinh-foundation",
    title: "Mahipatsinh Foundation",
    category: "Website · NGO",
    subtitle: "NGO Donation & Outreach Platform",
    description:
      "A donation-driven web platform for an NGO dedicated to child welfare, enabling one-time and recurring contributions, in-kind product donations, and campaign-led community outreach.",
    highlights: [
      "Built a secure donation flow supporting one-time and recurring payments, alongside a separate channel for donors to contribute physical products directly to the cause.",
      "Implemented campaign and community sections to showcase ongoing initiatives, CSR partnerships, and a media gallery highlighting the foundation's on-ground impact.",
    ],
    tags: ["React.js", "Payment Gateway", "Recurring Donations", "CMS"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784468267/proj_ngo_vaj9at.png",
    liveUrl: "https://mahipatsinhfoundation.org/",
    year: "2026",
    role: "Full Stack Development",
  },

   {
    id: "godrej-safety",
    title: "Godrej Safety",
    category: "Website · Industrial Safety",
    subtitle: "Plant Safety Management Portal",
    description:
      "A safety management portal built for Godrej's Shirval facility, giving the on-site safety department a central place to publish guidelines, log incidents, and keep staff aligned on workplace safety standards.",
    highlights: [
      "Built a digital safety guide covering plant protocols, PPE requirements, and hazard-specific checklists so staff always have the latest guidance on hand.",
      "Implemented incident/observation reporting and tracking so safety issues can be logged, reviewed, and closed out with a clear audit trail.",
      "Designed a clean, scannable dashboard layout suited to shop-floor and supervisor use on both desktop and mobile.",
    ],
    tags: ["React.js", "Tailwind CSS", "Safety Management", "Dashboard"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784465794/Screenshot_2026-07-19_055022_w8zsco.png",
    liveUrl: "https://godrej-safety.vercel.app/",
    year: "2026",
    role: "Full Stack Development",
  },
  {
    id: "planet-crusader",
    title: "Planet Crusader",
    category: "SaaS · NGO / Education",
    subtitle: "NGO-Sponsor-Student Engagement Platform",
    description:
      "A platform connecting NGOs, sponsors, and students - letting sponsors donate resources to schools while students discover, register for, and schedule community and environmental activities.",
    highlights: [
      "Built a sponsorship flow where NGOs and sponsors can contribute funds or in-kind materials directly to partner schools.",
      "Implemented student registration and scheduling for activities such as tree plantation drives and other community/environmental initiatives.",
      "Designed role-based views for NGOs, sponsors, schools, and students so each group sees the actions relevant to them.",
    ],
    tags: ["React.js", "NGO Platform", "Scheduling", "Full Stack"],
    image: "https://res.cloudinary.com/afytkgjc/image/upload/v1784466943/ChatGPT_Image_Jul_19_2026_06_15_10_AM_lbgply.png",
    liveUrl: "https://planet-crusader-sponcer-frontend.vercel.app/",
    year: "2026",
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
// case studies per service - first `count` ids are shown.
// ---------------------------------------------------------------------------
const SERVICE_PROJECT_MAP = {
  "web-development": ["gcon-nanded", "it-is-my-town", "mahipatsinh-foundation"],
  "mobile-app-development": ["zoomtod", "bunny", "it-is-my-town"],
  "ui-ux-design": ["herbs-magic", "babaji-ki-buti", "tarushpranaa"],
  "ecommerce-development": ["herbs-magic", "agrovedant", "babaji-ki-buti", "tarushpranaa", "it-is-my-town"],
  "custom-software-development": ["agrovedant", "mane-mess", "maha-gps", "godrej-safety"],
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