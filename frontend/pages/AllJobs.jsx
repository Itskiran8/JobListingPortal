import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/JobSection.css";


const AllJobs = () => {

  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="jobs-section">
      <h2 className="section-title">All Jobs</h2>

      <div className="jobs-container">
        {jobs.map((job) => (
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
    </section>
  );
};

export default AllJobs;