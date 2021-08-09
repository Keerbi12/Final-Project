const { Schema, model } = require('mongoose');

const memorySchema = new Schema({
  title: {type: String},
  message: {type: String},
  creator: {type: String},
  selectedFile: {type: String},
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Memory = model('Memory', memorySchema);

module.exports = Memory;
