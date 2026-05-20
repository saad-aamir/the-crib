"use client";

import { useState } from "react";

const reviews = [
  {
    q: "We came for a weekend and stayed five nights. The chaaye station, the way the morning fog settles into the pines — none of it photographs the way it feels.",
    n: "Ayesha & Hamza",
    m: "Stayed in The Grand Suite · April",
  },
  {
    q: "Quietest sleep I've had in years. Carom till midnight, pakoras at 11, a cup of karak in hand. Already booked again for autumn.",
    n: "Daniyal R.",
    m: "Stayed in The Grand Suite · March",
  },
  {
    q: "A genuinely thoughtful place. The kind of stay that makes you reconsider what hotels are even for.",
    n: "Sara K.",
    m: "Stayed in The Essentials Suite · February",
  },
  {
    q: "Felt like staying in a friend's beautifully kept second home. The host replied in minutes, and we left rested — that's rare.",
    n: "Omar & Zara",
    m: "Stayed in The Essentials Suite · January",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="testimonials" id="reviews">
      <div className="wrap">
        <div className="t-head reveal">
          <div className="eyebrow">Chapter 03 · The Guests</div>
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
        <div className="t-nav">
          <button className="t-arrow" onClick={() => setIdx((idx - 1 + reviews.length) % reviews.length)} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
          <div className="t-dots">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`t-dot ${i === idx ? "active" : ""}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
          <button className="t-arrow" onClick={() => setIdx((idx + 1) % reviews.length)} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
