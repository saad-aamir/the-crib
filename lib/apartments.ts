/**
 * Apartment content — plain data module (no "use client") so server code
 * (layout metadata, JSON-LD, image sitemap) can read it directly.
 */

export type RoomData = {
  name: string;
  images: string[];
};

export type ApartmentData = {
  num: string;
  name: string;
  sub: string;
  desc: string;
  descHighlight?: string;
  features: string[];
  rooms: RoomData[];
};

export const APARTMENTS: ApartmentData[] = [
  {
    num: "01",
    name: "The Grand Suite",
    sub: "The forest-facing retreat",
    desc:
      "A three-bedroom corner apartment with a warm, comfortable lounge and a fully equipped kitchen. Floor-to-ceiling windows open toward the pines, filling the space with light and stillness. Designed for slow mornings, quiet evenings, and effortless stays.",
    descHighlight: "Reserved access to a game and a cinema room.",
    features: [
      "3 Bedrooms",
      "Game room & soon to come private cinema room",
      "Forest-view balcony",
      "Chaye and coffee station",
      "Fully equipped kitchen",
      "Sleeps 9",
    ],
    rooms: [
      {
        name: "Lounge",
        images: [
          "/apartments/corner/lounge/20260514_152558.jpg",
          "/apartments/corner/lounge/20260514_152536.jpg",
          "/apartments/corner/lounge/20260514_152639.jpg",
        ],
      },
      {
        name: "Room 1",
        images: [
          "/apartments/corner/room-1/20260514_154848.jpg",
          "/apartments/corner/room-1/20260514_154755.jpg",
          "/apartments/corner/room-1/20260514_155056.jpg",
        ],
      },
      {
        name: "Room 2",
        images: [
          "/apartments/corner/room-2/20260514_161055.jpg",
          "/apartments/corner/room-2/20260514_161109.jpg",
          "/apartments/corner/room-2/20260514_161159.jpg",
        ],
      },
      {
        name: "Room 3",
        images: [
          "/apartments/corner/room-3/20260514_163132.jpg",
          "/apartments/corner/room-3/20260514_163320.jpg",
          "/apartments/corner/room-3/20260514_163354.jpg",
        ],
      },
      {
        name: "Balcony",
        images: [
          "/apartments/corner/balcony/Balcony-301.jpg",
          "/apartments/corner/balcony/Balcony-3-301.jpg",
          "/apartments/corner/balcony/Balcony-5-301.jpg",
        ],
      },
      {
        name: "Game Room",
        images: [
          "/apartments/corner/game-room/20260521_162151.jpg",
          "/apartments/corner/game-room/20260521_161833.jpg",
          "/apartments/corner/game-room/20260521_162123.jpg",
        ],
      },
    ],
  },
  {
    num: "02",
    name: "The Essentials Suite",
    sub: "Budget option for family stays",
    desc:
      "Ideal for smaller families and intimate stays, with thoughtfully designed interiors, a fully furnished lounge, and everything needed for a relaxed getaway.",
    descHighlight: "Restricted views, but the warmth of the space more than makes up for it. Easier on the pocket.",
    features: [
      "2 Bedrooms · 2 Washrooms",
      "Fully furnished lounge",
      "Reading nook",
      "Chaye and coffee station",
      "Fully equipped kitchen",
      "Sleeps 6",
    ],
    rooms: [
      {
        name: "Lounge",
        images: [
          "/apartments/budget/lounge/20260514_132411.jpg",
          "/apartments/budget/lounge/20260514_132208.jpg",
          "/apartments/budget/lounge/20260514_132254.jpg",
          "/apartments/budget/lounge/20260514_132307.jpg",
          "/apartments/budget/lounge/20260514_132414.jpg",
        ],
      },
      {
        name: "Room 1",
        images: [
          "/apartments/budget/room-1/20260514_122411.jpg",
          "/apartments/budget/room-1/20260514_124312.jpg",
          "/apartments/budget/room-1/20260514_124638.jpg",
        ],
      },
      {
        name: "Room 2",
        images: [
          "/apartments/budget/room-2/20260514_125450.jpg",
          "/apartments/budget/room-2/20260514_125410.jpg",
          "/apartments/budget/room-2/20260514_125429.jpg",
        ],
      },
    ],
  },
  {
    num: "03",
    name: "The Prestige Suite",
    sub: "The mountain-view sanctuary",
    desc:
      "A three-bedroom residence built for families and larger groups, with an elegant lounge that opens onto a private terrace and a dining area made for long, unhurried meals. Three balconies frame uninterrupted views of the mountains and the valley beyond.",
    descHighlight:
      "Sleeps up to twelve, with three complimentary floor mattresses. Café menu available on request.",
    features: [
      "3 Bedrooms · 3 Bathrooms",
      "Lounge with private terrace",
      "3 mountain & valley balconies",
      "Chaye and coffee station",
      "Access to the game room",
      "UPS backup · High-speed Wi-Fi",
      "Sleeps 12",
    ],
    rooms: [
      {
        name: "Lounge",
        images: [
          "/apartments/prestige/lounge/1.jpg",
          "/apartments/prestige/lounge/2.jpg",
          "/apartments/prestige/lounge/3.jpg",
        ],
      },
      {
        name: "Room 1",
        images: [
          "/apartments/prestige/room-1/1.jpg",
        ],
      },
      {
        name: "Room 2",
        images: [
          "/apartments/prestige/room-2/1.jpg",
        ],
      },
      {
        name: "Room 3",
        images: [
          "/apartments/prestige/room-3/1.jpg",
        ],
      },
      {
        name: "Terrace",
        images: [
          "/apartments/prestige/terrace/1.jpg",
          "/apartments/prestige/terrace/2.jpg",
        ],
      },
      {
        name: "Balcony",
        images: [
          "/apartments/prestige/balcony/1.jpg",
          "/apartments/prestige/balcony/2.jpg",
          "/apartments/prestige/balcony/3.jpg",
        ],
      },
    ],
  },
  {
    num: "04",
    name: "The Penthouse Suite",
    sub: "Elevated living with a private rooftop",
    desc:
      "A two-bedroom penthouse for those who want a little more height and a little more sky. A comfortable lounge with Netflix, a dining area, and two balconies that open onto a private rooftop terrace — the quietest place to watch the evening settle over the hills.",
    descHighlight:
      "Sleeps up to eight, with two complimentary floor mattresses.",
    features: [
      "2 Bedrooms · 2 Bathrooms",
      "Lounge with Netflix",
      "Private rooftop terrace",
      "2 balconies",
      "Chaye and coffee station",
      "Access to the game room",
      "UPS backup · High-speed Wi-Fi",
      "Sleeps 8",
    ],
    rooms: [
      {
        name: "Lounge",
        images: [
          "/apartments/penthouse/lounge/1.jpg",
          "/apartments/penthouse/lounge/2.jpg",
        ],
      },
      {
        name: "Room 1",
        images: [
          "/apartments/penthouse/room-1/1.jpg",
          "/apartments/penthouse/room-1/2.jpg",
        ],
      },
      {
        name: "Room 2",
        images: [
          "/apartments/penthouse/room-2/1.jpg",
          "/apartments/penthouse/room-2/2.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "/apartments/penthouse/dining/1.jpg",
          "/apartments/penthouse/dining/2.jpg",
        ],
      },
    ],
  },
];
