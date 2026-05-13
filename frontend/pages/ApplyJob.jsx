import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ApplyJob.css";

const ApplyJob = () => {

  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleApply = async () => {

    const data = new FormData();

    data.append("jobId", id);
    data.append("userId", "USER_ID_HERE");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", formData.resume);

    try {
      await axios.post("http://localhost:5000/api/applications", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Applied Successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Error applying ❌");
    }
  };

  return (
    <div className="apply-container">

      <div className="apply-card">
        <h2>Apply for Job</h2>

        <input 
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input 
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input 
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <textarea 
          name="coverLetter"
          placeholder="Write your cover letter..."
          onChange={handleChange}
        />

        <input 
          type="file"
          onChange={handleFileChange}
        />

        <button onClick={handleApply}>Submit Application</button>
      </div>

    </div>
  );
};

export default ApplyJob;