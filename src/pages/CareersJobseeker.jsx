import React from "react";
import "./CareersJobseeker.css";

export default function CareersJobseeker() {
  return (
    <div className="page">
      <TopNav />
      <Hero />
      <Intro />
      <JobseekersHover />
    </div>
  );
}

/* ------------------ Top Nav ------------------ */
function TopNav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <a href="#" className="logo" aria-label="OrangeHRM Home">
          <span className="logo-icon">🍊</span>
          <span className="logo-text">
            Orange<span className="highlight">HRM</span>
          </span>
        </a>

        {/* Center links */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Fresher</a></li>
          <li><a href="#">Experince</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Contact US</a></li>
        </ul>

        {/* Right actions */}
        <div className="actions">
          <button className="lang-btn">🌐 English ▾</button>
          <a href="#" className="demo-link">Book a Free Demo</a>
          <button className="cta-btn">Contact Sales</button>
        </div>
      </div>
    </nav>
  );
}

/* ------------------ Hero ------------------ */
function Hero() {
  return (
    <header className="hero">
      <h1>Grow with OrangeHRM</h1>
    </header>
  );
}

/* ------------------ Intro ------------------ */
function Intro() {
  return (
    <section className="intro">
      <h2>We're Looking for Exceptional Talent</h2>
      <p>
        At OrangeHRM, we play to win. Every day brings a new challenge and an
        opportunity to learn and grow. We're always looking for passionate,
        talented, and creative people to join our global team. If you're
        looking for a challenge that will lead you to the next level of your
        career, you've found the right place. Apply for your favorite vacancy
        below!
      </p>
      <a href="#jobseekers" className="primary-btn">View Open Positions</a>
    </section>
  );
}

/* ------------------ Hover-based Jobseekers ------------------ */
function JobseekersHover() {
  return (
    <section id="jobseekers" className="hover-jobseekers">
      <span className="js-badge">Jobseekers</span>
      <h3 className="hover-title">Choose your path</h3>
      <p className="hover-subtext">
        Hover over each category to explore available guidance.
      </p>

      <div className="hover-container">
        {/* Fresher */}
        <div className="hover-card fresher-card">
          <div className="main-title">Fresher</div>
          <ul className="hover-list fresher-list">
            <li>Interviews</li>
            <li>Mocktests / Interviews</li>
            <li>Resumemaking</li>
            <li>Communication</li>
            <li>Workshops & Bootcamps</li>
            <li>Find trainer</li>
            <li>Projects</li>
            <li>Industry / field</li>
            <li>Education</li>
            <li>Courses</li>
            <li>Recommendations</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="hover-card experience-card">
          <div className="main-title">Experience</div>
          <ul className="hover-list experience-list">
            <li>Industry / Field</li>
            <li>Job Title</li>
            <li>Job Description</li>
            <li>Skills</li>
            <li>Relevant Experience</li>
            <li>Recommendations</li>
            <li>Location</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
