const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

 jobId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Job"
 },

 userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 name:String,
 email:String,
 phone:String,
 coverLetter:String,

 resume:String, // file path

 status:{
  type:String,
  enum:["Applied","Viewed","Accepted","Rejected"],
  default:"Applied"
 }

},{timestamps:true});

module.exports = mongoose.model("Application", applicationSchema);