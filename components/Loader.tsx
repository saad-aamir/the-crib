"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader ${hidden ? "hidden" : ""}`}>
      <div className="loader-mark">
        <svg
          viewBox="0 0 60 60"
          width="44"
          height="44"
          fill="none"
          style={{ color: "var(--ink)" }}
        >
          <path d="M30 6 L30 50" stroke="currentColor" strokeWidth="1.2" />
          <path d="M22 18 L30 12 L38 18" stroke="currentColor" strokeWidth="1.2" />
          <path d="M20 26 L30 18 L40 26" stroke="currentColor" strokeWidth="1.2" />
          <path d="M18 34 L30 24 L42 34" stroke="currentColor" strokeWidth="1.2" />
          <path d="M14 44 Q30 34 46 44" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="loader-bar" />
      <div className="loader-text">The Crib · Murree Hills</div>
    </div>
  );
}
