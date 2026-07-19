import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { PHONE_NUMBER } from "../data/siteData.js";
import { WhatsAppIcon, ChatBubbleAnimation } from "./icons.jsx";

// The "Book a free consultation" card — same content as the floating widget
// popover, but embedded inline at the bottom of a page instead of a popup.
export default function ConsultationCard() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
      <div className="grid items-center gap-10 rounded-3xl border border-line bg-white p-8 shadow-card md:grid-cols-[1.4fr_1fr] md:p-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Let's talk
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Book a free consultation
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
            Tell us about your product or website. We'll get on a call, ask a few questions, and
            follow up with a scoped plan — no obligation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream shadow-soft"
            >
              <PhoneCall size={16} />
              Free Consultation
            </motion.a>

            <motion.a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>

        <div className="hidden justify-self-center md:flex">
          <ChatBubbleAnimation />
        </div>
      </div>
    </section>
  );
}
