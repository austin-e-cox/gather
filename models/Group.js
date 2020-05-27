// Pull in required deps...
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    type: [Object],
    required: true
  },
});

module.exports = Group = mongoose.model('groups', GroupSchema);