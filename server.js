const express = require('express');
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
// ?how is this section working again
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })