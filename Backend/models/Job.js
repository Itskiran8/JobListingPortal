const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

  jobRole:{
    type:String,
    required:true
  },

  location:{
    type:String
  },

  jobType:{
    type:String
  },

  salary:{
    type:String
  }

},{
  timestamps:true
});

module.exports = mongoose.model("Job", jobSchema);

