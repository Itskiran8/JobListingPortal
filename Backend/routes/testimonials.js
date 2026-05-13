const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

router.post("/", async (req,res)=>{

 try{

 const testimonial = new Testimonial(req.body);
 await testimonial.save();

 res.status(201).json({
  message:"Feedback saved successfully"
 });

 }catch(err){

 res.status(500).json({error:err.message});

 }

});


router.get("/", async(req,res)=>{

 try{

 const testimonials = await Testimonial.find().sort({createdAt:-1});
 res.json(testimonials);

 }catch(err){

 res.status(500).json({error:err.message});

 }

});

module.exports = router;