// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files in /public
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route: Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.send(`
    <h1>Climate Crisis Assignment</h1>
    <p><a href="https://github.com/banh-sharon/climatecrisis" target="_blank">View the GitHub Repo</a></p>
    <p><a href="/">Go back</a></p>
  `);
});

// Route: Typesetting
app.get("/typesetting", (req, res) => {
  res.send(`
    <h1>Typesetting Assignment</h1>
    <p><a href="https://github.com/banh-sharon/typesetting" target="_blank">View the GitHub Repo</a></p>
    <p><a href="/">Go back</a></p>
  `);
});

// Route: Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.send(`
    <h1>Four Algorithms Assignment</h1>
    <p><a href="https://github.com/banh-sharon/assignment-0" target="_blank">View the GitHub Repo</a></p>
    <p><a href="/">Go back</a></p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
