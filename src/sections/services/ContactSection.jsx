import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, ShieldCheck } from "lucide-react";
import { EMAIL, PHONE_DISPLAY } from "../../data/siteData.js";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const EMAILJS_USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "E-commerce Development",
  "Custom Software Development",
  "AI & Automation Solutions",
];

const BUDGET_OPTIONS = ["Under ₹10k", "₹10k – ₹25k", "₹25k – ₹50k", "₹50k – ₹100k", "₹100k+"];

const TIMELINE_OPTIONS = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "Flexible"];

const MESSAGE_LIMIT = 2000;

const contactInfo = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_DISPLAY.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Office", value: "Warje, Pune", href: null },
];

const inputClasses =
  "w-full rounded-xl border border-line bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-accent focus:bg-white";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_ADMIN_TEMPLATE_ID || !EMAILJS_USER_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS env vars are missing. Check your .env file against .env.example.");
      setStatus("error");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const templateParams = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      mobile: formData.get("mobile") || "Not provided",
      company: formData.get("company") || "Not provided",
      service: formData.get("service"),
      budget: formData.get("budget") || "Not specified",
      timeline: formData.get("timeline") || "Not specified",
      projectMessage: formData.get("projectMessage") || "No additional details provided.",
      to_email: EMAIL,
    };

    setStatus("sending");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      setMessage("");
      form.reset();
    } catch (err) {
      console.error("Failed to send contact form emails:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-content px-6 py-14 md:px-10 md:py-24">
      <div className="grid gap-8 rounded-3xl border border-line bg-white p-5 shadow-card sm:gap-10 sm:p-8 md:grid-cols-[1fr_1.3fr] md:p-14">
        {/* Left: intro + contact info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Free Consultation
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Let's talk about your next project.
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
            Share your software requirements and we'll get back within one business day with a
            tailored approach and a free 30-minute technical consultation.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-ink hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="fullName">
                Full Name
              </label>
              <input id="fullName" name="fullName" type="text" required className={inputClasses} placeholder="Priya Sharma" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="email">
                Email Address
              </label>
              <input id="email" name="email" type="email" required className={inputClasses} placeholder="priya@company.in" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="mobile">
                Mobile Number
              </label>
              <input id="mobile" name="mobile" type="tel" className={inputClasses} placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="company">
                Company Name
              </label>
              <input id="company" name="company" type="text" className={inputClasses} placeholder="Sharma Enterprises" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="service">
              Service Interested In
            </label>
            <select id="service" name="service" defaultValue="" required className={inputClasses}>
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="budget">
                Budget Range
              </label>
              <select id="budget" name="budget" defaultValue="" className={inputClasses}>
                <option value="" disabled>
                  Select budget
                </option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-ink-soft" htmlFor="timeline">
                Project Timeline
              </label>
              <select id="timeline" name="timeline" defaultValue="" className={inputClasses}>
                <option value="" disabled>
                  Select timeline
                </option>
                {TIMELINE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block text-xs font-medium text-ink-soft" htmlFor="projectMessage">
                Project Message
              </label>
              <span className="text-xs text-ink-soft/70">
                {message.length}/{MESSAGE_LIMIT}
              </span>
            </div>
            <textarea
              id="projectMessage"
              name="projectMessage"
              rows={4}
              maxLength={MESSAGE_LIMIT}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClasses} resize-none`}
              placeholder="Tell us a bit about what you're building..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream shadow-soft transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={16} />
            {status === "sending" ? "Sending..." : status === "sent" ? "Message sent!" : "Send Message"}
          </motion.button>

          {status === "error" && (
            <p className="text-xs font-medium text-red-600">
              Something went wrong sending your message. Please try again or email us directly at {EMAIL}.
            </p>
          )}

          <p className="flex items-center gap-1.5 text-xs text-ink-soft">
            <ShieldCheck size={14} className="shrink-0 text-accent" />
            Your information is secure. We'll only use it to reply to your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
