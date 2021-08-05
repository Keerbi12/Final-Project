const mongoose = require('mongoose');
require('dotenv').config();


// process.env.MONGODB_URI || 

mongoose.connect('mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
