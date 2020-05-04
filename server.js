// Pull in required deps...
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize app using express...
const app = express();

// Apply bodyParser so it can be used...
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//Pull in our MongoDB URI and connect to DB...
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Succesfully Connected to DB...'))
  .catch(err => console.log(err));

// Set and listen to PORT...
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}!`));