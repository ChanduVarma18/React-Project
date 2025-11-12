import React from "react";
import TopNav from "../components/TopNav";
import "./CareersJobseeker.css";

export default function Home() {
  return (
    <div className="page">
      <TopNav />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>VolksKaat</span></h1>
          <p>Your career journey starts here.</p>
        </div>
      </section>
    </div>
  );
}
