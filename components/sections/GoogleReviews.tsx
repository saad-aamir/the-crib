"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

type ReviewsData = {
  rating: number;
  total: number;
  url: string | null;
  reviews: Review[];
};

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg className="gr-g" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author_name.trim().charAt(0).toUpperCase();
  const text = review.text.length > 240 ? review.text.slice(0, 240).trimEnd() + "…" : review.text;

  return (
    <div className="gr-card">
      <div className="gr-card-top">
        <span className="gr-card-stars">
          {"★".repeat(Math.min(review.rating, 5))}
          {"☆".repeat(Math.max(0, 5 - review.rating))}
        </span>
        <GoogleG size={16} />
      </div>
      <p className="gr-card-text">&ldquo;{text}&rdquo;</p>
      <div className="gr-card-author">
        <div className="gr-card-avatar">{initial}</div>
        <div>
          <div className="gr-card-name">{review.author_name}</div>
          <div className="gr-card-time">{review.relative_time_description}</div>
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isInteracting = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d: ReviewsData & { error?: string }) => {
        if (d.reviews?.length) setData(d);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const SPEED = 0.6;

    function tick() {
      if (!isInteracting.current && el) {
        el.scrollLeft += SPEED;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [data]);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isInteracting.current = true;
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isInteracting.current || !scrollRef.current) return;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
  };

  const onMouseUp = () => { isInteracting.current = false; };
  const onTouchStart = () => { isInteracting.current = true; };
  const onTouchEnd = () => { isInteracting.current = false; };

  if (!data) return null;

  const { rating, total, url, reviews } = data;

  return (
    <section className="google-reviews">
      <div className="wrap">
        <div className="gr-head">
          <div className="eyebrow">Chapter 03 · The Guests</div>
          <h2 className="gr-heading">In their own words.</h2>
          <div className="gr-badge">
            <GoogleG size={22} />
            <span className="gr-badge-rating">{rating.toFixed(1)}</span>
            <span className="gr-badge-stars">{"★".repeat(Math.round(rating))}</span>
            <span className="gr-badge-sep" aria-hidden="true">·</span>
            <span className="gr-badge-count">{total.toLocaleString()} reviews</span>
          </div>
        </div>
      </div>

      <div
        className="gr-scroll"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label="Google reviews"
      >
        <div className="gr-track">
          {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
          {reviews.map((r, i) => <ReviewCard key={`d${i}`} review={r} />)}
        </div>
      </div>

      <div className="gr-foot">
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="gr-link">
            <GoogleG size={14} />
            <span>See all reviews on Google</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
