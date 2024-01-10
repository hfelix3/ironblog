const express = require('express');
var session = require('express-session')
const routes = require('./controllers');
const path = require('path')

// add a require for handle bars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// initialize application
const app = express();

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })