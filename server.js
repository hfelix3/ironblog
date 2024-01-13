// load dependencies
const path = require('path');
var express = require('express');
var session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

var sequelize = require('./config/connection');
// initialize sequelize with session store
// ?is this a dependency
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// initialize application
const app = express();
const PORT = process.env.PORT || 3001;

// add a require for handle bars
const hbs = exphbs.create({});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
