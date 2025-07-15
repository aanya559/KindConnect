
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandsHelping,
  FaCertificate,
  FaUsers,
  FaLightbulb,
  FaCalendarCheck,
  FaGlobeAsia,
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
            Empowering kindness through action — KindConnect bridges passionate individuals with impactful opportunities. Join a movement that's changing communities one step at a time.
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
        <h2>About Us</h2>
        <p>
          KindConnect is more than just a volunteering platform — it’s a movement.
We aim to reconnect humanity through acts of service and shared compassion.
In a world growing increasingly digital, we bring back the human touch.
Our mission is simple: make volunteering accessible, impactful, and joyful.

From mentoring students to cleaning rivers, every act of kindness matters.
KindConnect unites individuals, organizations, and causes under one roof.
We bridge the gap between those who want to help and those who need it most.
Whether you're a student, professional, or retiree — there’s a place for you.

Volunteers get personalized dashboards to track impact and growth.
Certificates, flexible scheduling, and community support make it rewarding.
We ensure transparency, reliability, and real-time updates for every event.
Our mobile-first design helps you discover causes near you with a tap.

Each connection made through KindConnect creates a ripple of change.
We believe kindness is not a task — it’s a lifestyle.
With over 5,000+ volunteers and 50+ cities covered, we are growing daily.
We work closely with NGOs, local groups, and civic bodies to scale impact.

KindConnect empowers local heroes to take action.
We celebrate diversity, inclusion, and collaboration.
Together, we’re building a compassionate, responsive, and connected India.
Join us in rewriting what it means to care — one connection at a time.


        </p>
      </section>

      <section className="features">
        <h2>Why Volunteer With Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaHandsHelping className="icon" />
            <p>Contribute meaningfully to local communities</p>
          </div>
          <div className="feature-card">
            <FaCertificate className="icon" />
            <p>Earn verified digital certificates</p>
          </div>
          <div className="feature-card">
            <FaUsers className="icon" />
            <p>Be part of a 5,000+ volunteer network</p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="icon" />
            <p>Discover your passion and grow new skills</p>
          </div>
          <div className="feature-card">
            <FaCalendarCheck className="icon" />
            <p>Volunteer anytime — your schedule, your choice</p>
          </div>
          <div className="feature-card">
            <FaGlobeAsia className="icon" />
            <p>Serve causes in over 50 cities across India</p>
          </div>
          <div className="feature-card">
            <FaSmileBeam className="icon" />
            <p>Bring smiles to faces and hope to hearts</p>
          </div>
          <div className="feature-card">
            <FaChalkboardTeacher className="icon" />
            <p>Mentor youth and promote lifelong learning</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Our Impact So Far</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <h3>5,000+</h3>
            <p>Active Volunteers</p>
          </div>
          <div className="stat-box">
            <h3>20,000+</h3>
            <p>Hours Contributed</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Partner Cities</p>
          </div>
        </div>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We envision an inclusive India where volunteerism is part of daily life, and every citizen contributes to social upliftment. We believe in the ripple effect of good deeds — one action inspires another.
        </p>
        <p>
          At KindConnect, we redefine volunteering: not just a service, but a shared responsibility and privilege. Join us in building a compassionate future — one connection at a time.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 KindConnect — Powered by People. Driven by Purpose.</p>
      </footer>
    </div>
  );
};

export default Home;
