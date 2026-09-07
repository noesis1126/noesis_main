import { Helmet } from "react-helmet-async";

/**
 * Drop this into every page component to control per-page SEO tags.
 * Without this, every route on the site shares the one static
 * <title>/<meta description> from index.html, which hurts ranking
 * for every page except the homepage.
 *
 * Usage (top of any page file, e.g. src/pages/About.jsx):
 *
 *   import SEO from "../components/SEO.jsx";
 *
 *   export default function About() {
 *     return (
 *       <>
 *         <SEO
 *           title="About Us | NOESIS"
 *           description="Learn about NOESIS, a SaaS & web development studio building products, sites, and IT consulting."
 *           path="/about"
 *         />
 *         ...rest of page
 *       </>
 *     );
 *   }
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-image.png", // put a 1200x630 image at public/og-image.png
  type = "website",
}) {
  const siteUrl = "https://www.noesisstack.com";
  const canonicalUrl = `${siteUrl}${path}`;
  const fullTitle = title
    ? `${title}`
    : "NOESIS - SaaS & Web Development Studio";
  const fullDescription =
    description ||
    "NOESIS builds SaaS products, websites, and provides end-to-end IT services and consulting.";

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp previews) */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="NOESIS" />

      {/* Twitter/X card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
}