const { Schema, model } = require('mongoose');

const memorySchema = new Schema(
  {
    postTitle: String,
    postDescription: String
  },
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;
