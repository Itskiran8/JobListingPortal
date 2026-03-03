import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";


function Profile() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  console.log("TOKEN:", token);   // 👈 ADD THIS

  const data = new FormData();
  for (let key in formData) {
    data.append(key, formData[key]);
  }

  if (resume) {
    data.append("resume", resume);
  }

  try {
    await axios.put(
      "http://localhost:5000/api/profile/update",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Profile Updated Successfully");
    navigate("/dashboard");
  } catch (error) {
    console.log("ERROR:", error.response);   
  }
};

  return (
    <div className="profile-container">
      <div className="profile-card ">
        <h2>Update Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="MERN, React, Node"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Education</label>
            <input
              type="text"
              name="education"
              placeholder="Enter education"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Upload Resume</label>
            <input
              type="file"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="profile-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;