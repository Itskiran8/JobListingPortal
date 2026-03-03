import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job</h1>
        <p>Search Between More Than 50,000 Open Jobs.</p>

        <div className="search-bar">
          <input type="text" placeholder="Search keyword..." />

          <div className="dropdown">
            <span>Location ▾</span>
            <div className="dropdown-content">
              <p>Delhi</p>
              <p>Mumbai</p>
              <p>Bangalore</p>
              <p>Chandigarh</p>
              <p>Pune</p>
              <p>Hyderabad</p>
            </div>
          </div>

          <div className="dropdown">
            <span>Category ▾</span>
            <div className="dropdown-content">
              <p>Java Developer</p>
              <p>Full Stack Developer</p>
              <p>Python Developer</p>
              <p>React Developer</p>
              <p>Android Developer</p>
            </div>
          </div>

          <button>Search</button>
        </div>

        <div className="trending">
          Trending Jobs Keywords: Web Designer | Web Developer | IOS Developer |
          Android Developer
        </div>
      </div>
    </div>
  );
};

export default Hero;