const NotesCtl = {};
const NotesModel = require('../models/Notes');

NotesCtl.createNotes = async (req, res) => {
  const { title, description, user_id } = req.body;
  const newNote = new NotesModel({ title, description, user_id });

  await newNote.save();
  res.status(200).send('Note Registred!');
};

NotesCtl.getNote = async (req, res) => {
  const note = await NotesModel.findById(req.params.id);
  res.status(200).json({ note });
};

NotesCtl.getNotes = async (req, res) => {
  const notes = await NotesModel.find();
  res.status(200).json({ notes });
};

NotesCtl.editNote = async (req, res) => {
  const { title, description } = req.body;
  const note = { title, description };
  await NotesModel.findByIdAndUpdate(req.params.id, note);

  res.status(200).send('Note Updated!');
};

NotesCtl.deleteNote = async (req, res) => {
  await NotesModel.findByIdAndRemove(req.params.id);
  res.status(200).send('Note Deleted!');
};

module.exports = NotesCtl;
