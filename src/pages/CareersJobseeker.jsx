import React from "react";
import TopNav from "../components/TopNav";
import "./CareersJobseeker.css";

export default function CareersJobseeker() {
  return (
    <div className="page careers-page">
      <TopNav />
      <section className="hero" aria-label="Careers hero">
        <div className="hero-content">
          <h1>Career Opportunities</h1>
          <p className="hero-sub">Select your category:</p>

          {/* Cards moved inside the hero so everything fits in one viewport */}
          <div className="cards">
            <div className="card" role="region" aria-label="Job seekers card">
              <h3>Job Seekers</h3>
              <p>Find your dream job and apply directly to top companies.</p>
              <button className="btn" onClick={() => { /* add route later */ }}>Explore Jobs</button>
            </div>

            <div className="card" role="region" aria-label="Employers card">
              <h3>Employeers</h3>
              <p>Post openings and discover talented professionals.</p>
              <button className="btn" onClick={() => { /* add route later */ }}>Post a Job</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
