import React from "react";
import TopNav from "../components/TopNav";
import "../components/CareersJobseeker.css";

export default function Contact() {
  return (
    <div className="page contact-page">
      <TopNav />
      <section className="hero" aria-label="Contact hero">
        <div className="hero-content">
          <div>
            <h1>Contact <span>Us</span></h1>
            <p className="hero-sub">
              We’re here to help — get in touch with us for any queries or support.
            </p>
          </div>

          {/* Contact info cards (fit within viewport) */}
          <div className="cards">
            <div className="card">
              <h3>Email</h3>
              <p>Reach us anytime at</p>
              <button className="btn" onClick={() => window.location.href = "mailto:hello@volkskaat.com"}>
                hello@volkskaat.com
              </button>
            </div>

            <div className="card">
              <h3>Office</h3>
              <p>
                VolksKaat Infotech<br />
                Hyderabad, India
              </p>
              <button className="btn" onClick={() => window.open("https://maps.google.com", "_blank")}>
                View on Map
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
