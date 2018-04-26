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
require('./resources/router')(app);
require('./builds/router')(app);
require('./news/router')(app);
