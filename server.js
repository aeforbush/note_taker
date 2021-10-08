// dependencies
const express = require('express');
// tells node we are creating an 'express' server
const app = express();

// initalizing PORT
const PORT = process.env.PORT || 3002;

// middleware for 'express' to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// routes
require('./routes/apiRoutes.js');
require('./routes/htmlRoutes');




app.listen(PORT, () => {
    console.log(`API server now on PORT: ${PORT}`);
});