// Pull in required deps...
<<<<<<< Updated upstream
const { v4: uuidv4 } = require('uuid');
=======
import { v4  as uuidv4 } from uuid;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  userId:{
=======
  userId: {
>>>>>>> Stashed changes
    type: String,
    default: uuidv4()
  }
});

module.exports = User = mongoose.model('users', UserSchema);