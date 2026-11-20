// const express=require("express");

// const app=express();

// const PORT=5000;

// app.use(express.json());


// app.get("/",(req,res)=>{
//     res.send("My MERN PROJECT");
// });

// // app.get("/api",(req,res)=>{
// //     res.json({
// //         message:"Welcome to the visitor management",
// //         status:"Success"
// //     });
// // });

// // app.get("/api/visitors",(req,res)=>{
// //    res.json([
// //     {
// //     id:1,
// //     name:"Neha",
// //     purpose:"Interview"
// //     },

// //     {
// //     id:2,
// //     name:"Alan",
// //     purpose:"Interview"
// //     }
// // ]);
// // });

// app.get("/api/visitor",(req,res)=>{
//     res.status(200).send("Success");
// });

// app.post("/api/visitor",(req,res)=>{
//     res.status(201).json({message:"Created"});
// });

// app.put("/api/visitor",(req,res)=>{
//     res.status(200).json({message:"Updated"});
// });



// app.listen(PORT,() => {
//     console.log(`Server start on the port no ${PORT}`);
    
// });





// const express = require("express");

// const app = express();
// const PORT = 5000;

// // Parse incoming JSON request bodies
// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// // Temporary in-memory data
// let visitors = [
//   { id: 1, name: "Anu Thomas", purpose: "Meeting" },
//   { id: 2, name: "Rahul Kumar", purpose: "Interview" }
// ];

// let nextId = 3;

// // GET: Check the server
// app.get("/", (req, res) => {
//   res.send("Visitor Management Backend is running!");
// });

// // GET: Retrieve all visitors
// app.get("/api/visitors", (req, res) => {
//   res.json(visitors);
// });

// // POST: Register a new visitor
// app.post("/api/visitors", (req, res) => {
//   const { name, purpose } = req.body;

//   if (!name || !purpose) {
//     return res.status(400).json({
//       message: "Name and purpose are required"
//     });
//   }

//   const newVisitor = {
//     id: nextId++,
//     name: name,
//     purpose: purpose
//   };

//   visitors.push(newVisitor);

//   res.status(201).json({
//     message: "Visitor registered successfully",
//     visitor: newVisitor
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to read JSON request bodies
app.use(express.json());

// Import visitor routes
const visitorRoutes = require("./routes/visitorRoutes");

// Root route
app.get("/", (req, res) => {
  res.send("Visitor Management Backend is running!");
});

// Connect visitor routes
app.use("/api/visitors", visitorRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
