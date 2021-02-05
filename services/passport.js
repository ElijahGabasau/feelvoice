const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  (new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, async function(username, password, done){
    const user = await User.findOne({ username : username})
    
    if(!user) {
      return done(null, false, { message: 'Access denied' })
    }
    
    user.password === password && user.secret === keys.secret
      ? done(null, user)
      : done(null, false, { message: 'Access denied' })
  }))
);