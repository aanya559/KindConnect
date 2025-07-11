// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home">
//       <section className="hero">
//         <div className="hero-left">
//           <h1>
//             Welcome to <span className="highlight">KindConnect</span>
//           </h1>
//           <p>
//             KindConnect is your platform for purpose. Whether you're passionate
//             about the environment, education, or food outreach — we help you
//             take real action and connect with like-minded changemakers.
//           </p>
//           <div className="hero-buttons">
//             <Link to="/volunteers" className="btn primary">
//               Join as Volunteer
//             </Link>
//             <Link to="/events" className="btn secondary">
//               View Events
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="about">
//         <h2>About KindConnect</h2>
//         <p>
//           KindConnect is your trusted companion in the world of volunteering.
//           We connect people with purpose — bridging the gap between those who
//           want to help and communities that need it. From tree plantations to
//           teaching sessions, from hygiene awareness to food drives — you can
//           make a real difference with just a few hours of your time.
//         </p>
//         <p>
//           We believe that volunteering should be accessible, flexible, and
//           rewarding. That’s why our platform is built to support both
//           first-time helpers and experienced community organizers alike.
//         </p>
//         <p>
//           Whether you're volunteering for a cause close to your heart or
//           exploring new ways to give back, KindConnect offers seamless tools,
//           digital certification, and a growing network of changemakers who
//           support and uplift each other.
//         </p>
//       </section>

//       <section className="features">
//         <h2>Why Volunteer with Us?</h2>
//         <ul className="feature-list">
//           <li> Make meaningful impact and uplift communities</li>
//           <li> Receive digital certificates for your contributions</li>
//           <li> Connect with a passionate volunteer network</li>
//           <li> Learn, grow, and enhance your leadership skills</li>
//           <li> Flexible schedules tailored to your availability</li>
//           <li> Discover new passions and drive long-term change</li>
//         </ul>
//       </section>

//       <section className="impact">
//         <h2>Our Impact So Far</h2>
//         <p>
//           Since our launch, KindConnect has grown into a vibrant movement of
//           changemakers. Here’s a glimpse of what we’ve achieved:
//         </p>
//         <ul>
//           <li> <strong>5,000+ volunteers</strong> engaged nationwide</li>
//           <li> <strong>20,000+ hours</strong> of service recorded</li>
//           <li> <strong>50+ cities</strong> impacted across India</li>
//         </ul>
//         <p>
//           With every smile, every kind gesture, and every event — KindConnect is
//           shaping a more inclusive, sustainable, and compassionate future.
//         </p>
//       </section>

//       <footer className="footer">
//         <p>© 2025 KindConnect — Empowering volunteers. Changing lives. </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaCertificate,
  FaUsers,
  FaLightbulb,
  FaCalendarCheck,
  FaHeart,
  FaGlobeAsia,
  FaHandsHelping,
  FaSmileBeam,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">KindConnect</span>
          </h1>
          <p>
            Your purpose meets its platform. KindConnect connects you with
            meaningful volunteer opportunities across India — because kindness
            is action.
          </p>
          <div className="hero-buttons">
            <Link to="/volunteers" className="btn primary">
              Become a Volunteer
            </Link>
            <Link to="/events" className="btn secondary">
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About KindConnect</h2>
        <p>
          KindConnect is a purpose-driven platform that brings together people
          and possibilities. Whether you're a student, a working professional,
          or a retiree — there's a place for you to make an impact.
        </p>
        <p>
          We focus on building long-term, sustainable community relationships.
          Through structured events and partnerships, we ensure that every hour
          spent volunteering has lasting value.
        </p>
        <p>
          Our app is designed to be simple yet powerful — search by cause,
          filter by location or time, and sign up with one tap. We believe
          technology should enable compassion, not complicate it.
        </p>
        <p>
          Volunteers also get access to a dashboard where they can track hours,
          download certificates, and stay in touch with their favorite
          initiatives.
        </p>
        <p>
          We’re not just building a platform — we’re nurturing a movement. A
          culture of compassion, dignity, and action.
        </p>
      </section>

      <section className="features">
        <h2>Why Volunteer With Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaHandsHelping className="icon" />
            <p>Make real, visible impact in your community</p>
          </div>
          <div className="feature-card">
            <FaCertificate className="icon" />
            <p>Get digital certificates for every event</p>
          </div>
          <div className="feature-card">
            <FaUsers className="icon" />
            <p>Join a growing network of 5,000+ volunteers</p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="icon" />
            <p>Discover new skills and grow through service</p>
          </div>
          <div className="feature-card">
            <FaCalendarCheck className="icon" />
            <p>Choose flexible time slots that suit you</p>
          </div>
          <div className="feature-card">
            <FaGlobeAsia className="icon" />
            <p>Support causes across 50+ cities in India</p>
          </div>
          <div className="feature-card">
            <FaSmileBeam className="icon" />
            <p>Spread joy and compassion to those in need</p>
          </div>
          <div className="feature-card">
            <FaChalkboardTeacher className="icon" />
            <p>Mentor students and teach life-changing skills</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <h3>5,000+</h3>
            <p>Registered Volunteers</p>
          </div>
          <div className="stat-box">
            <h3>20,000+</h3>
            <p>Hours of Service</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Cities Reached</p>
          </div>
        </div>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We imagine a nation where social good is everyone’s responsibility.
          One where even small acts create lasting change.
        </p>
        <p>
          With KindConnect, we’re not just enabling volunteering — we’re
          redefining it. One connection at a time.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 KindConnect | Powered by People. Driven by Purpose.</p>
      </footer>
    </div>
  );
};

export default Home;
