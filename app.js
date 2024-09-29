const path = require("path");
const express = require("express");
const app = express();
const Queries = require("./connect");
app.set("view engine", "ejs");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/mapalaBLWN", Queries.getBlwn);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
