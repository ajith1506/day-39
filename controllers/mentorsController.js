// controllers/mentorsController.js
const Mentor = require("../models/mentorModel");

exports.createMentor = async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.status(201).json({ message: "mentor created successfully", mentor });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
