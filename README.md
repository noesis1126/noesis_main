# Company Profile Website

A responsive, animated company profile site (Home / About / Services) built with React (Vite),
Tailwind CSS, framer-motion, lucide-react, and react-router-dom.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/        Navbar, Footer, SectionHeading (shared across pages)
  data/
    siteData.js       Company name, tagline, WhatsApp number, nav/social links
  pages/
    Home.jsx           Stacks the home page sections
    About.jsx           Stacks the about page sections
    Services.jsx         Stacks the services page sections
  sections/
    home/               HeroSection, IntroSection, CapabilitiesSection, CTASection
    about/              MissionSection, ProjectsSection, TeamSection
    services/           ServicesList, WorkSection, ConsultationSection
```

Every section of every page is its own component file — pages just import and stack them.

## Things to customize before launch

- `src/data/siteData.js` — replace `COMPANY_NAME`, `TAGLINE`, and `PHONE_NUMBER`
  (digits only, with country code, no `+` or spaces — used for the WhatsApp link).
- Any `<img>` tag has a `// REPLACE ME` comment above it — these are Unsplash
  placeholder images. Swap the `src` for your own project/team photos.
- Colors and fonts live in `tailwind.config.js` (`accent`, `cream`, `ink` colors,
  `display`/`body` font families) — change them there and the whole site updates.
- Team member and project data are plain arrays at the top of `TeamSection.jsx` and
  `ProjectsSection.jsx` / `WorkSection.jsx` — edit directly.

## Notes

- All placeholder images load from Unsplash's CDN, so they render immediately without
  any local image files.
- The WhatsApp button opens `https://wa.me/[PHONE_NUMBER]` in a new tab.
- Motion respects `prefers-reduced-motion`.
