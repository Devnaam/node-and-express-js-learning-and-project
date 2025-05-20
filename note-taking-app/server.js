const express = require('express');
const { v4: uuidv4 } = require('uuid');
const notesRouter = require('./routes/notes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory store
let notes = [];
let archivedNotes = [];
let trashedNotes = [];

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Pass data to routes
app.use((req, res, next) => {
  req.app.locals.notes = notes;
  req.app.locals.archivedNotes = archivedNotes;
  req.app.locals.trashedNotes = trashedNotes;
  next();
});

// Routes
app.use('/', notesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});