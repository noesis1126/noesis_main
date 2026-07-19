import { Search, X } from "lucide-react";

// Simple controlled search input, styled to match the site's card system.
// Pass `value`/`onChange` from the parent list so it can filter in place.
export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="relative w-full max-w-md">
      <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-10 text-sm text-ink placeholder:text-ink-soft/70 shadow-card outline-none transition-colors focus:border-accent"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft transition-colors hover:text-accent"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
