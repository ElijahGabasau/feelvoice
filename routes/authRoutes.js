const passport = require('passport');
const requireLogin = require('../middleware/requireLogin');

module.exports = (app) => {
  app.post(
    '/api/login', 
    passport.authenticate('local'), (req, res) => {
      res.contentType('json');
      return res.status(200).send({username: req.user.username});
    }
  );

  app.get('/api/logout', requireLogin, (req, res) => {
    req.logout();
    res.redirect('/admin');
  })

  app.get('/api/current_user', requireLogin, (req, res) => {
    res.contentType('json');
    res.status(200).send(req.user);
  })
};