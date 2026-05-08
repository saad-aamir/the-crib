import { ReactNode } from "react";

const items: { t: string; d: string; icon: ReactNode }[] = [
  {
    t: "Chaaye Station",
    d: "Karak chaaye, coffee, and comforting cups whenever the weather asks for one.",
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
    t: "Game Room",
    d: "Carom battles, ludo marathons, and board games that turn into long evenings.",
    icon: (
      <path
        d="M4 6h16v12H4zM4 6l16 12M20 6L4 18"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Private Cinema",
    d: "Movie nights with hot pakoras and the kind of evenings you talk about long after.",
    icon: (
      <path
        d="M3 6h18v12H3zM3 9h18M6 6V4M10 6V4M14 6V4M18 6V4M6 18v2M10 18v2M14 18v2M18 18v2"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Concierge",
    d: "A real person on call — late-night essentials, recommendations, even pakoras from the stall across the road.",
    icon: (
      <path
        d="M5 20c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "High-Speed Wi-Fi",
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
    d: "Fully equipped — for slow breakfasts, shared meals, and everything in between.",
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
    t: "Daily Housekeeping",
    d: "Fresh linens on request and the apartment kept the way you arrived to it.",
    icon: (
      <path
        d="M5 21l3-12 4 1-3 12zM12 10l4-8M16 2l3 1.5M19 3.5l-2 4M14 6l-2 4"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    ),
  },
  {
    t: "Forest Views",
    d: "Floor-to-ceiling windows opening to deodar pines and the stillness above the trees.",
    icon: (
      <path
        d="M3 19l5-9 4 7 3-5 6 7H3z"
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
            Board games, warm lighting, movie nights in the private cinema, and quiet corners
            made for long conversations after dinner — everything stocked the way we&apos;d
            stock our own home.
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
