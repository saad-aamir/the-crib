"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useParallax() {
  useEffect(() => {
    if (document.body.classList.contains("anim-off")) return;
    const els = document.querySelectorAll<HTMLElement>(".parallax");
    let raf: number | null = null;
    const update = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.speed || "0.2");
        const off =
          (r.top + r.height / 2 - window.innerHeight / 2) * speed;
        el.style.transform = `translate3d(0, ${off}px, 0)`;
      });
      raf = null;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);
}

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(hover: none)").matches) return;
    if (document.body.classList.contains("anim-off")) return;
    let cachedRect: DOMRect | null = null;
    const invalidate = () => { cachedRect = null; };
    const move = (e: MouseEvent) => {
      if (!cachedRect) cachedRect = el.getBoundingClientRect();
      const x = e.clientX - (cachedRect.left + cachedRect.width / 2);
      const y = e.clientY - (cachedRect.top + cachedRect.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const leave = () => {
      el.style.transform = "";
      cachedRect = null;
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    window.addEventListener("scroll", invalidate, { passive: true });
    window.addEventListener("resize", invalidate);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      window.removeEventListener("scroll", invalidate);
      window.removeEventListener("resize", invalidate);
    };
  }, [strength]);
  return ref;
}
