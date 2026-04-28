"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    q: "We came for a weekend and stayed for five nights. The fireplace, the linen sheets, the way the morning fog settles into the pines — none of it photographs the way it feels.",
    n: "Ayesha & Hamza",
    m: "Stayed in Cedar House · April",
  },
  {
    q: "Quietest sleep I've had in years. Whoever stocked the kitchen knows their way around good food. Already booked again for autumn.",
    n: "Daniyal R.",
    m: "Stayed in Pine Loft · March",
  },
  {
    q: "A genuinely thoughtful place. The kind of stay that makes you reconsider what hotels are even for.",
    n: "Sara K.",
    m: "Stayed in Cedar House · February",
  },
  {
    q: "Felt like staying in a friend's beautifully kept second home. We left rested, and that's rare.",
    n: "Omar & Zara",
    m: "Stayed in Pine Loft · January",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="testimonials" id="reviews">
      <div className="wrap">
        <div className="t-head reveal">
          <div className="eyebrow">Chapter 04 · The Guests</div>
          <h2>Words from those who&apos;ve stayed.</h2>
        </div>
        <div className="t-stage">
          {reviews.map((r, i) => (
            <div className={`t-card ${i === idx ? "active" : ""}`} key={i}>
              <div className="t-quote-mark">&ldquo;</div>
              <div className="t-stars">★ ★ ★ ★ ★</div>
              <div className="t-quote">{r.q}</div>
              <div className="t-author">
                <span>{r.n}</span>
                <span className="sep">·</span>
                <span className="meta">{r.m}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="t-dots">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`t-dot ${i === idx ? "active" : ""}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
