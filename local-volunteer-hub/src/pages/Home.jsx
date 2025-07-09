import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <h1>
            Welcome to <span className="highlight">KindConnect</span>
          </h1>
          <p>
            KindConnect is your platform for purpose. Whether you're passionate
            about the environment, education, or food outreach — we help you
            take real action and connect with like-minded changemakers.
          </p>
          <div className="hero-buttons">
            <Link to="/volunteers" className="btn primary">
              Join as Volunteer
            </Link>
            <Link to="/events" className="btn secondary">
              View Events
            </Link>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About KindConnect</h2>
        <p>
          KindConnect is your trusted companion in the world of volunteering.
          We connect people with purpose — bridging the gap between those who
          want to help and communities that need it. From tree plantations to
          teaching sessions, from hygiene awareness to food drives — you can
          make a real difference with just a few hours of your time.
        </p>
        <p>
          We believe that volunteering should be accessible, flexible, and
          rewarding. That’s why our platform is built to support both
          first-time helpers and experienced community organizers alike.
        </p>
        <p>
          Whether you're volunteering for a cause close to your heart or
          exploring new ways to give back, KindConnect offers seamless tools,
          digital certification, and a growing network of changemakers who
          support and uplift each other.
        </p>
      </section>

      <section className="features">
        <h2>Why Volunteer with Us?</h2>
        <ul className="feature-list">
          <li>💖 Make meaningful impact and uplift communities</li>
          <li>📜 Receive digital certificates for your contributions</li>
          <li>🌍 Connect with a passionate volunteer network</li>
          <li>🚀 Learn, grow, and enhance your leadership skills</li>
          <li>🕒 Flexible schedules tailored to your availability</li>
          <li>🌱 Discover new passions and drive long-term change</li>
        </ul>
      </section>

      <section className="impact">
        <h2>Our Impact So Far</h2>
        <p>
          Since our launch, KindConnect has grown into a vibrant movement of
          changemakers. Here’s a glimpse of what we’ve achieved:
        </p>
        <ul>
          <li>👥 <strong>5,000+ volunteers</strong> engaged nationwide</li>
          <li>⏱️ <strong>20,000+ hours</strong> of service recorded</li>
          <li>🏙️ <strong>50+ cities</strong> impacted across India</li>
        </ul>
        <p>
          With every smile, every kind gesture, and every event — KindConnect is
          shaping a more inclusive, sustainable, and compassionate future.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 KindConnect — Empowering volunteers. Changing lives. 💗</p>
      </footer>
    </div>
  );
};

export default Home;
