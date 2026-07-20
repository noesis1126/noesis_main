import { Globe, Smartphone, Layers, Bot, Zap, ShieldCheck } from "lucide-react";

export const STRENGTHS = [
  {
    id: "web-saas",
    Icon: Globe,
    eyebrow: "Web & SaaS",
    title: "Production-grade web products",
    tagline: "From marketing sites to full-stack SaaS — built to perform, scale, and convert.",
    description:
      "We design and engineer web products that go beyond aesthetics. Every site and platform we ship is performance-optimised, accessible, and architected to scale with your business — whether that's a conversion-focused marketing site, a complex multi-tenant SaaS platform, or anything in between.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "React / Next.js single-page and server-rendered apps",
      "REST & GraphQL APIs with full authentication flows",
      "CMS integration and headless architecture",
      "Core Web Vitals optimised, SEO-ready from the start",
      "Multi-tenant SaaS with role-based access control",
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", body: "We map your goals, users, and constraints into a clear technical scope before a single line of code is written." },
      { step: "02", title: "Design & Prototype", body: "High-fidelity Figma prototypes validated with stakeholders so there are zero surprises during development." },
      { step: "03", title: "Build & Review", body: "Weekly demo cycles with working software — not slide decks — so you can give real feedback on real progress." },
      { step: "04", title: "Launch & Optimise", body: "Zero-downtime deployment, post-launch monitoring, and a performance baseline set on day one." },
    ],
    stack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "GraphQL", "Redis"],
    projectIds: ["gcon-nanded", "it-is-my-town", "mane-mess"],
  },
  {
    id: "mobile",
    Icon: Smartphone,
    eyebrow: "Mobile Apps",
    title: "Native-quality mobile experiences",
    tagline: "iOS and Android apps that feel indistinguishable from the best on the store.",
    description:
      "We build cross-platform mobile apps with a native feel — smooth 60fps animations, platform-native gestures, and real-time features — delivered for both iOS and Android from a single codebase. From Play Store submission to App Store review, we handle the full lifecycle.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Cross-platform iOS & Android with Flutter / React Native",
      "Real-time features via WebSocket & WebRTC",
      "Push notifications, deep linking, offline support",
      "Google Play & App Store end-to-end deployment",
      "Native gestures, animations, and haptic feedback",
    ],
    process: [
      { step: "01", title: "UX Research & Flows", body: "User journey mapping and screen flow architecture before any design work begins." },
      { step: "02", title: "UI Design & Component System", body: "Platform-native design systems for iOS (HIG) and Android (Material You) from a single Figma source." },
      { step: "03", title: "Development & QA", body: "Parallel dev and QA on real devices across screen sizes, OS versions, and network conditions." },
      { step: "04", title: "Store Submission & Launch", body: "We manage metadata, screenshots, and the review process for both Play Store and App Store." },
    ],
    stack: ["Flutter", "React Native", "Firebase", "WebRTC", "WebSocket", "Swift", "Kotlin"],
    projectIds: ["zoomtod", "bunny"],
  },
  {
    id: "full-stack",
    Icon: Layers,
    eyebrow: "Full-Stack Ownership",
    title: "One team. Design to deployment.",
    tagline: "A single senior team owns your entire product — nothing falls through the cracks.",
    description:
      "Most vendors hand you off. Designers to developers to DevOps. We don't. A single senior team owns your entire product — UI, frontend, backend, and infrastructure. That means one point of accountability, no context loss between handoffs, and a product that's coherent all the way down.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "End-to-end ownership from wireframe to production",
      "Micro-service and monolith architecture depending on need",
      "Cloud infrastructure on AWS, GCP, or Vercel",
      "CI/CD pipelines, Docker, zero-downtime deployments",
      "Post-launch support and iterative product evolution",
    ],
    process: [
      { step: "01", title: "Architecture Design", body: "We pick the right architecture for your scale and budget — not the most complex one, the most appropriate one." },
      { step: "02", title: "Infrastructure Setup", body: "Cloud environments, staging pipelines, and CI/CD configured before feature work begins." },
      { step: "03", title: "Full-Stack Development", body: "Frontend, backend, and infra developed in lockstep by the same team — no translation layer." },
      { step: "04", title: "Ongoing Partnership", body: "We stick around post-launch as your technical partner — monitoring, iterating, and scaling with you." },
    ],
    stack: ["React.js", "Node.js", "Spring Boot", "AWS", "Docker", "PostgreSQL", "Terraform"],
    projectIds: ["sitara-it", "agrovedant", "godrej-safety"],
  },
  {
    id: "ai-ml",
    Icon: Bot,
    eyebrow: "AI & ML",
    title: "Intelligent products, not just AI wrappers",
    tagline: "LLM-powered features and ML pipelines embedded into production — not just demos.",
    description:
      "We build AI that actually ships. Not proof-of-concepts or ChatGPT wrappers — but production AI features deeply integrated into your product: document processing pipelines, intelligent search, LLM-powered workflows, and custom ML models that run reliably at scale.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "LLM integration & prompt engineering (GPT-4, Gemini, Claude)",
      "RAG pipelines with vector databases",
      "Custom ML model fine-tuning and deployment",
      "Intelligent workflow automation and document processing",
      "AI-powered dashboards and analytics",
    ],
    process: [
      { step: "01", title: "Problem Framing", body: "We identify exactly where AI adds genuine value in your product — and where it doesn't." },
      { step: "02", title: "Prototype & Validate", body: "Fast proof-of-concept to validate accuracy and latency before committing to full build." },
      { step: "03", title: "Production Integration", body: "AI features integrated as first-class product features — with error handling, fallbacks, and monitoring." },
      { step: "04", title: "Monitor & Improve", body: "Ongoing evaluation and fine-tuning as your data grows and user patterns emerge." },
    ],
    stack: ["OpenAI API", "FastAPI", "LangChain", "Pinecone", "AWS Lambda", "Python", "HuggingFace"],
    projectIds: ["maha-gps", "flygen"],
  },
  {
    id: "delivery",
    Icon: Zap,
    eyebrow: "Delivery Speed",
    title: "Working software in weeks, not quarters",
    tagline: "Fixed-scope. Senior team. First delivery before most teams finish writing specs.",
    description:
      "Speed without corners cut. Fixed-scope contracts eliminate scope creep. A senior-only team eliminates re-work from inexperience. Weekly demos keep feedback loops tight. The result: you see working software in your hands within weeks — not months.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Fixed-scope contracts with clear deliverables up front",
      "Agile sprints with weekly working-software demos",
      "No hand-offs — same team from kick-off to launch",
      "Async-first communication with 12hr response SLA",
      "Parallel design and development tracks",
    ],
    process: [
      { step: "01", title: "Kick-off & Scope Lock", body: "A structured kick-off locks deliverables, milestones, and success criteria in writing before work begins." },
      { step: "02", title: "Sprint 1 — Core Foundation", body: "Architecture, design system, and primary user flows — built and demoed within the first week." },
      { step: "03", title: "Iterative Feature Delivery", body: "Weekly demos with working software. Feedback applied the following sprint, not 'later'." },
      { step: "04", title: "Launch & Handover", body: "Production deployment, documentation, and a full handover so your team can own what we built." },
    ],
    stack: ["Agile", "Figma", "Linear", "Notion", "GitHub", "Vercel", "CI/CD"],
    projectIds: ["herbs-magic", "tarushpranaa", "babaji-ki-buti"],
  },
  {
    id: "senior-team",
    Icon: ShieldCheck,
    eyebrow: "Senior-Only Team",
    title: "No juniors. No surprises.",
    tagline: "Every line written and reviewed by engineers with 5+ years of production experience.",
    description:
      "Junior engineers learn on your project. Ours don't. Every engineer on your engagement has shipped production systems used by real users at scale. That means fewer bugs, better architecture decisions, and code your internal team can actually maintain after we hand off.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Senior engineers with 5+ years of production experience",
      "Code reviews on every pull request, no exceptions",
      "Secure-by-design: OWASP, GDPR-aware, pen-test ready",
      "Comprehensive documentation and knowledge transfer",
      "Long-term technical partnership beyond delivery",
    ],
    process: [
      { step: "01", title: "Dedicated Senior Assignment", body: "You meet your lead engineer at kick-off. Same person for the life of the project — no surprise swaps." },
      { step: "02", title: "Architecture Review", body: "Every system design reviewed by a second senior before implementation begins." },
      { step: "03", title: "Peer Code Review", body: "100% of code reviewed by a second senior engineer before merge — no exceptions." },
      { step: "04", title: "Documentation & Transfer", body: "Full technical documentation and a handover session so your team can maintain what we built." },
    ],
    stack: ["TypeScript", "Jest", "Cypress", "OWASP", "WCAG 2.1", "Code Review", "Documentation"],
    projectIds: ["planet-crusader", "mahipatsinh-foundation", "takjas"],
  },
];

export function getStrengthById(id) {
  return STRENGTHS.find((s) => s.id === id);
}

export function getOtherStrengths(id, count = 3) {
  return STRENGTHS.filter((s) => s.id !== id).slice(0, count);
}
