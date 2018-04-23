const { getResourcesFromModel, updateResourcesNextTick } = require('./service');

module.exports = (socket) => {
  setInterval(async () => {
    try {
      await updateResourcesNextTick();
      socket.emit('get_resources', await getResourcesFromModel());
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, 1000);
};
