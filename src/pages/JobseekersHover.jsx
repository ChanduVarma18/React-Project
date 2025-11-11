import React from "react";
import "./JobseekersHover.css";

export default function JobseekersHover() {
  return (
    <section className="hover-jobseekers">
      <h2 className="hover-title">Jobseekers</h2>
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
