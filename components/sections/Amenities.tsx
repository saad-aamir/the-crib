import { ReactNode } from "react";

const items: { t: string; d: string; icon: ReactNode }[] = [
  {
    t: "Fibre Wi-Fi",
    d: "Fast enough for a workday, quiet enough to forget you have one.",
    icon: (
      <path
        d="M3 9c5-4 13-4 18 0M6 13c4-3 8-3 12 0M9 17c2-1.5 4-1.5 6 0M12 21h.01"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    ),
  },
  {
    t: "Full Kitchen",
    d: "Stocked with fresh oils, cast iron, and good knives.",
    icon: (
      <path
        d="M5 3v18M5 7h14M19 3v18M9 12h6M14 12v9M10 12V3"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Private Parking",
    d: "Tucked behind cedar trees. Your car, out of sight.",
    icon: (
      <path
        d="M5 17V8h7a4 4 0 010 8H8M5 17H3M5 17h2M19 17h2M16 17h-2"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Mountain View",
    d: "Pir Panjal range on a clear morning. Fog on the others.",
    icon: (
      <path
        d="M3 19l5-9 4 7 3-5 6 7H3z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Wood Fireplace",
    d: "Logs split fresh, kindling waiting beside the hearth.",
    icon: (
      <path
        d="M12 21c-3 0-5-2-5-5 0-3 3-3 3-7 0-2 2-3 2-3s4 4 4 8c0 4-2 7-4 7z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Outdoor Patio",
    d: "For breakfasts in the sun and after-dinner whisky.",
    icon: (
      <path
        d="M12 4l-9 9h3v7h12v-7h3l-9-9zM10 20v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Filter Coffee",
    d: "Beans roasted in Islamabad, ground for you each morning.",
    icon: (
      <path
        d="M5 8h12v8a4 4 0 01-4 4H9a4 4 0 01-4-4V8zM17 10h2a2 2 0 010 4h-2M9 4v2M12 3v3M15 4v2"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Concierge",
    d: "A real person, on call, for whatever the day needs.",
    icon: (
      <circle
        cx="12"
        cy="9"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
];

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="wrap">
        <div className="amenities-head">
          <div>
            <div
              className="eyebrow reveal"
              style={{ marginBottom: 24, display: "block" }}
            >
              Chapter 02 · The Comforts
            </div>
            <h2 className="reveal reveal-d1">Small details, kept properly.</h2>
          </div>
          <p className="reveal reveal-d2">
            Everything you&apos;d want, and nothing you wouldn&apos;t. We&apos;ve stocked
            both apartments the way we&apos;d stock our own home — slowly, with intention.
          </p>
        </div>
        <div className="amenities-grid">
          {items.map((it, i) => (
            <div
              className="amenity reveal"
              key={i}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="amenity-num">0{i + 1}</div>
              <svg viewBox="0 0 24 24">{it.icon}</svg>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
