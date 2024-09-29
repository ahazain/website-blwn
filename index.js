const path = require("path");
const express = require("express");
const Queries = require("./connectQuery"); //koneksi pg
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
const port = 3000;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", Queries.getUsers);
app.get("/divisi", Queries.getDivisi);
app.get("/pengurus", Queries.getPengurus);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
