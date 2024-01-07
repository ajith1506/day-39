// models/mentorModel.js
const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
