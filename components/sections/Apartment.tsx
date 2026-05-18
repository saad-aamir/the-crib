"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import Magnetic from "../Magnetic";

export type RoomData = {
  name: string;
  images: string[];
};

export type ApartmentData = {
  num: string;
  name: string;
  sub: string;
  desc: string;
  features: string[];
  rooms: RoomData[];
};

export const APARTMENTS: ApartmentData[] = [
  {
    num: "01",
    name: "The Corner Apartment",
    sub: "The forest-facing retreat",
    desc:
      "A three-bedroom corner apartment with a warm, comfortable lounge and a fully equipped kitchen. Floor-to-ceiling windows open toward the pines, filling the space with light and stillness. Designed for slow mornings, quiet evenings, and effortless stays. Reserved access to a game and cinema room.",
    features: [
      "3 Bedrooms",
      "Game room & private cinema",
      "Forest-view balcony",
      "Chaaye station",
      "Fully equipped kitchen",
      "Sleeps 9",
    ],
    rooms: [
      {
        name: "Lounge",
        images: [
          "/apartments/corner/lounge/20260514_152506.jpg",
          "/apartments/corner/lounge/20260514_152536.jpg",
          "/apartments/corner/lounge/20260514_152558.jpg",
          "/apartments/corner/lounge/20260514_152620.jpg",
          "/apartments/corner/lounge/20260514_152639.jpg",
          "/apartments/corner/lounge/20260514_152706.jpg",
        ],
      },
      {
        name: "Game Room",
        images: [
          "/apartments/corner/game-room/20260514_163607.jpg",
          "/apartments/corner/game-room/20260514_163623.jpg",
          "/apartments/corner/game-room/20260514_163628.jpg",
          "/apartments/corner/game-room/20260514_163644.jpg",
        ],
      },
      {
        name: "Room 1",
        images: [
          "/apartments/corner/room-1/20260514_154720.jpg",
          "/apartments/corner/room-1/20260514_154755.jpg",
          "/apartments/corner/room-1/20260514_154812.jpg",
          "/apartments/corner/room-1/20260514_154842.jpg",
          "/apartments/corner/room-1/20260514_154848.jpg",
          "/apartments/corner/room-1/20260514_154917.jpg",
          "/apartments/corner/room-1/20260514_155056.jpg",
          "/apartments/corner/room-1/20260514_155235.jpg",
          "/apartments/corner/room-1/20260514_155325.jpg",
        ],
      },
      {
        name: "Room 2",
        images: [
          "/apartments/corner/room-2/20260514_161055.jpg",
          "/apartments/corner/room-2/20260514_161109.jpg",
          "/apartments/corner/room-2/20260514_161159.jpg",
          "/apartments/corner/room-2/20260514_161246.jpg",
        ],
      },
      {
        name: "Room 3",
        images: [
          "/apartments/corner/room-3/20260514_163055.jpg",
          "/apartments/corner/room-3/20260514_163132.jpg",
          "/apartments/corner/room-3/20260514_163145.jpg",
          "/apartments/corner/room-3/20260514_163247.jpg",
          "/apartments/corner/room-3/20260514_163320.jpg",
          "/apartments/corner/room-3/20260514_163354.jpg",
        ],
      },
      {
        name: "Balcony",
        images: [
          "/apartments/corner/balcony/Balcony-301.jpg",
          "/apartments/corner/balcony/Balcony-1-301.jpg",
          "/apartments/corner/balcony/Balcony-3-301.jpg",
          "/apartments/corner/balcony/Balcony-4-301.jpg",
          "/apartments/corner/balcony/Balcony-5-301.jpg",
        ],
      },
    ],
  },
  {
    num: "02",
    name: "The Budget Apartment",
    sub: "The comfortable family apartment",
    desc:
      "Ideal for smaller families and intimate stays, with thoughtfully designed interiors, a fully furnished lounge, and everything needed for a relaxed getaway. Restricted views, but the warmth of the space more than makes up for it. Easier on the pocket.",
    features: [
      "2 Bedrooms · 2 Washrooms",
      "Fully furnished lounge & TV",
      "Reading nook",
      "Chaaye station",
      "Fully equipped kitchen",
      "Sleeps 6",
    ],
    rooms: [
      {
        name: "Lounge",
        images: [
          "/apartments/budget/lounge/20260514_132208.jpg",
          "/apartments/budget/lounge/20260514_132228.jpg",
          "/apartments/budget/lounge/20260514_132254.jpg",
          "/apartments/budget/lounge/20260514_132307.jpg",
          "/apartments/budget/lounge/20260514_132314.jpg",
          "/apartments/budget/lounge/20260514_132328.jpg",
          "/apartments/budget/lounge/20260514_132337.jpg",
          "/apartments/budget/lounge/20260514_132411.jpg",
          "/apartments/budget/lounge/20260514_132414.jpg",
        ],
      },
      {
        name: "Kitchen",
        images: [
          "/apartments/budget/kitchen/20260514_132426.jpg",
          "/apartments/budget/kitchen/20260514_132450.jpg",
          "/apartments/budget/kitchen/20260514_132453.jpg",
          "/apartments/budget/kitchen/20260514_132456.jpg",
        ],
      },
      {
        name: "Room 1",
        images: [
          "/apartments/budget/room-1/20260514_122411.jpg",
          "/apartments/budget/room-1/20260514_124312.jpg",
          "/apartments/budget/room-1/20260514_124322.jpg",
          "/apartments/budget/room-1/20260514_124529.jpg",
          "/apartments/budget/room-1/20260514_124546.jpg",
          "/apartments/budget/room-1/20260514_124638.jpg",
          "/apartments/budget/room-1/20260514_124652.jpg",
          "/apartments/budget/room-1/20260514_124722.jpg",
          "/apartments/budget/room-1/20260514_124759.jpg",
        ],
      },
      {
        name: "Room 2",
        images: [
          "/apartments/budget/room-2/20260514_125410.jpg",
          "/apartments/budget/room-2/20260514_125429.jpg",
          "/apartments/budget/room-2/20260514_125450.jpg",
          "/apartments/budget/room-2/20260514_125516.jpg",
          "/apartments/budget/room-2/20260514_125553.jpg",
          "/apartments/budget/room-2/20260514_125657.jpg",
        ],
      },
    ],
  },
];

