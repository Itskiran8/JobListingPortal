import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  // const navigate = useNavigate();

  // const handleDashboard = () => {
  //   const role = localStorage.getItem("role");

  //   if(role === "recruiter"){
  //     navigate("/recruiter");
  //   }else{
  //     navigate("/dashboard");
  //   }
  // };

  return (
  
    <nav className="navbar">
      <h2 className="logo">JobListingPortal</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobAdmin">Jobs</Link>
         <Link to="/feedback">Feedback</Link>

                 {/* ✅ Dashboard
        <Link to="/dashboard" className="icon-link">
        <FaTachometerAlt /> Dashboard
        </Link> */}


        {/* Profile Icon */}
        <Link to="/profile" className="icon-link">
          <FaUserCircle size={22} />
        </Link>

        {/* Login */}
        <Link to="/login" className="icon-link">
          <FaSignInAlt /> Login
        </Link>

        {/* Register */}
        <Link to="/register" className="icon-link">
          <FaUserPlus /> Register
        </Link>

        {/* Logout */}
        <Link to="/logout" className="icon-link">
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;