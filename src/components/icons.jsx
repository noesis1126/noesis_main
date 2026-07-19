// Small shared icon set for glyphs that lucide-react doesn't ship
// (e.g. brand marks like WhatsApp). Keep these here so any component
// can import one copy instead of redefining inline SVGs.

import { motion } from "framer-motion";

export function WhatsAppIcon({ size = 18, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.55 3.71-8.26 8.27-8.26 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.84c0 4.56-3.71 8.24-8.27 8.24Zm4.53-6.19c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.42.06-.65.31-.22.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

// Small looping "typing" animation, shared by the consultation card and the
// floating widget popover so both stay visually in sync.
export function ChatBubbleAnimation() {
  const dotTransition = (delay) => ({
    duration: 0.9,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-28 w-40 items-center justify-center gap-2 rounded-3xl rounded-bl-md bg-white shadow-soft"
      >
        {[0, 0.15, 0.3].map((delay, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={dotTransition(delay)}
            className="h-3 w-3 rounded-full bg-accent"
          />
        ))}
      </motion.div>
      <p className="text-xs font-medium text-ink-soft">We usually reply in a few hours</p>
    </div>
  );
}