function FeatureIcon({ i }: { i: number }) {
  const icons: ReactNode[] = [
    <svg key="0" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1v-9z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 19V8l7-4 7 4v11M9 19v-5h6v5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M11 11h2v2h-2z" fill="currentColor" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 14c2-3 5-5 9-5s7 2 9 5M3 14h18M5 14v5M19 14v5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7v10M17 7v10M7 12h10M9 4l-2 3M17 7l-2-3M5 18l2 3M19 18l-2 3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 8h8a4 4 0 010 8H6V8zM16 10h2a3 3 0 010 6h-2M5 20h14"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3 19c1-3 3-5 6-5s5 2 6 5M14 19c.5-2 2-3.5 4-3.5s3.2 1 3.8 3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>,
  ];
  return <>{icons[i % icons.length]}</>;
}

export default function Apartment({
  data,
  flip = false,
}: {
  data: ApartmentData;
  flip?: boolean;
}) {
  const [roomIdx, setRoomIdx] = useState(0);
  const [idx, setIdx] = useState(0);
  const activeRoom = data.rooms[roomIdx];
  const total = activeRoom.images.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const switchRoom = (i: number) => { setRoomIdx(i); setIdx(0); };

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
            <div className="apt-features">
              {data.features.map((f, i) => (
                <div className="apt-feat" key={i}>
                  <FeatureIcon i={i} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Magnetic strength={0.25}>
              <a href="#contact" className="btn">
                <span>Reserve {data.name}</span>
                <span className="arrow">→</span>
              </a>
            </Magnetic>
          </div>
          <div className="apt-media reveal reveal-d2">
            {data.rooms.length > 1 && (
              <div className="apt-room-tabs">
                {data.rooms.map((room, i) => (
                  <button
                    key={i}
                    className={`apt-room-tab ${i === roomIdx ? "active" : ""}`}
                    onClick={() => switchRoom(i)}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
            )}
            <div className="apt-gallery">
              {activeRoom.images.map((src, i) => (
                <div
                  key={`${roomIdx}-${i}`}
                  className={`slide ${i === idx ? "active" : ""}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 880px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="apt-counter">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>
              <div className="apt-arrows">
                <button onClick={prev} aria-label="Previous">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <button onClick={next} aria-label="Next">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="apt-thumbs">
              {activeRoom.images.map((src, i) => (
                <div
                  key={`${roomIdx}-${i}`}
                  className={`apt-thumb ${i === idx ? "active" : ""}`}
                  onClick={() => setIdx(i)}
                >
                  <Image
                    src={src}
                    alt=""
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
