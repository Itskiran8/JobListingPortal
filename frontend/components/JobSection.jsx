import React, { useEffect, useState } from "react";
import "./JobSection.css";

const JobSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")  // backend API
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="jobs-section">
      <h2 className="section-title">Latest Jobs</h2>

      <div className="jobs-container">
        {jobs.slice(0, 6).map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.jobRole}</h3>

            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.jobType}</p>
            <p><strong>Salary:</strong> {job.salary}</p>

            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>

      <div className="browse-btn-container">
        <button className="browse-btn">Browse All Jobs</button>
      </div>
    </section>
  );
};

export default JobSection;