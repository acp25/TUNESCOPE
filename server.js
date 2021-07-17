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
      db: sequelize,
    }),
  };

app.use(session(sess));

const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serve up files in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  defaultLayout: 'main',
  partialsDir: `${__dirname}/views/partials`
}));
app.set('view engine', 'handlebars');

const routes = require('./controllers');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
