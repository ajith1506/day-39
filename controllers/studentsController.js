// controllers/studentsController.js
const Student = require("../models/studentModel");

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "student successfully created", student });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getStudentsWithoutMentor = async (req, res) => {
  try {
    const students = await Student.find({ mentor: null });
    res.status(200).json({ message: "successfully getted student", students });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
