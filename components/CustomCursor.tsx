"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (matchMedia("(hover: none)").matches) return;
    document.body.classList.add("cursor-on");
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    let mx = 0,
      my = 0,
      dx = 0,
      dy = 0,
      rx = 0,
      ry = 0;
    const DARK_SELECTOR =
      ".hero, .testimonials, .contact, .footer, .loc-map, .pr-card.feature";
    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = document.elementFromPoint(mx, my) as Element | null;
      const isDark = !!el?.closest(DARK_SELECTOR);
      document.body.classList.toggle("cursor-light", isDark);
    };
    window.addEventListener("mousemove", move);
    let raf = 0;
    const tick = () => {
      dx += (mx - dx) * 0.85;
      dy += (my - dy) * 0.85;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot)
        dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      if (ring)
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const enter = (e: Event) => {
      const t = e.target as Element | null;
      if (
        t?.closest &&
        t.closest("a, button, [data-magnetic], .apt-thumb, .nav-cta, .btn")
      )
        document.body.classList.add("cursor-hover");
    };
    const leave = (e: Event) => {
      const t = e.target as Element | null;
      if (
        t?.closest &&
        t.closest("a, button, [data-magnetic], .apt-thumb, .nav-cta, .btn")
      )
        document.body.classList.remove("cursor-hover");
    };
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      document.body.classList.remove("cursor-on", "cursor-light");
    };
  }, []);
  return (
    <>
      <div className="cursor-ring" />
      <div className="cursor-dot" />
    </>
  );
}
