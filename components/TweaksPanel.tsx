"use client";

import { useEffect, useRef, useState } from "react";
import { AnimLevel, PaletteName } from "./palette";

type Option<T extends string> = { value: T; label: string };

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (v: T) => void;
}) {
  const idx = Math.max(
    0,
    options.findIndex((o) => o.value === value)
  );
  const n = options.length;
  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
      </div>
      <div className="twk-seg" role="radiogroup">
        <div
          className="twk-seg-thumb"
          style={{
            left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
            width: `calc((100% - 4px) / ${n})`,
          }}
        />
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={o.value === value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

type Props = {
  palette: PaletteName;
  anim: AnimLevel;
  onPalette: (v: PaletteName) => void;
  onAnim: (v: AnimLevel) => void;
};

export default function TweaksPanel({
  palette,
  anim,
  onPalette,
  onAnim,
}: Props) {
  const [open, setOpen] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 16, y: 16 });
  const PAD = 16;

  useEffect(() => {
    if (!open) return;
    const clamp = () => {
      const panel = dragRef.current;
      if (!panel) return;
      const w = panel.offsetWidth,
        h = panel.offsetHeight;
      const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
      const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
      offsetRef.current = {
        x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
        y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
      };
      panel.style.right = offsetRef.current.x + "px";
      panel.style.bottom = offsetRef.current.y + "px";
    };
    clamp();
    window.addEventListener("resize", clamp);
    return () => window.removeEventListener("resize", clamp);
  }, [open]);

  if (!open) {
    return (
      <button
        type="button"
        className="twk-toggle-btn"
        aria-label="Open tweaks"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M6.5 17.5l2-2M15.5 8.5l2-2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    );
  }

  return (
    <div ref={dragRef} className="twk-panel">
      <div className="twk-hd">
        <b>Tweaks</b>
        <button
          className="twk-x"
          aria-label="Close tweaks"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
      <div className="twk-body">
        <div className="twk-sect">Palette</div>
        <Segmented<PaletteName>
          label="Color story"
          value={palette}
          options={[
            { value: "forest", label: "Forest" },
            { value: "deepPine", label: "Pine" },
            { value: "sage", label: "Sage" },
            { value: "charcoal", label: "Char" },
          ]}
          onChange={onPalette}
        />
        <div className="twk-sect">Motion</div>
        <Segmented<AnimLevel>
          label="Animation"
          value={anim}
          options={[
            { value: "off", label: "Off" },
            { value: "low", label: "Low" },
            { value: "max", label: "Max" },
          ]}
          onChange={onAnim}
        />
      </div>
    </div>
  );
}
