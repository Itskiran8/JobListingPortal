// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  // Authentication Fields
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // Role (Very Important)
  role: { 
    type: String, 
    enum: ["jobseeker", "employer"], 
    required: true 
  },

  // Job Seeker Profile Fields
  phone: {
    type: String,
  },
  skills: {
    type: [String],   // array of skills
  },
  education: {
    type: String,
  },
  resume: {
    type: String,     // file path store hoga
  },

  // Employer Profile Fields
  companyName: {
    type: String,
  },
  companyWebsite: {
    type: String,
  },
  companyDescription: {
    type: String,
  },
  companyLocation: {
    type: String,
  },

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
