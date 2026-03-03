import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">JobListingPortal</h2>
          <p>
            Empowering careers by connecting job seekers with verified employers. Explore opportunities, apply easily, and take the next step toward your professional success.
          </p>

          <div className="social-icons">
            <FaInstagram />
            <FaEnvelope />
            <FaPhone />
          </div>
        </div>

        <div className="footer-section">
          <h3>Job Categories</h3>
          <ul>
            <li>Work from Home</li>
            <li>Internship Job</li>
            <li>Freelancer Job</li>
            <li>Part Time Job</li>
            <li>Full Time Job</li>
          </ul>
        </div>

        {/* <div className="footer-section">
          <h3>Job Type</h3>
          <ul>
            <li>Create Account</li>
            <li>Career Counseling</li>
            <li>My Oficiona</li>
            <li>FAQ</li>
            <li>Report a Problem</li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Jobs Listing</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;