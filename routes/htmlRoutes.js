// dependencies
const path = require("path");

module.exports = (app) => {
  // HTML GET requests
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  // wildcard send client back to homepage if error
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
