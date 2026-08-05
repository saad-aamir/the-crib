import { APARTMENTS } from "@/lib/apartments";

const BASE_URL = "https://thecribmurree.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

type Entry = { loc: string; caption: string; title: string };

/**
 * Google dropped the standalone image-sitemap format from its docs but still
 * honours image:image extensions, so every apartment photo gets a captioned
 * entry here — that's what surfaces them for "apartments in Murree" image searches.
 */
function entries(): Entry[] {
  const rooms = APARTMENTS.flatMap((apt) =>
    apt.rooms.flatMap((room) =>
      room.images.map((src) => ({
        loc: `${BASE_URL}${src}`,
        title: `${apt.name} — ${room.name}`,
        caption: `${room.name} of ${apt.name}, a ${apt.sub.toLowerCase()} at The Crib — boutique apartments to rent in Murree, Pakistan.`,
      }))
    )
  );

  return [
    {
      loc: `${BASE_URL}/og-image.jpg`,
      title: "The Crib Murree",
      caption:
        "The Crib — boutique apartments and holiday rentals in Murree, 45 minutes from Islamabad.",
    },
    {
      loc: `${BASE_URL}/mall-road.jpg`,
      title: "Mall Road, Murree",
      caption: "Mall Road, Murree — minutes from The Crib apartments.",
    },
    {
      loc: `${BASE_URL}/vicinity-cafe.jpg`,
      title: "Cafés near The Crib, Murree",
      caption:
        "Cafés and restaurants in the vicinity of The Crib apartments on Murree Expressway.",
    },
    ...rooms,
  ];
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}</loc>
${entries()
  .map(
    (e) => `    <image:image>
      <image:loc>${esc(e.loc)}</image:loc>
      <image:title>${esc(e.title)}</image:title>
      <image:caption>${esc(e.caption)}</image:caption>
    </image:image>`
  )
  .join("\n")}
  </url>
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
