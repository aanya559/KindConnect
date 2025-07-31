import React from "react";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <h1>My Volunteer Certificates</h1>
        <p>
          Every certificate here represents a step toward a better world. Through <strong>KindConnect</strong>, 
          you’ve taken action, sparked change, and inspired hope.
        </p>
        <p>
          Whether you mentored students, led awareness drives, supported the environment, or brought smiles to communities —
          your time and heart made a lasting impact.
        </p>
        <p>
          These certificates recognize your service, compassion, and leadership. Download them, showcase them,
          and let them remind you of the difference you’ve made.
        </p>
      </div>

      <div className="certificates-grid">
        {["Tree Plantation", "Food Distribution", "Teaching Program"].map((event, index) => (
          <div className="certificates-card" key={index}>
            <h2>{event} Certificate</h2>
            <p className="certificates-date">Issued: July 2025</p>
            <div className="certificates-preview">
              <p>[PDF Preview Placeholder]</p>
            </div>
            <div className="certificates-actions">
              <button className="certificates-btn download-btn">Download</button>
              <button className="certificates-btn view-btn">View</button>
            </div>
          </div>
        ))}
      </div>

      <div className="certificates-footer-note">
        <p>
           More volunteering, more impact, more recognition. Participate in upcoming events and keep adding 
          new milestones to your journey!
        </p>
      </div>
    </div>
  );
};

export default Certificates;
