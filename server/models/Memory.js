const { Schema, model } = require('mongoose');

// Schema for MemoryForm, creates schema for mongdb.
const memorySchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    postDescription: {
      type: String,
      required: true,
    },
    fileInput: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: new Date()
    },
  },
);

const Memory = model('Memory', memorySchema);

module.exports = Memory;
