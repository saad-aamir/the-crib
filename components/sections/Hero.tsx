"use client";

import { useEffect, useState } from "react";
import Magnetic from "../Magnetic";

const HERO_BG =
  "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setInView(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero ${inView ? "in" : ""}`}>
      <div
        className="hero-bg parallax"
        data-speed="0.15"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="hero-grain" />
      <div className="wrap hero-inner">
        <div>
          <div className="hero-eyebrow reveal">A boutique stay in the pines · est. 2024</div>
          <h1>
            <span className="line">
              <span>
                A quiet <em style={{ fontStyle: "italic" }}>place</em>
              </span>
            </span>
            <span className="line">
              <span>between the&nbsp;</span>
            </span>
            <span className="line">
              <span>pines.</span>
            </span>
          </h1>
          <p className="hero-tagline reveal reveal-d2">
            Two bespoke hillside apartments above Murree — open year-round
            for slow, quiet stays above the trees, with a private cinema
            and game room reserved for guests.
          </p>
          <Magnetic strength={0.3}>
            <a href="#contact" className="btn btn-light reveal reveal-d3">
              <span>Book your stay</span>
              <span className="arrow">→</span>
            </a>
          </Magnetic>
        </div>
        <div className="hero-meta reveal reveal-d4">
          <div>33.9°N · 73.4°E</div>
          <div className="divider" />
          <div>Murree Hills</div>
          <div>Pakistan</div>
          <div className="divider" />
          <div>2,291m elev.</div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
