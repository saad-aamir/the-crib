export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-mark reveal">
          The Crib
          <br />
          <em>Murree Hills</em>
        </div>
        <div className="f-grid">
          <div>
            <h5>The Crib</h5>
            <p className="f-blurb">
              A boutique stay of two apartments in the deodar pines of Murree.
              Quiet by design, kept like a home.
            </p>
          </div>
          <div>
            <h5>Visit</h5>
            <ul>
              <li>
                <a href="#apartments">Cedar House</a>
              </li>
              <li>
                <a href="#apartments">Pine Loft</a>
              </li>
              <li>
                <a href="#location">Location</a>
              </li>
              <li>
                <a href="#pricing">Rates</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>+92 321 627 8382</li>
              <li>thecrib@gmail.com</li>
              <li>Murree, Pakistan</li>
            </ul>
          </div>
          <div>
            <h5>Follow</h5>
            <div className="f-social">
              <a href="#" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 8h2V5h-2a3 3 0 00-3 3v2H9v3h2v8h3v-8h2.5l.5-3H14V8.5c0-.3.2-.5.5-.5z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <div>© 2026 The Crib · Murree Hills</div>
          <div>Made slowly, in the pines</div>
        </div>
      </div>
    </footer>
  );
}
