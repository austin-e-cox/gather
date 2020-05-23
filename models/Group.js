// Pull in required deps...
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create chat log Schema...
const chatLog = new Schema({
  userId : {
    type: String,
    required: true
  },
  message : {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// Create Group Schema...
const GroupSchema = new Schema({
  groupName : {
    type: String,
    required: true
  },
  activeUsers : {
    type: [String],
    required: true
  },
  chatLog : {
    type: [chatLog],
    required: true
  },
});

module.exports = Group = mongoose.model('groups', GroupSchema);