// dependencies 
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


// GET request
router.get("/notes", (req, res) => {
 fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
     if (err) throw err;
     const notes = JSON.parse(data);
     res.json(notes);
 })
});

// POST request
router.post("/notes", (req, res) => {
 fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
     if (err) throw err;
     const notes = JSON.parse(data);
     const newNote = req.body;
     newNote.id = uuidv4();
     notes.push(newNote);

     const CreateNote = JSON.stringify(notes);
     fs.writeFile(path.join(__dirname, "../db/db.json"), CreateNote, (err) => {
         if (err) throw err;
     });
     res.json(newNote);
 });
});

// DELETE request
router.delete("/notes/:id", (req, res) => {
 const noteId = req.params.id;
 fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
     if (err) throw err;
     const notes = JSON.parse(data);
     const notesArray = notes.filter(item => {
         return item.id !== noteId
     });
     fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray), (err, data) => {
         console.log("Deleted note.")
         if (err) throw err;
         res.json(notesArray)
     });
 });
});

module.exports = router;
