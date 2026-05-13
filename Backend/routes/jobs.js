const express = require("express");
const router = express.Router();
const Job = require("../models/Job");


// Add Job
router.post("/", async (req,res)=>{
 try{
  const job = new Job(req.body);
  await job.save();
  res.json(job);
 }catch(err){
  res.status(500).json(err);
 }
});


// Get Jobs
router.get("/", async(req,res)=>{
 try{
  const jobs = await Job.find().sort({createdAt:-1});
  res.json(jobs);
 }catch(err){
  res.status(500).json(err);
 }
});


// Update Job
router.put("/:id", async(req,res)=>{
 try{
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(job);
 }catch(err){
  res.status(500).json(err);
 }
});


// Delete Job
router.delete("/:id", async(req,res)=>{
 try{
  await Job.findByIdAndDelete(req.params.id);
  res.json({message:"Job deleted"});
 }catch(err){
  res.status(500).json(err);
 }
});

module.exports = router;