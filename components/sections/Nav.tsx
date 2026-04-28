"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo";
import Magnetic from "../Magnetic";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const hero = document.querySelector(".hero");
      if (hero) {
        const h = hero.getBoundingClientRect().bottom;
        setLight(h > 80);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${light ? "light" : ""}`}>
      <a href="#top">
        <Logo />
      </a>
      <div className="nav-links">
        <a href="#apartments" className="nav-link">Stays</a>
        <a href="#amenities" className="nav-link">Comforts</a>
        <a href="#location" className="nav-link">Location</a>
        <a href="#reviews" className="nav-link">Guests</a>
        <a href="#pricing" className="nav-link">Rates</a>
      </div>
      <Magnetic strength={0.2}>
        <a href="#contact" className="nav-cta">Reserve</a>
      </Magnetic>
    </nav>
  );
}
