const path = require("path");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
