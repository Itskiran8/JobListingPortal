import React, { useState } from "react";
import "./Hero.css";

const Hero = ({ onSearch }) => {

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ keyword, location, category });
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job</h1>
        <p>Search Between More Than 50,000 Open Jobs.</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search keyword..."
            onChange={(e) => setKeyword(e.target.value)}
          />

          <div className="dropdown">
  <span>{location || "Location ▾"}</span>

  <div className="dropdown-content">
    <p onClick={() => setLocation("Delhi")}>Delhi</p>
    <p onClick={() => setLocation("Mumbai")}>Mumbai</p>
    <p onClick={() => setLocation("Bangalore")}>Bangalore</p>
    <p onClick={() => setLocation("Chandigarh")}>Chandigarh</p>
    <p onClick={() => setLocation("Pune")}>Pune</p>
    <p onClick={() => setLocation("Hyderabad")}>Hyderabad</p>
    <p onClick={() => setLocation("Mohali")}>Mohali</p>
  </div>
</div>

         <div className="dropdown">
  <span>{category || "Category ▾"}</span>

  <div className="dropdown-content">
    <p onClick={() => setCategory("Java Developer")}>Java Developer</p>
    <p onClick={() => setCategory("Full Stack Developer")}>Full Stack Developer</p>
    <p onClick={() => setCategory("Python Developer")}>Python Developer</p>
    <p onClick={() => setCategory("React Developer")}>React Developer</p>
    <p onClick={() => setCategory("Android Developer")}>Android Developer</p>
  </div>
</div>
          {/* <button onClick={handleSearch}>Search</button> */}
          <button onClick={() => {
  handleSearch();
  document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
}}>Search</button>
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