const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./users_model');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .select('-password')
    .then(user => done(null, user))
    .catch(error => done(error, null));
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username })
    .then(async (user) => {
      if (!user) return done(null, false, { message: 'Incorrect username.' });
      if (!(await user.comparePassword(password))) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch(done);
}));
