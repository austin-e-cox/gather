// Require Packages
const express = require('express');
const session = require('express-session');
const path = require('path');

// Require Passport
const passport = require('./config/passport');

// Set Up Ports and Require Models
const PORT = process.env.PORT || 8080;
const db = require('./models');

// Create Express App and Configure Auth Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Sessions Track User Login State
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Require Routes
require('./routes/api-routes.js')(app);


const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:75llama-hunter@ds031597.mlab.com:31597/heroku_mn5v1j8t');

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.post('/', (req, res) => {
  res.send(req.data);
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
