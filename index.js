// Express Setup
// ===================================
const express = require("express");
const app = express();
const PORT = 3001;
// ===================================


// Mongoose Setup
// ===================================

// ENTER MONGOOSE CODE HERE

// ===================================


// Body Parser Middleware
// ===================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ===================================


// API Routes
// ===================================
// API ROUTES TO THE DATABASE WILL GO HERE
// test route (to be deleted)
app.get("/", function(req, res) {
  res.send("Hello world!");
});

// test route (to be deleted)
app.get("/api", function(req, res) {
  res.send("Entrance to the API routes!");
});
// ===================================


// Listener
// ===================================
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT}`);
});
