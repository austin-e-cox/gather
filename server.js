// Pull in required deps...
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

require('dotenv').config();

// Pull in APIs...
const users = require('./routes/api/users');
const userInfo = require('./routes/api/userInfo');
const groups =  require('./routes/api/groups');

// Initialize app using express...
const app = express();

// Apply bodyParser so it can be used...
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//Pull in our MongoDB URI and connect to DB...
const db = process.env.MONGODB_URI;
console.log(db);

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Succesfully Connected to DB...'))
  .catch(err => console.log(err));

// Passport Middleware...
app.use(passport.initialize());

// Heroku Middleware...
app.use(express.static(path.join(__dirname, "client", "build")))

// Passport Config...
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/userinfo', userInfo);
app.use('/api/groups', groups);

// Set and listen to PORT...
const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}!`));