const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

function middlewares(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cors());
}

module.exports = middlewares;
