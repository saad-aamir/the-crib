"use client";

import { FormEvent, useState } from "react";

const BG =
  "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=2000&q=80";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      checkin: (form.elements.namedItem("checkin") as HTMLInputElement).value,
      checkout: (form.elements.namedItem("checkout") as HTMLInputElement).value,
      apartment: (form.elements.namedItem("apartment") as HTMLInputElement).value,
      note: (form.elements.namedItem("note") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Something went wrong — please email us directly.");
    } finally {
      setLoading(false);
    }
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
            <div className="eyebrow">Chapter 05 · Reserve</div>
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
                  <a
                    href="https://wa.me/923065440665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="c-whatsapp-link"
                  >
                    <svg className="c-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    +92 306 544 0665
                  </a>
                </div>
              </div>
              <div className="c-detail">
                <div className="lbl">Email</div>
                <div className="val">
                  <a href="mailto:thecribmurree@gmail.com">thecribmurree@gmail.com</a>
                </div>
              </div>
              <div className="c-detail">
                <div className="lbl">Instagram</div>
                <div className="val">
                  <a href="https://instagram.com/thecribmurree" target="_blank" rel="noopener noreferrer">@thecribmurree</a>
                </div>
              </div>
              <div className="c-detail">
                <div className="lbl">Facebook</div>
                <div className="val">
                  <a href="https://facebook.com/thecribmurree" target="_blank" rel="noopener noreferrer">thecribmurree</a>
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
                  <input name="name" type="text" required placeholder="Full name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input name="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>

              <div className="c-fieldgrid">
                <div className="field">
                  <label>Check-in</label>
                  <input name="checkin" type="date" required />
                </div>
                <div className="field">
                  <label>Check-out</label>
                  <input name="checkout" type="date" required />
                </div>
              </div>

              <div className="c-fieldgrid full" style={{ marginBottom: 36 }}>
                <div className="field">
                  <label>Which apartment</label>
                  <input
                    name="apartment"
                    type="text"
                    placeholder="The Grand Suite · The Essentials Suite · Either"
                  />
                </div>
              </div>

              <div className="c-fieldgrid full">
                <div className="field">
                  <label>A short note</label>
                  <textarea name="note" placeholder="Guests, occasion, dietary notes — anything that helps us prepare." />
                </div>
              </div>

              <div className="c-form-foot">
                <button type="submit" disabled={loading || sent}>
                  <span>
                    {sent ? "Thank you — we'll be in touch" : loading ? "Sending…" : "Send inquiry"}
                  </span>
                  {!sent && <span className="arrow">→</span>}
                </button>
                <div className="c-form-note">
                  {error ? error : "We reply within 30 minutes, often sooner."}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
