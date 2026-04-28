"use client";

import { ReactNode, useState } from "react";
import Magnetic from "../Magnetic";

export type ApartmentData = {
  num: string;
  name: string;
  sub: string;
  desc: string;
  features: string[];
  images: string[];
};

export const APARTMENTS: ApartmentData[] = [
  {
    num: "01",
    name: "Cedar House",
    sub: "The forest-facing retreat",
    desc:
      "A two-bedroom hideaway wrapped in deodar wood and morning mist. Floor-to-ceiling windows frame the pines; a stone fireplace anchors the living room. Sleeps four, designed for stillness.",
    features: [
      "2 Bedrooms",
      "Stone fireplace",
      "Forest balcony",
      "Rain shower",
      "Filter coffee bar",
      "Sleeps 4",
    ],
    images: [
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    num: "02",
    name: "Pine Loft",
    sub: "A loft above the canopy",
    desc:
      "A vaulted-ceiling studio set high among the trees, dressed in linen, oak and brass. A reading nook by the window seat, a soaking tub by candlelight. Sleeps two, made for slow mornings.",
    features: [
      "1 Bedroom",
      "Soaking tub",
      "Reading nook",
      "Vaulted ceiling",
      "Espresso bar",
      "Sleeps 2",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

function FeatureIcon({ i }: { i: number }) {
  const icons: ReactNode[] = [
    <svg key="0" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1v-9z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 19V8l7-4 7 4v11M9 19v-5h6v5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M11 11h2v2h-2z" fill="currentColor" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 14c2-3 5-5 9-5s7 2 9 5M3 14h18M5 14v5M19 14v5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7v10M17 7v10M7 12h10M9 4l-2 3M17 7l-2-3M5 18l2 3M19 18l-2 3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 8h8a4 4 0 010 8H6V8zM16 10h2a3 3 0 010 6h-2M5 20h14"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3 19c1-3 3-5 6-5s5 2 6 5M14 19c.5-2 2-3.5 4-3.5s3.2 1 3.8 3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
  ];
  return <>{icons[i % icons.length]}</>;
}

export default function Apartment({
  data,
  flip = false,
}: {
  data: ApartmentData;
  flip?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const total = data.images.length;
  const next = () => setIdx((idx + 1) % total);
  const prev = () => setIdx((idx - 1 + total) % total);

  return (
    <section className={`apt ${flip ? "flip" : ""}`}>
      <div className="wrap">
        <div className="apt-grid">
          <div className="apt-text reveal">
            <div className="apt-num">
              <span className="line" />
              Residence {data.num}
            </div>
            <h3>
              {data.name}
              <em>{data.sub}</em>
            </h3>
            <p className="apt-desc">{data.desc}</p>
            <div className="apt-features">
              {data.features.map((f, i) => (
                <div className="apt-feat" key={i}>
                  <FeatureIcon i={i} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Magnetic strength={0.25}>
              <a href="#contact" className="btn">
                <span>Reserve {data.name}</span>
                <span className="arrow">→</span>
              </a>
            </Magnetic>
          </div>
          <div className="apt-media reveal reveal-d2">
            <div className="apt-gallery">
              {data.images.map((src, i) => (
                <div
                  key={i}
                  className={`slide ${i === idx ? "active" : ""}`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="apt-counter">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <div className="apt-arrows">
                <button onClick={prev} aria-label="Previous">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <button onClick={next} aria-label="Next">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="apt-thumbs">
              {data.images.map((src, i) => (
                <div
                  key={i}
                  className={`apt-thumb ${i === idx ? "active" : ""}`}
                  onClick={() => setIdx(i)}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
