# NOESIS — SEO Fix Guide

## What's broken right now
Every route (`/`, `/about`, `/services`, `/work`, `/contact`, etc.) renders the
same `<title>` and `<meta description>` from `index.html`, because there's no
per-route metadata and no `robots.txt` / `sitemap.xml`. Google effectively
sees 10 pages that all claim to be "NOESIS - SaaS & Web Development Studio."
That kills your ranking potential for anything except your homepage.

There's also no prerendering — this is a client-rendered React SPA, so the
raw HTML Google/Bing/LinkedIn first see is nearly empty until JavaScript
runs. Google usually handles this fine these days, but it's slower to index
and other crawlers (LinkedIn link previews, some SEO tools) may see nothing.

---

## Step 1 — Install react-helmet-async

```bash
npm install react-helmet-async
```

This lets each page set its own title/description/canonical/OG tags.

## Step 2 — Replace files
1. Replace `src/main.jsx` with the version I gave you (wraps app in `HelmetProvider`).
2. Add `src/components/SEO.jsx` (the new component).
3. Add `public/robots.txt` and `public/sitemap.xml`.

## Step 3 — Add `<SEO />` to every page
In each file under `src/pages/`, import and render it once near the top of
the returned JSX, with a unique title + description per page. Example for
`src/pages/About.jsx`:

```jsx
import SEO from "../components/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="About Us | NOESIS"
        description="Learn about NOESIS — a SaaS & web development studio building products, websites, and IT consulting."
        path="/about"
      />
      {/* rest of your existing page content */}
    </>
  );
}
```

Do this for: `Home.jsx`, `About.jsx`, `Services.jsx`, `Work.jsx`, `Contact.jsx`,
`PrivacyPolicy.jsx`, `TermsOfService.jsx`.

For the dynamic pages (`ServiceDetail.jsx`, `WorkDetail.jsx`,
`StrengthDetail.jsx`), pull the title/description from the actual
service/project/strength data you already have loaded for that page, e.g.:

```jsx
<SEO
  title={`${service.name} | NOESIS`}
  description={service.shortDescription}
  path={`/services/${service.id}`}
/>
```

**Write unique, keyword-relevant copy for each** — don't just reuse the
homepage description. Think about what someone would type into Google to
find that specific page.

## Step 4 — Add Organization structured data (JSON-LD)
This helps Google understand who you are and can enable rich results. Add
this once, in `Home.jsx` only, inside the `<SEO>` block or as its own
`<Helmet>`:

```jsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NOESIS",
  "url": "https://www.noesisstack.com",
  "description": "NOESIS builds SaaS products, websites, and provides end-to-end IT services and consulting.",
  "sameAs": [
    // add your real social/profile links here, e.g.
    // "https://www.linkedin.com/company/noesisstack",
    // "https://github.com/noesisstack"
  ]
})}
</script>
```

## Step 5 — Prerender the site (recommended)
Since this is a pure client-rendered SPA, add a prerendering step so real
HTML content ships for each route. The simplest option for Vite + React
Router is `react-snap`:

```bash
npm install --save-dev react-snap
```

In `package.json`, add:

```json
"scripts": {
  "build": "vite build",
  "postbuild": "react-snap"
},
"reactSnap": {
  "include": [
    "/",
    "/about",
    "/services",
    "/work",
    "/contact",
    "/privacy",
    "/terms"
  ]
}
```

Add your dynamic routes (`/services/web-development`, etc.) to that
`include` array too, once you have their real slugs. This makes `npm run
build` automatically generate static HTML snapshots of each route — a big
win for both SEO and initial page load speed.

## Step 6 — Submit to search engines
1. **Google Search Console** → verify `noesisstack.com` → submit
   `https://www.noesisstack.com/sitemap.xml`.
2. **Bing Webmaster Tools** → same thing.
3. Create/claim a **Google Business Profile** for the studio.

## Step 7 — Content
Technical SEO gets you crawlable and indexable. It doesn't make you rank
#1 — content and links do that. Two things that move the needle most for a
small studio site:
- A **case studies / work write-up** for each project in `src/data` — even
  200-300 words per project with the tech stack and outcome.
- Get listed on **Clutch**, **GoodFirms**, and your own **LinkedIn company
  page**, and link back to noesisstack.com from all of them.

---

### Send me next (optional)
Share `src/data` (wherever services/work/strengths content lives) and I'll:
- Write the full `sitemap.xml` with real slugs.
- Draft unique title/description copy for every page.