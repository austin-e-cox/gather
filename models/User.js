// Pull in required deps...
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema...
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId:{
    type: String,
    default: uuidv4()
  }
});

module.exports = User = mongoose.model('users', UserSchema);