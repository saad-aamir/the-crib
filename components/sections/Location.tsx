const cells = [
  {
    label: "Gloria Jean's, Chaaye Khaana, Coffee Bean",
    dist: "2 min walk",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "The Mall Road",
    dist: "15 min drive · expressway",
    img: "https://placehold.co/1200x800/2B4A39/F5EFE6/png?text=Mall+Road",
  },
  {
    label: "Patriata Chairlift",
    dist: "25 min drive",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Ayubia National Park",
    dist: "40 min drive",
    img: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="wrap">
        <div className="loc-head reveal">
          <div className="eyebrow">Chapter 03 · The Setting</div>
          <h2>
            A short walk from the woods,
            <br />
            a long way from the noise.
          </h2>
        </div>
        <div className="loc-grid reveal reveal-d1">
          <div className="loc-cell loc-map span2">
            <iframe
              className="loc-map-frame"
              title="The Crib · Murree map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.36%2C33.88%2C73.43%2C33.93&layer=mapnik&marker=33.9072%2C73.3927"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="loc-map-top">
              <div className="label">Find us</div>
              <h4>
                The Crib
                <br />
                <em
                  style={{ fontStyle: "normal", color: "var(--gold-soft)" }}
                >
                  Murree, Pakistan
                </em>
              </h4>
            </div>
            <div className="loc-map-bottom">
              <div className="coords">33° 54′ 24″ N · 73° 23′ 24″ E</div>
              <a
                className="loc-map-link"
                href="https://www.openstreetmap.org/?mlat=33.9072&mlon=73.3927#map=14/33.9072/73.3927"
                target="_blank"
                rel="noopener noreferrer"
              >
                View larger map →
              </a>
            </div>
          </div>
          {cells.map((c, i) => (
            <div className="loc-cell" key={i}>
              <div
                className="loc-cell-img"
                style={{ backgroundImage: `url(${c.img})` }}
              />
              <div className="loc-cell-overlay">
                <div className="label">Nearby</div>
                <h4>{c.label}</h4>
                <div className="dist">{c.dist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
