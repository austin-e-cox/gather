const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('./models');

passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
  (email, password, done) => {
    db.User.findOne({
      where: { email }
    }).then(dbUser => {
      // If there is no User with the given email...
      if (!dbUser) {
        return done(null, false, {
          message: 'Incorrect Email'
        });
      }
      // If the given User exists but the password is incorrect...
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect Password'
        });
      }
      // If none of the above, return User...
      return done(null, dbUser);
    });
  }
));

// Serialize / Deserialize User
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;