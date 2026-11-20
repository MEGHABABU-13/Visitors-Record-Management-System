
let visitors = [
  { id: 1, name: "Anu Thomas", purpose: "Meeting" },
  { id: 2, name: "Rahul Kumar", purpose: "Interview" }
];

let nextId = 3;

// GET: Retrieve all visitors
const getVisitors = (req, res) => {
  res.json(visitors);
};

// POST: Register a new visitor
const createVisitor = (req, res) => {
  const { name, purpose } = req.body;

  if (!name || !purpose) {
    return res.status(400).json({
      message: "Name and purpose are required"
    });
  }

  const newVisitor = {
    id: nextId++,
    name: name,
    purpose: purpose
  };

  visitors.push(newVisitor);

  res.status(201).json({
    message: "Visitor registered successfully",
    visitor: newVisitor
  });
};

// Export controller functions
module.exports = {
  getVisitors,
  createVisitor
};
