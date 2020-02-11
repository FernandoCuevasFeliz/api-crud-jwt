const config = {
  port: process.env.PORT || 3000,
  URI: process.env.MONGO_URI || 'mongodb://localhost/db_test',
  secretKey: process.env.SECRET_KEY || 'estaEsMiKey',
};

module.exports = config;
