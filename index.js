const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");
const dataRoutes = require("./routes/dataRoutes");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
const port = config.port;

// Middleware untuk parsing JSON dan URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/", dataRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
//=======================
