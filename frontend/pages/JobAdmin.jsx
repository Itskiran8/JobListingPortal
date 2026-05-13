import React, {useState, useEffect} from "react";
import axios from "axios";
import "./jobAdmin.css";


const JobAdmin = () => {

const [jobs,setJobs] = useState([]);
const [jobRole,setJobRole] = useState("");
const [location,setLocation] = useState("");
const [jobType,setJobType] = useState("");
const [salary,setSalary] = useState("");

useEffect(()=>{
 fetchJobs();
},[]);

const fetchJobs = ()=>{
 axios.get("http://localhost:5000/api/jobs")
 .then(res=>setJobs(res.data));
};

const addJob = ()=>{
 axios.post("http://localhost:5000/api/jobs",{
  jobRole,location,jobType,salary
 }).then(()=>{
  fetchJobs();
 });
};

const deleteJob = (id)=>{
 axios.delete(`http://localhost:5000/api/jobs/${id}`)
 .then(()=>fetchJobs());
};

return(



<div className="admin-container">

<h1 className="admin-title">Job Admin Panel</h1>

<div className="job-form">

<h2 >Add Job</h2>

<input placeholder="Job Role" 
className="job-input"
value={jobRole}
onChange={(e)=>setJobRole(e.target.value)} />

<input placeholder="Location"
value={location}
onChange={(e)=>setLocation(e.target.value)} />

<input placeholder="Job Type"
value={jobType}
onChange={(e)=>setJobType(e.target.value)} />

<input placeholder="Salary"
value={salary}
onChange={(e)=>setSalary(e.target.value)} />

<button className="add-btn" onClick={addJob}>Add Job</button>

</div>

<h2 className="admin-title">All Jobs</h2>

<div className="jobs-list">

{jobs.map(job=>(

<div className="job-card" key={job._id}>

<h3>{job.jobRole}</h3>
<p><b>Location:</b> {job.location}</p>
<p><b>Type:</b> {job.jobType}</p>
<p><b>Salary:</b> {job.salary}</p>

<button className="delete-btn"
onClick={()=>deleteJob(job._id)}>Delete</button>

</div>

))}

</div>

</div>

)



}

export default JobAdmin