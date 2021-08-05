const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require ('path');
const exphbs = require("express-handlebars");
const hbs = exphbs.create();

const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session');
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const sess = {
  secret: process.env.SERVER_SECRET,
  cookie: { scpNum: 4400 }, 
  resave: false, 
  saveUninitialized: true, 
  store: new SequelizeStore({ 
  db: sequelize  
  })
  };
     app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// view engine setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);


sequelize.sync({ force: false})
.then(() =>{
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})});