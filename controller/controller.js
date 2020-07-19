const router = require("express").Router();
const noteRoutes = require('./notesController');

router.use('/notes', noteRoutes)

module.exports = router;