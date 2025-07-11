// import React from "react";
// import "./Certificates.css";

// const Certificates = () => {
//   return (
//     <div className="certificates-container">
//       <div className="certificates-header">
//         <h1> Your Certificates</h1>
//         <p>
//           Celebrate your contributions with pride! These certificates are more
//           than paper — they're proof of your compassion, commitment, and impact through KindConnect.
//         </p>
//         <p>
//           Whether you planted a tree, served meals, or taught young minds — every action matters.
//           Thank you for being a changemaker 
//         </p>
//       </div>

//       <div className="certificates-grid">
//         <div className="certificates-card">
//           <h2>Tree Plantation Drive</h2>
//           <p className="certificates-date">Issued: July 2025</p>
//           <div className="certificates-preview">
//             <p>[PDF Preview Here]</p>
//           </div>
//           <div className="certificates-actions">
//             <button className="certificates-btn download-btn">Download</button>
//             <button className="certificates-btn view-btn">View</button>
//           </div>
//         </div>

//         <div className="certificates-card">
//           <h2>Food Distribution Campaign</h2>
//           <p className="certificates-date">Issued: May 2025</p>
//           <div className="certificates-preview">
//             <p>[PDF Preview Here]</p>
//           </div>
//           <div className="certificates-actions">
//             <button className="certificates-btn download-btn">Download</button>
//             <button className="certificates-btn view-btn">View</button>
//           </div>
//         </div>

//         <div className="certificates-card">
//           <h2>Weekend Teaching Program</h2>
//           <p className="certificates-date">Issued: March 2025</p>
//           <div className="certificates-preview">
//             <p>[PDF Preview Here]</p>
//           </div>
//           <div className="certificates-actions">
//             <button className="certificates-btn download-btn">Download</button>
//             <button className="certificates-btn view-btn">View</button>
//           </div>
//         </div>
//       </div>

//       <div className="certificates-footer-note">
//         <p>
//           Keep participating in upcoming events and earn more recognition! 📅 New certificates will
//           appear here as you grow your volunteering journey.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Certificates;
import React from "react";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <h1>Your Certificates</h1>
        <p>
          Celebrate your contributions with pride! These certificates are more than paper —
          they're proof of your compassion, commitment, and impact through <strong>KindConnect</strong>.
        </p>
        <p>
          Whether you planted trees, served meals, or empowered young minds — every action matters.
          You're not just a volunteer; you're a community builder.
        </p>
        <p>
          These certificates showcase your dedication to making the world a better place.
          Download, share, and inspire others to join the movement of kindness.
        </p>
      </div>

      <div className="certificates-grid">
        <div className="certificates-card">
          <h2>Tree Plantation Drive</h2>
          <p className="certificates-date">Issued: July 2025</p>
          <div className="certificates-preview">
            <p>[PDF Preview Here]</p>
          </div>
          <div className="certificates-actions">
            <button className="certificates-btn download-btn">Download</button>
            <button className="certificates-btn view-btn">View</button>
          </div>
        </div>

        <div className="certificates-card">
          <h2>Food Distribution Campaign</h2>
          <p className="certificates-date">Issued: May 2025</p>
          <div className="certificates-preview">
            <p>[PDF Preview Here]</p>
          </div>
          <div className="certificates-actions">
            <button className="certificates-btn download-btn">Download</button>
            <button className="certificates-btn view-btn">View</button>
          </div>
        </div>

        <div className="certificates-card">
          <h2>Weekend Teaching Program</h2>
          <p className="certificates-date">Issued: March 2025</p>
          <div className="certificates-preview">
            <p>[PDF Preview Here]</p>
          </div>
          <div className="certificates-actions">
            <button className="certificates-btn download-btn">Download</button>
            <button className="certificates-btn view-btn">View</button>
          </div>
        </div>
      </div>

      <div className="certificates-footer-note">
        <p>
          🌱 Keep making a difference — your journey of kindness is just beginning!
          Earn more certificates as you participate in upcoming events and create positive impact.
        </p>
      </div>
    </div>
  );
};

export default Certificates;
