import React, { useState } from "react";
import "./CareersJobseeker.css";

export default function CareersJobseeker() {
  return (
    <div className="page">
      <TopNav />
      <Hero />
      <Categories />
    </div>
  );
}

/* ------------------ Navbar ------------------ */
function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Left: Company Name */}
        <div className="nav-logo">
          <span className="brand">VolksKaat</span>
          <span className="accent">Infotech</span>
        </div>

        {/* Right: Navigation Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
}

/* ------------------ Hero Section ------------------ */
function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      {/* overlay is handled in CSS with ::before */}
      <div className="hero-content">
        <h1>
          Career Opportunities
        </h1>
        <p>Select your category:</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
}

/* ------------------ Categories (cards) ------------------ */
function Categories() {
  return (
    <section className="content-section" aria-label="Career categories">
      <h2>Discover Opportunities</h2>
      <div className="subtext">Find roles or post jobs — tailored for job seekers and employers.</div>

      <div className="cards">
        <div className="card" role="region" aria-label="Job seekers card">
          <h3>Job Seekers</h3>
          <p>Find your dream job and apply directly to top companies. Browse roles, save favorites, and get alerts for new openings that match your profile.</p>
          <button className="btn" onClick={() => { window.location.href = "#"; }}>Explore Jobs</button>
        </div>

        <div className="card" role="region" aria-label="Employers card">
          <h3>Employers</h3>
          <p>Post openings and discover talented professionals. Manage applicants, shortlist, and connect with the right candidates quickly and securely.</p>
          <button className="btn" onClick={() => { window.location.href = "#"; }}>Post a Job</button>
        </div>
      </div>
    </section>
  );
}
