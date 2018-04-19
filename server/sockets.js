const { getResources, updateResources } = require('./resources/controller');

module.exports = (socket) => {
  setInterval(async () => {
    try {
      await updateResources();
      socket.emit('get_resources', await getResources());
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, 1000);
};
