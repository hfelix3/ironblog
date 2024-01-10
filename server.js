// load dependencies
const path = require("path");
var express = require("express");
var session = require("express-session");
const exphbs = require("express-handlebars");
var Sequelize = require("sequelize");
const routes = require("./controllers");

// add a require for handle bars
const hbs = exphbs.create({});

// initialize application
const app = express();
// initialize sequelize with session store
// ?is this a dependency
var SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

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

// ?replace this block with the top one? referr to activity 20 serverjs
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
