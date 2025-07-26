const express = require("express");
const app = express();
const PORT = 5000;
const data = require("./data.json");

// HTTP REQUESTS
// GET
// DELETE
// POST
// PUT

// path, callback function
app.get("/api/profile", function (req, res) {
  res.json(data);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
