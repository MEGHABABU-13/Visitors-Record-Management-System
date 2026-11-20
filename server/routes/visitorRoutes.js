
const express = require("express");

const router = express.Router();

// Import controller functions
const {
  getVisitors,
  createVisitor
} = require("../controllers/visitorController");

// GET all visitors
router.get("/", getVisitors);

// POST a new visitor
router.post("/", createVisitor);

module.exports = router;
