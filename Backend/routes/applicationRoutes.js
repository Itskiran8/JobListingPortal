// const express = require("express");
// const router = express.Router();
// const Application = require("../models/Application");
// const upload = require("../middleware/upload");


// // ✅ APPLY JOB (with file)
// router.post("/", upload.single("resume"), async(req,res)=>{

//  try{

//   const newApp = new Application({

//    jobId: req.body.jobId,
//    userId: req.body.userId,
//    name: req.body.name,
//    email: req.body.email,
//    phone: req.body.phone,
//    coverLetter: req.body.coverLetter,
//    resume: req.file ? req.file.filename : ""

//   });

//   await newApp.save();

//   res.json({msg:"Application submitted"});

//  }catch(err){
//   res.status(500).json({error:err.message});
//  }

// });


// // ✅ GET ALL APPLICATIONS (Recruiter)
// router.get("/", async(req,res)=>{
//  const apps = await Application.find().populate("jobId");
//  res.json(apps);
// });


// // ✅ USER APPLICATIONS
// router.get("/user/:id", async(req,res)=>{
//  const apps = await Application.find({userId:req.params.id})
//  .populate("jobId");

//  res.json(apps);
// });


// // ✅ UPDATE STATUS
// router.put("/:id", async(req,res)=>{
//  const updated = await Application.findByIdAndUpdate(
//   req.params.id,
//   {status:req.body.status},
//   {new:true}
//  );

//  res.json(updated);
// });

// module.exports = router;

import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// ✅ USER ke applications fetch karne ke liye
router.get("/user/:userId", async (req, res) => {
  try {
    const apps = await Application.find({
      userId: req.params.userId
    }).populate("jobId");

    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;