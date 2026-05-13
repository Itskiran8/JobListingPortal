const express = require("express");
// import express from "express";
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();   // MongoDB connection yahi se ho raha hai

const app = express();

app.use(cors());
app.use(express.json());

// auth routes
app.use("/api/auth", require("./routes/auth"));

// profile routes
const profileRoutes = require("./routes/profileRoutes");
app.use("/api/profile", profileRoutes);
app.use("/uploads", express.static("uploads"));

// testimonial routes
const testimonialRoutes = require("./routes/testimonials");
app.use("/api/testimonials", testimonialRoutes);

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

//jobs
const jobRoutes = require("./routes/jobs");

app.use("/api/jobs", jobRoutes);

// //application
// app.use("/uploads", express.static("uploads"));
// app.use("/api/applications", require("./routes/applicationRoutes"));

// //
// import applicationRoutes from "./routes/applicationRoutes.js";

// app.use("/api/applications", applicationRoutes);