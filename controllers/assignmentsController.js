// assignmentsController.js
const Mentor = require("../models/mentorModel");
const Student = require("../models/studentModel");

exports.assignStudentToMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findByIdAndUpdate(
      studentId,
      { mentor: mentorId },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "students successfully assigned to mentor", student });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    await Student.updateMany(
      { _id: { $in: studentIds } },
      { mentor: mentorId }
    );
    const mentor = await Mentor.findById(mentorId);
    res
      .status(200)
      .json({ message: "students successfully add to mentor", mentor });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.assignOrChangeMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findByIdAndUpdate(
      studentId,
      { mentor: mentorId },
      { new: true }
    );
    res.status(200).json({ message: "mentor assigned successfully", student });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getStudentsForMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ mentor: mentorId });
    res
      .status(200)
      .json({ message: "mentor successfully getting students", students });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPreviousMentor = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    res.status(200).json({ previousMentor: student.previousMentor });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
