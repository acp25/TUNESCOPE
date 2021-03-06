const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    }),
  };

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
const helpers = require('./utils/helpers');

const hbs = handlebars.create({ helpers });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve up files in the 'public' folder


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const routes = require('./controllers');

// turn on routes
 app.use(routes);
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
