import type { ReactElement } from "react";

type Variant =
  | "tree"
  | "mountain"
  | "building"
  | "wreath"
  | "half-wreath"
  | "ludo"
  | "gameboard"
  | "cards"
  | "lights"
  | "blanket";

const SW = 1;

const MOTIFS: Record<Variant, ReactElement> = {
  tree: (
    <svg viewBox="0 0 40 48" fill="none">
      <path
        d="M20 4v40"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path
        d="M20 8l-5 6M20 8l5 6M20 14l-7 7M20 14l7 7M20 21l-8 8M20 21l8 8M20 29l-9 9M20 29l9 9"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 56 40" fill="none">
      <path
        d="M3 34l13-22 9 14 6-9 12 17H3z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M14 22l2-3M18 17l2-3M22 18l1.5-2"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path
        d="M30 22l1.5-2M33 19l1.5-2"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 48 44" fill="none">
      <path
        d="M4 40V16h12v24M16 40V8h16v32M32 40V20h12v20M2 40h44"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <rect x="7" y="20" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="7" y="27" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="7" y="34" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="20" y="14" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="25" y="14" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="20" y="22" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="25" y="22" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="20" y="30" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="25" y="30" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="36" y="25" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
      <rect x="36" y="32" width="3" height="3" stroke="currentColor" strokeWidth={SW} />
    </svg>
  ),
  wreath: (
    <svg viewBox="0 0 56 40" fill="none">
      <path
        d="M28 36l-2-2M28 36l2-2"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <circle cx="28" cy="34" r="1" fill="currentColor" />
      <path
        d="M26 34C18 32 10 24 8 12c8 0 14 6 18 18"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 34c8-2 16-10 18-22-8 0-14 6-18 18"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11 16c1.5-.5 3 0 4 1M14 21c1.5-.5 3 0 4 1M18 26c1.5-.5 3 0 4 1M22 30c1.5-.5 3 0 3.5 1"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path
        d="M45 16c-1.5-.5-3 0-4 1M42 21c-1.5-.5-3 0-4 1M38 26c-1.5-.5-3 0-4 1M34 30c-1.5-.5-3 0-3.5 1"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  ),
  "half-wreath": (
    <svg viewBox="0 0 56 32" fill="none">
      <circle cx="28" cy="6" r="1" fill="currentColor" />
      <path
        d="M27 7C20 9 12 16 8 28c8 0 16-6 19-19"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M29 7c7 2 15 9 19 21-8 0-16-6-19-19"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11 22c1.5.5 3 0 4-1M15 17c1.5.5 3 0 4-1M20 13c1.5.5 3 0 4-1"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path
        d="M45 22c-1.5.5-3 0-4-1M41 17c-1.5.5-3 0-4-1M36 13c-1.5.5-3 0-4-1"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  ),
  ludo: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect
        x="3"
        y="3"
        width="34"
        height="34"
        rx="2"
        stroke="currentColor"
        strokeWidth={SW}
      />
      <path
        d="M20 3v34M3 20h34"
        stroke="currentColor"
        strokeWidth={SW}
      />
      <circle cx="9" cy="9" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="14" cy="9" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="9" cy="14" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="14" cy="14" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="26" cy="9" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="31" cy="9" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="26" cy="14" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="31" cy="14" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="9" cy="26" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="14" cy="26" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="9" cy="31" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="14" cy="31" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="26" cy="26" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="31" cy="26" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="26" cy="31" r="1.4" stroke="currentColor" strokeWidth={SW} />
      <circle cx="31" cy="31" r="1.4" stroke="currentColor" strokeWidth={SW} />
    </svg>
  ),
  gameboard: (
    <svg viewBox="0 0 36 36" fill="none">
      <rect x="3" y="3" width="30" height="30" stroke="currentColor" strokeWidth={SW} />
      <path
        d="M9 3v30M15 3v30M21 3v30M27 3v30M3 9h30M3 15h30M3 21h30M3 27h30"
        stroke="currentColor"
        strokeWidth={SW}
      />
    </svg>
  ),
  cards: (
    <svg viewBox="0 0 40 44" fill="none">
      <rect
        x="6"
        y="14"
        width="20"
        height="26"
        rx="2"
        transform="rotate(-12 16 27)"
        stroke="currentColor"
        strokeWidth={SW}
      />
      <rect
        x="14"
        y="6"
        width="20"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth={SW}
        fill="white"
      />
      <text
        x="18"
        y="14"
        fontSize="6"
        fontFamily="serif"
        fill="currentColor"
      >
        A
      </text>
      <path
        d="M24 16c-2 1.5-3 3-3 5 0 1.5 1 2.5 2 2.5l-1 2h4l-1-2c1 0 2-1 2-2.5 0-2-1-3.5-3-5z"
        fill="currentColor"
      />
    </svg>
  ),
  lights: (
    <svg viewBox="0 0 56 28" fill="none">
      <path
        d="M3 4C12 18 20 22 28 22s16-4 25-18"
        stroke="currentColor"
        strokeWidth={SW}
        fill="none"
      />
      <circle cx="11" cy="14" r="2.2" stroke="currentColor" strokeWidth={SW} />
      <path d="M11 11.8v-2" stroke="currentColor" strokeWidth={SW} />
      <circle cx="19" cy="19" r="2.2" stroke="currentColor" strokeWidth={SW} />
      <path d="M19 16.8v-2" stroke="currentColor" strokeWidth={SW} />
      <circle cx="28" cy="20.5" r="2.2" stroke="currentColor" strokeWidth={SW} />
      <path d="M28 18.3v-2" stroke="currentColor" strokeWidth={SW} />
      <circle cx="37" cy="19" r="2.2" stroke="currentColor" strokeWidth={SW} />
      <path d="M37 16.8v-2" stroke="currentColor" strokeWidth={SW} />
      <circle cx="45" cy="14" r="2.2" stroke="currentColor" strokeWidth={SW} />
      <path d="M45 11.8v-2" stroke="currentColor" strokeWidth={SW} />
    </svg>
  ),
  blanket: (
    <svg viewBox="0 0 40 32" fill="none">
      <path
        d="M6 8h24l4 4v14H10l-4-4V8z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M10 22V12h24M10 22l-4-4M10 26h24v-4"
        stroke="currentColor"
        strokeWidth={SW}
      />
      <path
        d="M30 8v4M32 8v4M34 8v4M30 22v4M32 22v4M34 22v4"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  ),
};

const ASPECT: Record<Variant, string> = {
  tree: "40 / 48",
  mountain: "56 / 40",
  building: "48 / 44",
  wreath: "56 / 40",
  "half-wreath": "56 / 32",
  ludo: "40 / 40",
  gameboard: "36 / 36",
  cards: "40 / 44",
  lights: "56 / 28",
  blanket: "40 / 32",
};

const GOLD: Variant[] = ["wreath", "half-wreath", "lights"];

export default function SectionDivider({
  variant = "tree",
  label,
}: {
  variant?: Variant;
  label?: string;
}) {
  const isGold = GOLD.includes(variant);
  return (
    <div
      className={`sec-divider reveal ${isGold ? "is-gold" : "is-ink"}`}
      aria-hidden={!label}
    >
      <span className="sec-divider-line" />
      <div
        className="sec-divider-mark"
        style={{ aspectRatio: ASPECT[variant] }}
      >
        {MOTIFS[variant]}
      </div>
      <span className="sec-divider-line" />
      {label ? <div className="sec-divider-label">{label}</div> : null}
    </div>
  );
}
