import React, {useEffect, useState} from "react";
import axios from "axios";

const RecruiterDashboard = () => {

const [apps,setApps] = useState([]);

useEffect(()=>{
 fetchApps();
},[]);

const fetchApps = ()=>{
 axios.get("http://localhost:5000/api/applications")
 .then(res=>setApps(res.data));
};

const updateStatus = (id,status)=>{
 axios.put(`http://localhost:5000/api/applications/${id}`,{status})
 .then(()=>fetchApps());
};

return(

<div>

<h2>All Applications</h2>

{apps.map(app=>(
<div key={app._id}>

<h3>{app.jobId?.jobRole}</h3>
<p>Name: {app.name}</p>
<p>Email: {app.email}</p>
<p>Status: {app.status}</p>

<a href={`http://localhost:5000/uploads/${app.resume}`} target="_blank">
View Resume
</a>

<br/>

<button onClick={()=>updateStatus(app._id,"Viewed")}>Viewed</button>
<button onClick={()=>updateStatus(app._id,"Accepted")}>Accept</button>
<button onClick={()=>updateStatus(app._id,"Rejected")}>Reject</button>

</div>
))}

</div>

);

};

export default RecruiterDashboard;