"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import Magnetic from "../Magnetic";
import type { ApartmentData } from "@/lib/apartments";

function FeatureIcon({ i }: { i: number }) {
  const icons: ReactNode[] = [
    <svg key="0" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1v-9z" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none">
      <path d="M5 19V8l7-4 7 4v11M9 19v-5h6v5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 11h2v2h-2z" fill="currentColor" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none">
      <path d="M3 14c2-3 5-5 9-5s7 2 9 5M3 14h18M5 14v5M19 14v5" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none">
      <path d="M7 7v10M17 7v10M7 12h10M9 4l-2 3M17 7l-2-3M5 18l2 3M19 18l-2 3" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none">
      <path d="M6 8h8a4 4 0 010 8H6V8zM16 10h2a3 3 0 010 6h-2M5 20h14" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 19c1-3 3-5 6-5s5 2 6 5M14 19c.5-2 2-3.5 4-3.5s3.2 1 3.8 3" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
  ];
  return <>{icons[i % icons.length]}</>;
}

type Slide = { src: string; rIdx: number; iIdx: number };

export default function Apartment({ data, flip = false }: { data: ApartmentData; flip?: boolean }) {
  // Flatten all rooms' images into one list — pre-rendered, no unmount on room switch
  const allSlides: Slide[] = data.rooms.flatMap((room, rIdx) =>
    room.images.map((src, iIdx): Slide => ({ src, rIdx, iIdx }))
  );

  const [globalIdx, setGlobalIdx] = useState(0);

  const activeSlide = allSlides[globalIdx];
  const activeRoomIdx = activeSlide.rIdx;
  const activeRoom = data.rooms[activeRoomIdx];
  const localIdx = activeSlide.iIdx;
  const total = activeRoom.images.length;

  const roomStart = (rIdx: number) =>
    data.rooms.slice(0, rIdx).reduce((acc, r) => acc + r.images.length, 0);

  const next = () => setGlobalIdx((globalIdx + 1) % allSlides.length);
  const prev = () => setGlobalIdx((globalIdx - 1 + allSlides.length) % allSlides.length);
  const switchRoom = (rIdx: number) => setGlobalIdx(roomStart(rIdx));
  const setLocalIdx = (iIdx: number) => setGlobalIdx(roomStart(activeRoomIdx) + iIdx);

  return (
    <section className={`apt ${flip ? "flip" : ""}`}>
      <div className="wrap">
        <div className="apt-grid">
          <div className="apt-text reveal">
            <div className="apt-num">
              <span className="line" />
              Residence {data.num}
            </div>
            <h3>
              {data.name}
              <em>{data.sub}</em>
            </h3>
            <p className="apt-desc">{data.desc}</p>
            {data.descHighlight && (
              <p className="apt-desc apt-desc-highlight">{data.descHighlight}</p>
            )}
            <div className="apt-features">
              {data.features.map((f, i) => (
                <div className="apt-feat" key={i}>
                  <FeatureIcon i={i} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn apt-cta">
              <span>Reserve {data.name}</span>
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="apt-media reveal reveal-d2">
            {data.rooms.length > 1 && (
              <div className="apt-room-tabs">
                {data.rooms.map((room, i) => (
                  <button
                    key={i}
                    className={`apt-room-tab ${i === activeRoomIdx ? "active" : ""}`}
                    onClick={() => switchRoom(i)}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
            )}

            <div className="apt-gallery">
              {/* All slides always rendered — switching rooms is a CSS crossfade, never a remount */}
              {allSlides.map((slide, i) => (
                <div
                  key={`${slide.rIdx}-${slide.iIdx}`}
                  className={`slide ${i === globalIdx ? "active" : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={`${data.rooms[slide.rIdx].name} of ${data.name} — apartment to rent at The Crib, Murree`}
                    fill
                    sizes="(max-width: 880px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="apt-counter">
                {String(localIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <div className="apt-arrows">
                <button onClick={prev} aria-label="Previous">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <button onClick={next} aria-label="Next">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Strip always in layout (no height shift) — hidden only when 1 image */}
            <div className="apt-thumbs" style={total === 1 ? { visibility: "hidden" } : undefined}>
              {activeRoom.images.map((src, i) => (
                <div
                  key={`${activeRoomIdx}-${i}`}
                  className={`apt-thumb ${i === localIdx ? "active" : ""}`}
                  onClick={() => setLocalIdx(i)}
                >
                  <Image
                    src={src}
                    alt={`${activeRoom.name} of ${data.name}, The Crib Murree — photo ${i + 1}`}
                    fill
                    sizes="120px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
