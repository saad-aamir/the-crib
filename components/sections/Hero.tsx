"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Magnetic from "../Magnetic";

function Polaroid({ src, alt, rotate, tapeRotate = -1.5 }: { src: string; alt: string; rotate: number; tapeRotate?: number }) {
  return (
    <div className="hero-polaroid" style={{ transform: `rotate(${rotate}deg)`, ["--tape-rotate" as string]: `${tapeRotate}deg` }}>
      <div className="hero-polaroid-img">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="220px" />
      </div>
    </div>
  );
}

export default function Hero() {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setInView(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-cream">
      <div className={`hero-cream-inner ${inView ? "in" : ""}`}>
        <div className="hero-polaroid-left">
          <Polaroid src="/polaroid-left.jpg" alt="Chaaye at The Crib" rotate={-6} tapeRotate={-2} />
        </div>
        <div className="hero-cream-center">
        <div className="hero-cream-logo">
          <Image
            src="/logo.png"
            alt="The Crib · Murree Hills"
            width={460}
            height={460}
            priority
            style={{ width: "min(360px, 65vw)", height: "auto" }}
          />
        </div>
        <h1 className="hero-cream-heading">A Quiet Place Between the Pines</h1>
        <p className="hero-cream-tagline">
          Ideally located on Murree Expressway above Chaaye Khaana · 45 mins from Islamabad
        </p>
        <p className="hero-cream-body">
          Two bespoke hillside apartments open year-round for slow, quiet stays above the trees, with a private cinema and game room reserved for guests.
        </p>
        <Magnetic strength={0.3}>
          <a href="#contact" className="btn">
            <span>Book your stay</span>
            <span className="arrow">→</span>
          </a>
        </Magnetic>
        </div>
        <div className="hero-polaroid-right">
          <Polaroid src="/polaroid-right.jpg" alt="Balcony at The Crib" rotate={5} tapeRotate={1.5} />
        </div>
      </div>
      <div className="hero-cream-scroll">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
