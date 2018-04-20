const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./config/nextServer')(app, server);

require('./resources/router')(app);

const sockets = require('./sockets');

io.on('connection', (socket) => {
  sockets(socket);
});

