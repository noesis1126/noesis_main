import { COMPANY_NAME } from "../data/siteData.js";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="mb-12 border-b border-line pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-ink-soft">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        <div className="space-y-8 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and {COMPANY_NAME},
              concerning your access to and use of our website and our professional services. You agree that by
              accessing the site, you have read, understood, and agree to be bound by all of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">2. Professional Services</h2>
            <p>
              When engaging {COMPANY_NAME} for design, development, or consulting services, specific deliverables,
              timelines, and payment structures will be outlined in a separate Statement of Work (SOW) or Master
              Services Agreement (MSA). The terms in those specific contracts supersede these general website terms
              where applicable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned
              or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">4. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be
              true, accurate, current, and complete; (2) you will maintain the accuracy of such information and
              promptly update such registration information as necessary; and (3) you have the legal capacity and you
              agree to comply with these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-ink">5. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of
              the Site, please contact us using the contact methods provided on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
