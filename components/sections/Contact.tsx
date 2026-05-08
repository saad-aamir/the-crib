"use client";

import { FormEvent, useState } from "react";

const BG =
  "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=2000&q=80";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div
        className="contact-bg parallax"
        data-speed="0.1"
        style={{ backgroundImage: `url(${BG})` }}
      />
      <div className="contact-inner">
        <div className="wrap">
          <div className="c-head reveal">
            <div className="eyebrow">Chapter 06 · Reserve</div>
            <h2>
              Tell us when you&apos;d
              <br />
              like to come.
            </h2>
            <p>
              We keep bookings personal — no third-party platforms, no surprise fees.
              Send us your dates and we&apos;ll reply within 30 minutes with availability,
              a small welcome note, and thoughtful local recommendations for your stay.
            </p>
          </div>

          <div className="c-layout">
            <aside className="c-directory reveal">
              <div className="small-title">Direct line</div>
              <div className="c-detail">
                <div className="lbl">Phone</div>
                <div className="val">
                  <a href="tel:+923216278382">+92 321 627 8382</a>
                </div>
              </div>
              <div className="c-detail">
                <div className="lbl">Email</div>
                <div className="val">
                  <a href="mailto:thecrib@gmail.com">thecrib@gmail.com</a>
                </div>
              </div>
              <div className="c-detail">
                <div className="lbl">Instagram</div>
                <div className="val">
                  <a href="#">@thecrib.murree</a>
                </div>
              </div>
              <div className="c-detail">
                <div className="lbl">Where</div>
                <div className="val">
                  Murree Hills,
                  <br />
                  Punjab — Pakistan
                </div>
              </div>
              <div className="c-aside">
                <div className="label">A small note</div>
                <p>
                  Booking direct means a better rate for you, and the host you reach
                  is the same one waiting at the door.
                </p>
              </div>
            </aside>

            <form className="c-form reveal reveal-d2" onSubmit={submit}>
              <div className="small-title">Send an inquiry</div>
              <h3>Reserve your stay.</h3>
              <div className="sub">
                A quick note is enough. Share your dates and we&apos;ll reply within 30 minutes.
              </div>

              <div className="c-fieldgrid">
                <div className="field">
                  <label>Your name</label>
                  <input type="text" required placeholder="Full name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required placeholder="you@email.com" />
                </div>
              </div>

              <div className="c-fieldgrid">
                <div className="field">
                  <label>Check-in</label>
                  <input type="date" required />
                </div>
                <div className="field">
                  <label>Check-out</label>
                  <input type="date" required />
                </div>
              </div>

              <div className="c-fieldgrid full" style={{ marginBottom: 36 }}>
                <div className="field">
                  <label>Which apartment</label>
                  <input
                    type="text"
                    placeholder="The Corner Apartment · The Budget Apartment · Either"
                  />
                </div>
              </div>

              <div className="c-fieldgrid full">
                <div className="field">
                  <label>A short note</label>
                  <textarea placeholder="Guests, occasion, dietary notes — anything that helps us prepare." />
                </div>
              </div>

              <div className="c-form-foot">
                <button type="submit">
                  <span>
                    {sent ? "Thank you — we'll be in touch" : "Send inquiry"}
                  </span>
                  <span className="arrow">→</span>
                </button>
                <div className="c-form-note">
                  We reply within 30 minutes, often sooner.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
