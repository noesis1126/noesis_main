# NOESIS — Per-Page SEO Copy & Code

Paste the relevant `<SEO ... />` block into each page file, right after the
opening `<>` (or as the first child inside your existing top-level element).
Remember: `src/main.jsx` must already be wrapped in `HelmetProvider` (from
the previous fix) for these to work.

---

## Static pages

### src/pages/Home.jsx
```jsx
import SEO from "../components/SEO.jsx";

<SEO
  title="NOESIS - SaaS & Web Development Studio | Web, Mobile & AI Development"
  description="NOESIS is a senior-only development studio building websites, mobile apps, SaaS platforms, and AI-powered products — from design to deployment, one team, no hand-offs."
  path="/"
/>
```
Also add the Organization JSON-LD here (once, homepage only) — see the
bottom of this file.

### src/pages/About.jsx
```jsx
<SEO
  title="About NOESIS | Full-Stack Web, Mobile & AI Development Team"
  description="Meet NOESIS — a senior-only team building production-grade websites, mobile apps, AI features, and SaaS platforms end-to-end, with no juniors and no hand-off gaps."
  path="/about"
/>
```

### src/pages/Services.jsx
```jsx
<SEO
  title="Web Development, Mobile Apps & AI Services | NOESIS"
  description="Explore NOESIS's services: web development, mobile app development, UI/UX design, e-commerce development, custom software, and AI & automation solutions."
  path="/services"
/>
```

### src/pages/Work.jsx
```jsx
<SEO
  title="Our Work | Web, Mobile & SaaS Projects Built by NOESIS"
  description="Real projects delivered by NOESIS — government platforms, fintech core banking systems, AI-powered SaaS tools, e-commerce stores, and mobile apps."
  path="/work"
/>
```

### src/pages/Contact.jsx
```jsx
<SEO
  title="Contact NOESIS | Start Your Web, App, or SaaS Project"
  description="Get in touch with NOESIS to scope your website, mobile app, SaaS platform, or AI automation project. Free scoping call, senior team, fixed-scope delivery."
  path="/contact"
/>
```

### src/pages/PrivacyPolicy.jsx
```jsx
<SEO
  title="Privacy Policy | NOESIS"
  description="Read NOESIS's privacy policy covering how we collect, use, and protect information from visitors and clients."
  path="/privacy"
/>
```

### src/pages/TermsOfService.jsx
```jsx
<SEO
  title="Terms of Service | NOESIS"
  description="Read the terms of service governing use of the NOESIS website and engagement with our web, mobile, and SaaS development services."
  path="/terms"
/>
```

---

## Dynamic pages (pull copy straight from your data files)

These already have rich `title`/`description`/`tagline` fields in
`servicesData.js`, `projectsData.js`, and `strengthsData.js` — so instead of
hardcoding text, generate the SEO tags from the same object the page
already renders.

### src/pages/ServiceDetail.jsx
Wherever you currently do something like `const service = getServiceById(id)`,
add:
```jsx
import SEO from "../components/SEO.jsx";

<SEO
  title={`${service.title} Services | NOESIS`}
  description={service.description}
  path={`/services/${service.id}`}
/>
```
Add a not-found guard if you don't already have one, so this doesn't crash
on a bad `:id`:
```jsx
if (!service) return <SEO title="Service Not Found | NOESIS" description="This service could not be found." path="/services" />;
```

### src/pages/WorkDetail.jsx
Where you have `const project = getProjectById(id)`:
```jsx
import SEO from "../components/SEO.jsx";

<SEO
  title={`${project.title} — ${project.subtitle} | NOESIS Case Study`}
  description={project.description}
  path={`/work/${project.id}`}
  image={project.image}
  type="article"
/>
```

### src/pages/StrengthDetail.jsx
Where you have `const strength = getStrengthById(id)`:
```jsx
import SEO from "../components/SEO.jsx";

<SEO
  title={`${strength.title} | NOESIS`}
  description={strength.tagline}
  path={`/strengths/${strength.id}`}
/>
```

---

## Organization JSON-LD (Home.jsx only)

Add this once on the homepage. It uses the real contact info from
`siteData.js`. **Update the `sameAs` links to your real social profiles** —
right now `siteData.js` has `twitter.com`, `linkedin.com`, `github.com` as
bare placeholder domains, not real NOESIS profile URLs, so structured data
tools may flag them. Fix those in `siteData.js` first, then reuse them here.

```jsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NOESIS",
  "url": "https://www.noesisstack.com",
  "description": "NOESIS builds SaaS products, websites, mobile apps, and provides end-to-end IT services and consulting.",
  "email": "noesis1126@gmail.com",
  "telephone": "+91 70572 05190",
  "sameAs": [
    // replace with real profile URLs from src/data/siteData.js -> SOCIAL_LINKS
    "https://www.linkedin.com/company/YOUR-REAL-HANDLE",
    "https://github.com/YOUR-REAL-HANDLE"
  ]
})}
</script>
```

---

## One more real gap: SOCIAL_LINKS placeholders
In `src/data/siteData.js`:
```js
export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];
```
These are bare domains, not your actual profiles. Search engines and any
visitor who clicks these will land on the generic homepage of each platform,
not your company page — this looks unfinished and provides zero SEO value
(no real backlink/citation). Replace with your actual handles, or remove any
you don't have yet, e.g.:
```js
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/noesisstack" },
  { label: "GitHub", href: "https://github.com/noesisstack" },
];
```

## Also worth fixing: the "Bunny" project
`projectsData.js` has explicit `// REPLACE ME` comments on the `bunny`
project — placeholder description and a stock Unsplash image instead of a
real screenshot. Thin/placeholder content on a live page can actually hurt
you (Google penalizes pages with little real content), so either finish
that case study with real details or temporarily exclude `/work/bunny`
from the sitemap until it's ready.