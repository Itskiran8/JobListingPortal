import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
     role: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 console.log("Sending Data:", formData);  // 👈 Debug
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Registration Successful");
      navigate("/"); // redirect to login
    } catch (error) {
      console.log("ERROR:", error.response);  // 👈 Debug
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account 🚀</h2>
        <p>Register to get started</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              name="name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
            />
          </div>

          {/*  */}
         
<div className="input-group">
  <select
    name="role"
    required
    value={formData.role}
    onChange={handleChange}
  >
    <option value="">Select Role</option>
    <option value="jobseeker">Job Seeker</option>
    <option value="employer">Employer</option>
  </select>
</div>
{/*  */}
          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
