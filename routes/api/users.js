// Pull in required deps...
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// Load input validation...
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model...
const User = require('../../models/User');

// Create register endpoint...
router.post('/register', (req, res) => {

  // Form validation...
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation...
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Find User if already exists...
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists..." });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before sending to DB...
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// Create login endpoint...
router.post('/login', (req, res) => {

  // Form validation...
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation...
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Save User email and password...
  const email = req.body.email;
  const password = req.body.password;

  // Find User by email...
  User.findOne({ email }).then(user => {
    // Check if User exists...
    if (!user) {
      return res.status(404).json({ emailNotFound: 'Email Not Found...'});
    }
  });

  // Check password...
  bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
      // User Matched...
      // Create JWT Payload...
      const payload = {
        id: user.id,
        name: user.name
      };

      // Sign token...
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 1209600 }, (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
      });
    } else {
      return res.status(400).json({ passwordIncorrect: 'Password Incorrect...'});
    }
  });
});

module.exports = router;