// Pull in required deps...
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create UserInfo Schema...
const UserInfoSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  groups: {
    type: [String],
    required: true
  }
});

module.exports = UserInfo = mongoose.model('userInfos', UserInfoSchema);