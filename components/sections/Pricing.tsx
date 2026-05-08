export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pr-head reveal">
          <div className="eyebrow">Chapter 05 · Rates</div>
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
              The Corner Apartment
              <em style={{ color: "var(--gold-soft)" }}>
                The forest-facing retreat
              </em>
            </div>
            <div className="pr-mute">Three bedrooms · forest balcony</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">35,000</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Reserved access to the game room & private cinema</li>
              <li>Expansive forest-view balcony</li>
              <li>Chaaye station & fully equipped kitchen</li>
              <li>Concierge & daily housekeeping</li>
              <li>High-speed Wi-Fi</li>
            </ul>
          </div>
          <div className="pr-card reveal reveal-d2">
            <div className="pr-tag">Sleeps 6</div>
            <div className="name">
              The Budget Apartment<em>The comfortable family apartment</em>
            </div>
            <div className="pr-mute">Two bedrooms · two washrooms</div>
            <div className="pr-rate">
              <span className="currency">PKR</span>
              <span className="num">18,000</span>
              <span className="per">/ night</span>
            </div>
            <ul className="pr-list">
              <li>Fully furnished lounge & TV</li>
              <li>Reading nook & private balconies</li>
              <li>Chaaye station & fully equipped kitchen</li>
              <li>Concierge & daily housekeeping</li>
              <li>High-speed Wi-Fi</li>
            </ul>
            <div className="pr-note">
              Easier on the pocket. Restricted views.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
