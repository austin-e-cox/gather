// Pull in required deps...
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create chat log Schema...
const ChatMessage = new Schema({
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
});

module.exports = Message = mongoose.model('chatMessage', ChatMessage);