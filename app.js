// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Kinu and Allahvel's App");
});

// Shows ROUTES
const showsController = require("./controllers/showsController.js");
app.use("/shows", showsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

// EXPORT
module.exports = app;