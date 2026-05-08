"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import TweaksPanel from "@/components/TweaksPanel";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Marquee from "@/components/sections/Marquee";
import Apartment, { APARTMENTS } from "@/components/sections/Apartment";
import Amenities from "@/components/sections/Amenities";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/SectionDivider";
import { useReveal, useParallax } from "@/components/hooks";
import {
  AnimLevel,
  PaletteName,
  applyAnim,
  applyPalette,
} from "@/components/palette";

export default function Page() {
  const [palette, setPalette] = useState<PaletteName>("forest");
  const [anim, setAnim] = useState<AnimLevel>("max");

  useEffect(() => {
    applyPalette(palette);
  }, [palette]);

  useEffect(() => {
    applyAnim(anim);
  }, [anim]);

  useReveal();
  useParallax();

  return (
    <>
      <Loader />
      <CustomCursor />
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <Marquee />
        <section id="apartments" className="tone-warm">
          <SectionDivider variant="tree" />
          <Apartment data={APARTMENTS[0]} />
          <Apartment data={APARTMENTS[1]} flip />
        </section>
        <SectionDivider variant="ludo" />
        <Amenities />
        <div className="tone-warm">
          <SectionDivider variant="mountain" />
          <Location />
        </div>
        <SectionDivider variant="wreath" />
        <Testimonials />
        <div className="tone-warm">
          <SectionDivider variant="half-wreath" />
          <Pricing />
        </div>
        <SectionDivider variant="lights" />
        <Contact />
        <Footer />
      </main>
      <TweaksPanel
        palette={palette}
        anim={anim}
        onPalette={setPalette}
        onAnim={setAnim}
      />
    </>
  );
}
