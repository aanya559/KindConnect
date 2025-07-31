// import React from 'react';
// import './Dashboard.css';

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h1>Your Volunteering Impact at a Glance</h1>
//         <p>Your central hub for all volunteering activities </p>
//       </div>

//       <div className="dashboard-stats">
//         <div className="stat-card">
//           <h3>Total Hours Volunteered</h3>
//           <span>124</span>
//         </div>
//         <div className="stat-card">
//           <h3>Events Attended</h3>
//           <span>9</span>
//         </div>
//         <div className="stat-card">
//           <h3>Certificates Earned</h3>
//           <span>4</span>
//         </div>
//       </div>

//       <div className="quick-actions">
//         <h2>Quick Actions</h2>
//         <div className="actions-container">
//           <button className="action-btn">Create Event</button>
//           <button className="action-btn">Join New Event</button>
//           <button className="action-btn">Download Certificate</button>
//         </div>
//       </div>

//       <div className="upcoming-events">
//         <h2>Upcoming Events</h2>
//         <ul>
//           <li> Tree Plantation Drive - July 10</li>
//           <li> Food Distribution Camp - July 14</li>
//           <li> Weekend Teaching Session - July 20</li>
//         </ul>
//       </div>

//       <div className="dashboard-faq">
//         <h2>FAQs</h2>
//         <ul>
//           <li><strong>How do I volunteer?</strong><br />Check available events and click "Join New Event".</li>
//           <li><strong>Where can I download my certificate?</strong><br />Use the “Download Certificate” button in Quick Actions.</li>
//           <li><strong>Can I host an event?</strong><br />Yes! Click “Create Event” and fill out the form.</li>
//         </ul>
//       </div>

      
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Your Volunteering Impact at a Glance</h1>
        <p>Your central hub for all volunteering activities</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Hours Volunteered</h3>
          <span>124</span>
        </div>
        <div className="stat-card">
          <h3>Events Attended</h3>
          <span>9</span>
        </div>
        <div className="stat-card">
          <h3>Certificates Earned</h3>
          <span>4</span>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-container">
          <button className="action-btn">Create Event</button>
          <button className="action-btn">Join New Event</button>
          <button className="action-btn">Download Certificate</button>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>🌱 You joined the Tree Plantation Drive in Delhi (July 5)</li>
          <li>🍱 You volunteered at the Food Drive in Lucknow (June 28)</li>
          <li>📚 You taught at the Weekend School Program (June 22)</li>
        </ul>
      </div>

      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>🌳 Tree Plantation Drive - July 10</li>
          <li>🥘 Food Distribution Camp - July 14</li>
          <li>📖 Weekend Teaching Session - July 20</li>
        </ul>
      </div>

      <div className="dashboard-faq">
        <h2>FAQs</h2>
        <ul>
          <li><strong>How do I volunteer?</strong><br />Check available events and click "Join New Event".</li>
          <li><strong>Where can I download my certificate?</strong><br />Use the “Download Certificate” button in Quick Actions.</li>
          <li><strong>Can I host an event?</strong><br />Yes! Click “Create Event” and fill out the form.</li>
        </ul>
      </div>

      {/* <div className="dashboard-footer">
        💖 Keep making a difference. Every action counts!
      </div> */}
    </div>
  );
};

export default Dashboard;
