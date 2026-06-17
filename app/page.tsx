"use client";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Marquee from "@/components/sections/Marquee";
import Apartment, { APARTMENTS } from "@/components/sections/Apartment";
import Amenities from "@/components/sections/Amenities";
import GoogleReviews from "@/components/sections/GoogleReviews";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/SectionDivider";
import { useReveal, useParallax } from "@/components/hooks";

export default function Page() {
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
        <SectionDivider variant="wreath" />
        <GoogleReviews />
        <div className="tone-warm">
          <SectionDivider variant="half-wreath" />
          <Pricing />
        </div>
        <SectionDivider variant="lights" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
