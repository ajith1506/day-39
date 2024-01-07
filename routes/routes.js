// routes.js
const express = require("express");
const mentorsController = require("../controllers/mentorsController");
const studentsController = require("../controllers/studentsController");
const assignmentsController = require("../controllers/assignmentsController");

const router = express.Router();

// Mentor Routes
router.post("/mentors", mentorsController.createMentor);

// Student Routes
router.post("/students", studentsController.createStudent);
router.get(
  "/studentsWithoutMentor",
  studentsController.getStudentsWithoutMentor
);

// Assignment Routes
router.post("/assign", assignmentsController.assignStudentToMentor);
router.post(
  "/mentor/:mentorId/addStudents",
  assignmentsController.addStudentsToMentor
);
router.put(
  "/student/:studentId/assignMentor",
  assignmentsController.assignOrChangeMentor
);
router.get(
  "/mentor/:mentorId/students",
  assignmentsController.getStudentsForMentor
);
router.get(
  "/student/:studentId/previousMentor",
  assignmentsController.getPreviousMentor
);

module.exports = router;
