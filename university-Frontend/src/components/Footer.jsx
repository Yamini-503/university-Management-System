import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-title">University Connect</h2>
          <p className="footer-tagline">
            Empowering education, transforming futures.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="footer-link">
                Courses
              </a>
            </li>
            <li>
              <a href="/admissions" className="footer-link">
                Admissions
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +1 987 654 3210</p>
          <p>Email: info@universityconnect.edu</p>
          <p>Address: 123 University Lane, Knowledge City, USA</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} University Connect. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
