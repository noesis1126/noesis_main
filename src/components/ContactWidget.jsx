import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, PhoneCall, X } from "lucide-react";
import { PHONE_NUMBER } from "../data/siteData.js";
import { WhatsAppIcon, ChatBubbleAnimation } from "./icons.jsx";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop on mobile so the sheet reads as a modal, not a stray card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px] sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* Popover card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 bottom-24 z-50 rounded-3xl border border-line bg-white p-6 shadow-soft sm:inset-x-auto sm:bottom-28 sm:right-6 sm:w-[380px] sm:p-7"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-cream-soft hover:text-ink"
            >
              <X size={16} />
            </button>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Let's talk
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
              Book a free consultation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Tell us about your product or website — we'll follow up with a scoped plan, no
              obligation.
            </p>

            <div className="mt-5 flex justify-center">
              <ChatBubbleAnimation />
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-cream shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall size={16} />
                Free Consultation
              </Link>

              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsAppIcon size={17} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action button — solid flat circle, no pulse/glow effects
          (a scaling translucent ring here previously combined with the
          button's own shadow to read as an uneven, patchy highlight rather
          than a clean ring, so it's been dropped in favor of a small static
          badge). */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact panel" : "Open contact panel"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center overflow-visible rounded-full bg-accent text-cream shadow-soft sm:bottom-8 sm:right-8"
        style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      >
        {!open && (
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-cream bg-[#E4572E]" />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
