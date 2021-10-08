// dependencies
const express = require("express");

// point server to route files
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// tells node we are creating an 'express' server
const app = express();

// set PORT
const PORT = process.env.PORT || 3002;

// middleware for 'express' to handle data parsing for string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listener for PORT
app.listen(PORT, () => {
  console.log(`API server now on PORT: ${PORT}`);
});
