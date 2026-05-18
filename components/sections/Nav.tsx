"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo";
import Magnetic from "../Magnetic";

const LINKS = [
  { href: "#apartments", label: "Stays" },
  { href: "#amenities", label: "Comforts" },
  { href: "#reviews", label: "Guests" },
  { href: "#pricing", label: "Rates" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" onClick={close}>
          <Logo />
        </a>
        <div className="nav-links">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <Magnetic strength={0.2}>
            <a href="#contact" className="nav-cta">Reserve</a>
          </Magnetic>
          <button
            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-mobile-link nav-mobile-cta" onClick={close}>
          Reserve
        </a>
      </div>
    </>
  );
}
