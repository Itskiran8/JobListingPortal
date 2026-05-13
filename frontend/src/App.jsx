import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import FeedbackForm from "../pages/FeedbackForm";
import Navbar from "../components/Navbar";
import JobAdmin from "../pages/JobAdmin";
import ApplyJob from "../pages/ApplyJob";
import UserDashboard from "../pages/UserDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
// import applicationRoutes from "./routes/applicationRoutes.js";
import DashboardRouter from "../pages/DashboardRouter";
import AllJobs from "../pages/AllJobs";

function App() {
  return (
    <Router>
            <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/jobAdmin" element={<JobAdmin />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
        <Route path="/dashboard" element={<DashboardRouter />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
           <Route path="/dashboard" element={<UserDashboard />} />
             <Route path="/jobs" element={<AllJobs />} />
      </Routes>
    </Router>
  );
}

export default App;