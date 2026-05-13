import React, {useEffect, useState} from "react";
import axios from "axios";

const UserDashboard = () => {

const [apps,setApps] = useState([]);
const userId = "USER_ID_HERE";

useEffect(()=>{
 axios.get(`http://localhost:5000/api/applications/user/${userId}`)
 .then(res=>setApps(res.data));
},[]);

return(

<div className="dashboard">

<h2>My Applications</h2>

{apps.map(app=>(
<div className="card" key={app._id}>

<h3>{app.jobId?.jobRole}</h3>

<p>Status: 
<span style={{
 color:
  app.status==="Accepted" ? "green" :
  app.status==="Rejected" ? "red" :
  app.status==="Viewed" ? "orange" :
  "blue"
}}>
 {app.status}
</span>
</p>

</div>
))}

</div>

);

};

export default UserDashboard;