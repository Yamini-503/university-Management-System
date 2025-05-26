import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-us">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We are here to help you. Reach out to us with your inquiries or
          feedback.
        </p>
      </div>

      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Have questions? Get in touch with us:</p>
          <p>
            <strong>Phone:</strong> +1 987 654 3210
          </p>
          <p>
            <strong>Email:</strong> support@universityconnect.edu
          </p>
          <p>
            <strong>Address:</strong> 123 University Lane, Knowledge City, USA
          </p>
        </div>

        {/* Right Section */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
