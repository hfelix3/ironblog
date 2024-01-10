// load dependencies
var express = require("express");
var Sequelize = require("sequelize");
var session = require("express-session");
const routes = require('./controllers');
const path = require('path')

// add a require for handle bars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// initialize application
const app = express();
// initialize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ?DO I NEED THIS? GOT IT FROM CONNECT-SESSION-SEQUELIZE INSTALL
// // create database, ensure 'sqlite3' in your package.json
// var sequelize = new Sequelize("database", "username", "password", {
//   dialect: "sqlite",
//   storage: "./session.sqlite",
// });

// // configure express
// var app = express();
// app.use(
//   session({
//     secret: "keyboard cat",
//     store: new SequelizeStore({
//       db: sequelize,
//     }),
//     resave: false, // we support the touch method so per the express-session docs this should be set to false
//     proxy: true, // if you do SSL outside of node.
//   })
// );

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