const mongoose = require('mongoose');
const { URI } = require('../config');
const configDB = require('./key');

mongoose.connect(URI, configDB);

const cn = mongoose.connection;

cn.once('open', () => {
  console.log(`Database is connect`);
});

cn.on('error', (error) => {
  console.log('Error:', error);
});
