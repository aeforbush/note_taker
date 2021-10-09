// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// point server to route files
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// set PORT
const PORT = process.env.PORT || 3003;

// tells node we are creating an 'express' server
const app = express();

app.use(express.static(path.join(__dirname, "public")));
// middleware for 'express' to handle data parsing for string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listener for PORT
app.listen(PORT, () => {
  console.log(`API server now on PORT: ${PORT}`);
});
