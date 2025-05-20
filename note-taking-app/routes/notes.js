const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// Helper function to parse tags
const parseTags = (tags) => {
  return tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
};

// Homepage - List notes
router.get('/', (req, res) => {
  const { search, tag } = req.query;
  let filteredNotes = req.app.locals.notes.filter(note => !note.isArchived && !note.isTrashed);
  
  if (search) {
    const searchLower = search.toLowerCase();
    filteredNotes = filteredNotes.filter(note => 
      note.title.toLowerCase().includes(searchLower) || 
      note.content.toLowerCase().includes(searchLower)
    );
  }
  
  if (tag) {
    filteredNotes = filteredNotes.filter(note => note.tags.includes(tag));
  }
  
  // Sort pinned notes first
  filteredNotes.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
  
  res.render('home', { notes: filteredNotes, search, tag });
});

// Create note form
router.get('/create', (req, res) => {
  res.render('create');
});

// Create note
router.post('/create', (req, res) => {
  const { title, content, tags } = req.body;
  const note = {
    id: uuidv4(),
    title: title || 'Untitled',
    content: content || '',
    tags: parseTags(tags),
    isPinned: false,
    isArchived: false,
    isTrashed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  req.app.locals.notes.push(note);
  res.redirect('/');
});

// Edit note form
router.get('/edit/:id', (req, res) => {
  const note = req.app.locals.notes.find(n => n.id === req.params.id);
  if (note) {
    res.render('edit', { note });
  } else {
    res.redirect('/');
  }
});

// Update note
router.post('/edit/:id', (req, res) => {
  const { title, content, tags } = req.body;
  const note = req.app.locals.notes.find(n => n.id === req.params.id);
  if (note) {
    note.title = title || 'Untitled';
    note.content = content || '';
    note.tags = parseTags(tags);
    note.updatedAt = new Date();
    res.redirect('/');
  } else {
    res.redirect('/');
  }
});

// Pin note
router.post('/pin/:id', (req, res) => {
  const note = req.app.locals.notes.find(n => n.id === req.params.id);
  if (note) {
    note.isPinned = !note.isPinned;
  }
  res.redirect('/');
});

// Archive note
router.post('/archive/:id', (req, res) => {
  const note = req.app.locals.notes.find(n => n.id === req.params.id);
  if (note) {
    note.isArchived = true;
    note.isPinned = false;
    req.app.locals.archivedNotes.push(note);
    req.app.locals.notes = req.app.locals.notes.filter(n => n.id !== req.params.id);
  }
  res.redirect('/');
});

// Trash note
router.post('/trash/:id', (req, res) => {
  const note = req.app.locals.notes.find(n => n.id === req.params.id);
  if (note) {
    note.isTrashed = true;
    note.isPinned = false;
    req.app.locals.trashedNotes.push(note);
    req.app.locals.notes = req.app.locals.notes.filter(n => n.id !== req.params.id);
  }
  res.redirect('/');
});

// Archive page
router.get('/archive', (req, res) => {
  res.render('archive', { notes: req.app.locals.archivedNotes });
});

// Trash page
router.get('/trash', (req, res) => {
  res.render('trash', { notes: req.app.locals.trashedNotes });
});

// Restore from trash
router.post('/restore/:id', (req, res) => {
  const note = req.app.locals.trashedNotes.find(n => n.id === req.params.id);
  if (note) {
    note.isTrashed = false;
    req.app.locals.notes.push(note);
    req.app.locals.trashedNotes = req.app.locals.trashedNotes.filter(n => n.id !== req.params.id);
  }
  res.redirect('/trash');
});

// Restore from archive
router.post('/unarchive/:id', (req, res) => {
  const note = req.app.locals.archivedNotes.find(n => n.id === req.params.id);
  if (note) {
    note.isArchived = false;
    req.app.locals.notes.push(note);
    req.app.locals.archivedNotes = req.app.locals.archivedNotes.filter(n => n.id !== req.params.id);
  }
  res.redirect('/archive');
});

module.exports = router;