const { Router } = require('express');
const router = Router();
const {
  getNote,
  createNotes,
  getNotes,
  editNote,
  deleteNote,
} = require('../controllers/notes.controllers.js');

router
  .route('/notes')
  .get(getNotes)
  .post(createNotes);

router
  .route('/notes/:id')
  .get(getNote)
  .post(editNote);

router.route('/notes/delete/:id').get(deleteNote);

module.exports = router;
