export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pr-head reveal">
          <div className="eyebrow">Chapter 05 · Rates</div>
          <h2>Simple, seasonal pricing.</h2>
          <p className="pr-sub">
            All rates are per night, in PKR. Two-night minimum on weekends.
          </p>
        </div>
        <div className="pr-grid">
          <div className="pr-card reveal reveal-d1">
            <div className="pr-tag">Sleeps 4</div>
            <div className="name">
              Cedar House<em>The forest-facing retreat</em>
            </div>
            <div className="pr-mute">Two bedrooms · 1,400 sq ft</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">28,000</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Weekday rate · Mon–Thu</li>
              <li>Weekend +20% · Fri–Sun</li>
              <li>Welcome breakfast included</li>
              <li>Concierge & housekeeping daily</li>
              <li>Free cancellation · 7 days prior</li>
            </ul>
            <div className="pr-note">
              Peak season (Jun–Aug, Dec) priced separately.
            </div>
          </div>
          <div className="pr-card feature reveal reveal-d2">
            <div className="pr-tag" style={{ color: "var(--gold-soft)" }}>
              Sleeps 2
            </div>
            <div className="name">
              Pine Loft
              <em style={{ color: "var(--gold-soft)" }}>
                A loft above the canopy
              </em>
            </div>
            <div className="pr-mute">One bedroom · 720 sq ft</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">19,500</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Weekday rate · Mon–Thu</li>
              <li>Weekend +20% · Fri–Sun</li>
              <li>Welcome breakfast included</li>
              <li>Concierge & housekeeping daily</li>
              <li>Free cancellation · 7 days prior</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
