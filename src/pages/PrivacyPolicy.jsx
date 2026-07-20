import { COMPANY_NAME } from "../data/siteData.js";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="mb-12 border-b border-line pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink-soft">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        <div className="space-y-8 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">1. Introduction</h2>
            <p>
              At {COMPANY_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website and use our services.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-5">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address,
                email address, and telephone number that you voluntarily give to us when choosing to participate in
                various activities related to the site (such as contacting us).
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site,
                such as your IP address, your browser type, your operating system, your access times, and the pages you
                have viewed directly before and after accessing the Site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you to:
            </p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-5">
              <li>Deliver targeted advertising, newsletters, and other information regarding our website to you.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the site.</li>
              <li>Improve the efficiency and operation of the site.</li>
              <li>Respond to product and customer service requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">4. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us via the contact information
              provided in our website footer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
