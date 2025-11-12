import React from "react";
import TopNav from "../components/TopNav";
import "../components/CareersJobseeker.css";

export default function About() {
  return (
    <div className="page about-page">
      <TopNav />
      <section className="hero" aria-label="About hero">
        <div className="hero-content">
          <div>
            <h1>About <span>VolksKaat</span></h1>
            <p className="hero-sub">
              Learn more about our mission, values, and how we connect talent with opportunity.
            </p>
          </div>

          {/* About cards (optional mini showcase) */}
          <div className="cards">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To empower professionals and organizations through innovative technology that simplifies hiring.
              </p>
            </div>
            <div className="card">
              <h3>Our Values</h3>
              <p>
                Integrity, innovation, and collaboration drive everything we do at VolksKaat Infotech.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
