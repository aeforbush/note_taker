// dependencies
const path = require("path");
const router = require("express").Router();

// HTML GET requests
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// wildcard send client back to homepage if error
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
