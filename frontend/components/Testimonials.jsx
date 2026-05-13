import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);






  useEffect(() => {
    axios
      .get("http://localhost:5000/api/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.log(err));
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            color={index < rating ? "#ffc107" : "#e4e5e9"}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>

      <div className="testimonial-container">
        {testimonials.map((item) => (
          <div key={item._id} className="testimonial-card">
            {renderStars(item.rating)}
            <p>"{item.message}"</p>
            <h3>{item.name}</h3>
            <span>
              {item.role} at {item.company}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;