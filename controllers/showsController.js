const express = require("express");
const shows = express.Router();

// INDEX
shows.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = shows;