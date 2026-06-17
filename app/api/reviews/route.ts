import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=reviews,rating,user_ratings_total,url&reviews_sort=newest&key=${apiKey}`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  if (data.status !== "OK") {
    return NextResponse.json({ error: data.status }, { status: 502 });
  }

  return NextResponse.json({
    rating: data.result.rating,
    total: data.result.user_ratings_total,
    url: data.result.url ?? null,
    reviews: (data.result.reviews ?? []).filter(
      (r: { text?: string }) => r.text && r.text.trim().length > 15
    ),
  });
}
