const express = require('express');
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
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })