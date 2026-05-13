const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  role: {
    type: String
  },

  company: {
    type: String
  },

  message: {
    type: String,
    required: true
  },

  rating: {
    type: Number,
    required: true
  }

},{
  timestamps:true
});

module.exports = mongoose.model("Testimonial", testimonialSchema);