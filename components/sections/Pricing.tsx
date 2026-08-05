export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pr-head reveal">
          <div className="eyebrow">Chapter 04 · Rates</div>
          <h2>Simple, honest rates.</h2>
          <p className="pr-sub">
            All rates are per night, in PKR.
          </p>
        </div>
        <div className="pr-grid">
          <div className="pr-card feature reveal reveal-d1">
            <div className="pr-tag" style={{ color: "var(--gold-soft)" }}>
              Sleeps 9
            </div>
            <div className="name">
              The Grand Suite
              <em style={{ color: "var(--gold-soft)" }}>
                The forest-facing retreat
              </em>
            </div>
            <div className="pr-mute">Three bedrooms · three bathrooms · forest balcony</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">38,000</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Reserved access to the game room & soon to come private cinema room</li>
              <li>Two Expansive forest-view balcony</li>
              <li>Chaye & coffee station · fully equipped kitchen</li>
              <li>Concierge & daily housekeeping</li>
              <li>High-speed Wi-Fi</li>
            </ul>
          </div>
          <div className="pr-card reveal reveal-d2">
            <div className="pr-tag">Sleeps 6</div>
            <div className="name">
              The Essentials Suite<em>Budget option for family stays</em>
            </div>
            <div className="pr-mute">Two bedrooms · two washrooms</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">25,000</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Fully furnished lounge</li>
              <li>Reading nook & private balcony</li>
              <li>Chaye & coffee station · fully equipped kitchen</li>
              <li>Concierge & daily housekeeping</li>
              <li>High-speed Wi-Fi</li>
            </ul>
            <div className="pr-note">
              Easier on the pocket. Restricted views.
            </div>
          </div>
          <div className="pr-card reveal reveal-d1">
            <div className="pr-tag">Sleeps 12</div>
            <div className="name">
              The Prestige Suite<em>The mountain-view sanctuary</em>
            </div>
            <div className="pr-mute">Three bedrooms · three bathrooms · private terrace</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">38,500</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Lounge with private terrace & dining area</li>
              <li>Three mountain & valley balconies</li>
              <li>Chaye & coffee station · café menu on request</li>
              <li>Access to the game room · UPS backup</li>
              <li>Sleeps 12 · three complimentary floor mattresses</li>
            </ul>
          </div>
          <div className="pr-card feature reveal reveal-d2">
            <div className="pr-tag" style={{ color: "var(--gold-soft)" }}>
              Sleeps 8
            </div>
            <div className="name">
              The Penthouse Suite
              <em style={{ color: "var(--gold-soft)" }}>
                Elevated living with a private rooftop
              </em>
            </div>
            <div className="pr-mute">Two bedrooms · two bathrooms · rooftop terrace</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">34,000</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Lounge with Netflix & dining area</li>
              <li>Two balconies onto a private rooftop terrace</li>
              <li>Chaye & coffee station · fully equipped kitchen</li>
              <li>Access to the game room · UPS backup</li>
              <li>Sleeps 8 · two complimentary floor mattresses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
