import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    message: "",
    rating: 0,
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/testimonials", formData)
      .then((res) => {
        setSubmitStatus("Feedback submitted successfully!");
        setFormData({ name: "", role: "", company: "", message: "", rating: 0 });
      })
      .catch((err) => {
        console.log(err);
        setSubmitStatus("Error submitting feedback. Try again!");
      });
  };

  return (
    <div className="feedback-form-container">
      <h2>Submit Your Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Your Role"
          value={formData.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="rating-input">
          <span>Rating: </span>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              size={28}
              color={index < formData.rating ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleRatingClick(index + 1)}
              style={{ cursor: "pointer", marginRight: 5 }}
            />
          ))}
        </div>

        <button type="submit">Submit Feedback</button>
        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </form>
    </div>
  );
};

export default FeedbackForm;