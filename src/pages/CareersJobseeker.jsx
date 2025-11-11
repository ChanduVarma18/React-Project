import React from "react";
import "./CareersJobseeker.css";

export default function CareersJobseeker() {
  return (
    <div className="page">
      <TopNav />
      <Hero />
      <Intro />
      <JobseekersFlow />
      <Footer />
    </div>
  );
}

/* ------------------ Top Nav ------------------ */
function TopNav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="container nav-inner">
        <a href="#" className="logo" aria-label="Home">
          <span className="logo-mark"></span>
          <span className="logo-word">
            VolkssKaat <span className="accent">Careers</span>
          </span>
        </a>

        <ul className="nav-links" role="menubar">
          <li role="none"><a role="menuitem" href="#">Home</a></li>

          {/* Fresher mega dropdown */}
          <li className="nav-item has-mega" role="none">
            <a role="menuitem" href="#flow" className="nav-link">Fresher ▾</a>
            <div className="mega" role="menu" aria-label="Fresher modules">
              <div className="mega-col">
                <p className="mega-title">Start Here</p>
                <a href="#flow">Overview</a>
                <a href="#flow">Interviews</a>
                <a href="#flow">Mocktests / Interviews</a>
                <a href="#flow">Resumemaking</a>
              </div>
              <div className="mega-col">
                <p className="mega-title">Skills</p>
                <a href="#flow">Communication</a>
                <a href="#flow">Workshops & Bootcamps</a>
                <a href="#flow">Projects</a>
              </div>
              <div className="mega-col">
                <p className="mega-title">Guidance</p>
                <a href="#flow">Industry / field</a>
                <a href="#flow">Education</a>
                <a href="#flow">Courses</a>
                <a href="#flow">Recommendations</a>
              </div>
            </div>
          </li>

          {/* Experience mega dropdown */}
          <li className="nav-item has-mega" role="none">
            <a role="menuitem" href="#flow" className="nav-link">Experience ▾</a>
            <div className="mega" role="menu" aria-label="Experience modules">
              <div className="mega-col">
                <p className="mega-title">Role & Domain</p>
                <a href="#flow">Industry / Field</a>
                <a href="#flow">Job Title</a>
                <a href="#flow">Job Description</a>
              </div>
              <div className="mega-col">
                <p className="mega-title">Capability</p>
                <a href="#flow">Skills</a>
                <a href="#flow">Relevant Experience</a>
              </div>
              <div className="mega-col">
                <p className="mega-title">Logistics</p>
                <a href="#flow">Recommendations</a>
                <a href="#flow">Location</a>
              </div>
            </div>
          </li>

          {/* Keep these links if you’ll add sections later */}
          <li role="none"><a role="menuitem" href="#about">About</a></li>
          <li role="none"><a role="menuitem" href="#contact">Contact</a></li>
        </ul>

        <div className="actions">
          <button className="btn ghost">🌐 English ▾</button>
          <a className="btn ghost" href="#">Book a demo</a>
          <button className="btn primary">Contact sales</button>
        </div>
      </div>
    </nav>
  );
}

/* ------------------ Hero ------------------ */
function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <h1>Grow with Volksskaat</h1>
        <p>
          Where talent meets opportunity — and careers take flight. Hover a card to explore modules.
        </p>
      </div>
    </header>
  );
}

/* ------------------ Intro (Exceptional Talent with real images) ------------------ */
function Intro() {
  return (
    <section className="intro-v2">
      <div className="container intro-v2-inner">
        <h2 className="intro-v2-title">We&apos;re Looking for Exceptional Talent</h2>

        <p className="intro-v2-lead">
          At VolksKaat, we believe great teams build extraordinary futures. Every day brings a chance
          to explore, create, and make real impact. We value curiosity, collaboration, and a growth
          mindset. Join a culture where ideas thrive, innovation is encouraged, and your career can
          grow without limits.
        </p>

        <a href="#flow" className="btn cta-orange intro-v2-cta">View Open Positions</a>

        {/* Team Avatars Row — uses real images (works with your CSS .intro-v2-avatars img.av) */}
        <div className="intro-v2-avatars" aria-hidden="true">
          <img
            className="av av-1"
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Team member"
          />
          <img
            className="av av-2"
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="Team member"
          />
          <img
            className="av av-3"
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="Team member"
          />
          <img
            className="av av-4"
            src="https://randomuser.me/api/portraits/men/21.jpg"
            alt="Team member"
          />
          <img
            className="av av-5"
            src="https://randomuser.me/api/portraits/women/19.jpg"
            alt="Team member"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------ Flow Diagram ------------------ */
function JobseekersFlow() {
  return (
    <section id="flow" className="flow">
      <div className="container">
        <div className="flow-head">
          <div className="pill" tabIndex={0}>
            <span className="pill-title">Jobseekers</span>
            <span className="pill-sub">d.login</span>
          </div>
        </div>

        <svg className="flow-curves" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M600 30 C 600 120, 240 120, 240 200" className="curve" />
          <path d="M600 30 C 600 120, 960 120, 960 200" className="curve" />
        </svg>

        <div className="rails">
          <Rail
            tone="teal"
            title="Fresher"
            subtitle="Kickstart & fundamentals"
            items={[
              "Interviews",
              "Mocktests / Interviews",
              "Resumemaking",
              "Communication",
              "Workshops & Bootcamps",
              "Find trainer",
              "Projects",
              "Industry / field",
              "Education",
              "Courses",
              "Recommendations",
            ]}
          />
          <Rail
            tone="azure"
            title="Experience"
            subtitle="Deep dive & specialization"
            items={[
              "Industry / Field",
              "Job Title",
              "Job Description",
              "Skills",
              "Relevant Experience",
              "Recommendations",
              "Location",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Rail({ tone, title, subtitle, items }) {
  const chipClass = tone === "teal" ? "chip-orange" : "chip-rose";

  return (
    <div className="rail" tabIndex={0}>
      <div className="rail-card" role="button" aria-haspopup="true">
        <div className="rail-icon" aria-hidden>🎯</div>
        <div className="rail-text">
          <h3>{title}</h3>
          <p className="muted">{subtitle}</p>
        </div>
        <div className="rail-caret" aria-hidden>▸</div>
      </div>

      <div className="flyout" role="menu" aria-label={`${title} modules`}>
        <header className="flyout-head">
          <span className="dot" />
          <span className="flyout-title">{title} modules</span>
        </header>
        <ul className="flyout-list">
          {items.map((t) => (
            <li className={`chip ${chipClass}`} key={t} role="menuitem" tabIndex={0}>
              <span className="tick" aria-hidden>•</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------ Footer ------------------ */
function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <span className="muted">© {new Date().getFullYear()} VolksKaat • Careers Toolkit</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Status</a>
        </div>
      </div>
    </footer>
  );
}
