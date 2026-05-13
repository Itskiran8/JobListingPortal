import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JobSection.css";

const JobSection = ({ filters, isSearch }) => {

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 FILTER LOGIC
 const filteredJobs = isSearch
  ? jobs.filter((job) => {
      return (
        (filters?.keyword
          ? filters.keyword
              .toLowerCase()
              .split(" ")
              .every((word) => job.jobRole.toLowerCase().includes(word))
          : true) &&
        (filters?.location
          ? job.location.toLowerCase() === filters.location.toLowerCase()
          : true) &&
        (filters?.category
          ? job.jobRole.toLowerCase().includes(filters.category.toLowerCase())
          : true)
      );
    })
  : jobs;
  return (
    <section className="jobs-section"  id="jobs">
      <h2 className="section-title">Latest Jobs</h2>

      <div className="jobs-container">
        {filteredJobs.slice(0, 3).map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.jobRole}</h3>

            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.jobType}</p>
            <p><strong>Salary:</strong> {job.salary}</p>

            <button
              className="apply-btn"
              onClick={() => navigate(`/apply/${job._id}`)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      <div className="browse-btn-container">
       <button
  className="browse-btn"
  onClick={() => navigate("/jobs")}
>
  Browse All Jobs
</button>
      </div>
    </section>
  );
};

export default JobSection;