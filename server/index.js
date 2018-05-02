require('dotenv').config();
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
