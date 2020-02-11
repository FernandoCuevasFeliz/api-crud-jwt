const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const middlewares = require('./middlewares')(app);
const db = require('./database');

// importing routes
const indexRoutes = require('./routes');
const notesRoutes = require('./routes/notes');
const authRoutes = require('./routes/auth');

// routes
app.use('/api', indexRoutes);
app.use('/api', notesRoutes);
app.use('/api', authRoutes);

module.exports = app;
