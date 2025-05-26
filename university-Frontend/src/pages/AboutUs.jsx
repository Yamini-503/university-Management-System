import React from "react";
import "./AboutUs.css";
import studyimg from './study.jpg'
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Empowering universities with innovative solutions for seamless
          management and exceptional academic experiences.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Established with a passion for revolutionizing education, our
            University Management System offers a cutting-edge platform to
            manage academic operations. From student enrollment to course
            scheduling and performance tracking, our system is designed to
            empower educators and students alike.
          </p>
        </div>
        <div className="story-image">
          <img src={studyimg} alt="Our Story" />
        </div>
      </section>

      {/* Core Features */}
      <section className="about-features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Student Management</h3>
            <p>
              Easily track, manage, and update student records and performance
              with our intuitive dashboard.
            </p>
          </div>
          <div className="feature-card">
            <h3>Faculty Portal</h3>
            <p>
              Enable faculty members to plan courses, evaluate student progress,
              and collaborate effectively.
            </p>
          </div>
          <div className="feature-card">
            <h3>Dynamic Scheduling</h3>
            <p>
              Simplify course scheduling with automated timetables and real-time
              conflict resolution.
            </p>
          </div>
          <div className="feature-card">
            <h3>Analytics</h3>
            <p>
              Gain valuable insights into institutional performance through
              advanced analytics and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Join Us on Our Mission</h2>
        <p>
          Experience the future of education with our University Management
          System. Let’s create better learning experiences together.
        </p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
