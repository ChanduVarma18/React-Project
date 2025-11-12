import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/CareersJobseeker.css";

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="brand">VolksKaat</span>
          <span className="accent">Infotech</span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/careers" onClick={() => setOpen(false)}>Careers</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
        </ul>

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
