// Express Setup
// ===================================
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const app = express();
const PORT = 3001;
// ===================================


// Mongoose Setup
// ===================================

// ENTER MONGOOSE CODE HERE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamewebsite", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// ===================================


// Body Parser Middleware
// ===================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ===================================


// require("./services/passport");

// API Routes
// ===================================
// API ROUTES TO THE DATABASE WILL GO HERE
// test route (to be deleted)
app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.use(routes);

// ===================================


// Listener
// ===================================
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT}`);
});
