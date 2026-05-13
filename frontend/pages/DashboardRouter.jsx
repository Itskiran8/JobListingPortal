import React from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import RecruiterDashboard from "./RecruiterDashboard";

const DashboardRouter = () => {

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  if(role === "employer"){
    return <RecruiterDashboard />;
  } 
  else if(role === "jobseeker"){
    return <UserDashboard />;
  }
  else{
    return (
      <div style={{color:"white", textAlign:"center", marginTop:"50px"}}>
        <h2>Please Login First</h2>

        <button 
          onClick={() => navigate("/login")}
          style={{
            padding:"10px 20px",
            marginTop:"20px",
            background:"#d18f14",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer"
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }
};

export default DashboardRouter;