require('dotenv').config();
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(expressSession({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

/**
 * Configs
 */
require('./config/mongoDb');
require('./config/nextServer')(app, server);
require('./config/socketServer')(server);

/**
 * Routes
 */
require('./resources/resources_router')(app);
require('./builds/builds_router')(app);
require('./users/users_router')(app);
require('./news/news_router')(app);
