const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./models/Teacher');
require('./models/Class');
require('./models/News');
require('./models/Ticket');
require('./models/Pinned');

require('./services/passport');

mongoose.connect(keys.mongoUri, {
  useFindAndModify: false
});

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/resources', express.static(__dirname + '/img'));


//require('./routes/materialsRoutes')(app);
require('./routes/teachersRoutes')(app);
require('./routes/classesRoutes')(app);
require('./routes/newsRoutes')(app);
require('./routes/pinnedRoutes')(app);
require('./routes/ticketsRoutes')(app);
require('./routes/contactRoutes')(app);
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if route is unrecognized

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);