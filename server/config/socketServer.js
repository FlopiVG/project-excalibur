const socketIO = require('socket.io');

const socketResources = require('../resources/socket');

module.exports = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    socketResources(socket);
  });
};
