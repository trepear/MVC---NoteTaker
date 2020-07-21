const express = require('express');
const router = express.Router();
const Note = require("../model/model.js");

router.get('/notes', (req, res) => {
    Note.viewNotes()
    .then(results => res.json(results))
    .catch(error => res.json(error))
  });
  
  router.post('/notes', (req, res) => {
    const { title, text, id } = req.body;
  
    Note.addNote([title, text, id])
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  })

  router.delete('/notes/:id', (req, res) => {
    Note.deleteNote(req.params.id)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
  });
  
  module.exports = router;