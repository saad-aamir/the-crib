export type PaletteName = "forest" | "deepPine" | "sage" | "charcoal";
export type AnimLevel = "off" | "low" | "max";

export const PALETTES: Record<
  PaletteName,
  {
    cream: string;
    creamDeep: string;
    ink: string;
    inkSoft: string;
    gold: string;
    goldSoft: string;
  }
> = {
  forest: {
    cream: "#F5EFE6",
    creamDeep: "#EDE4D3",
    ink: "#1F3D2E",
    inkSoft: "#2B4A39",
    gold: "#B8895A",
    goldSoft: "#C9A37A",
  },
  deepPine: {
    cream: "#F2EDE2",
    creamDeep: "#E5DCC9",
    ink: "#13301F",
    inkSoft: "#1E4030",
    gold: "#A57140",
    goldSoft: "#BC8F62",
  },
  sage: {
    cream: "#F4EFE5",
    creamDeep: "#E6DECB",
    ink: "#3E5641",
    inkSoft: "#4A6650",
    gold: "#C9A66B",
    goldSoft: "#D6B889",
  },
  charcoal: {
    cream: "#F1ECE2",
    creamDeep: "#E1D8C5",
    ink: "#26302A",
    inkSoft: "#36403A",
    gold: "#BC8E5A",
    goldSoft: "#D0A977",
  },
};

export function applyPalette(name: PaletteName) {
  const p = PALETTES[name] ?? PALETTES.forest;
  const r = document.documentElement.style;
  r.setProperty("--cream", p.cream);
  r.setProperty("--cream-deep", p.creamDeep);
  r.setProperty("--ink", p.ink);
  r.setProperty("--ink-soft", p.inkSoft);
  r.setProperty("--gold", p.gold);
  r.setProperty("--gold-soft", p.goldSoft);
  const inkHex = p.ink.replace("#", "");
  const rr = parseInt(inkHex.slice(0, 2), 16);
  const gg = parseInt(inkHex.slice(2, 4), 16);
  const bb = parseInt(inkHex.slice(4, 6), 16);
  r.setProperty("--line", `rgba(${rr}, ${gg}, ${bb}, 0.14)`);
  r.setProperty("--mute", `rgba(${rr}, ${gg}, ${bb}, 0.55)`);
}

export function applyAnim(level: AnimLevel) {
  document.body.classList.remove("anim-off", "anim-low", "anim-max");
  if (level === "off") document.body.classList.add("anim-off");
  else if (level === "low") document.body.classList.add("anim-low");
  else document.body.classList.add("anim-max");
}
