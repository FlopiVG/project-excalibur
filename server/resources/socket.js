const { getResourcesFromModel, updateResourcesNextTick } = require('./service');

module.exports = (socket) => {
  setInterval(async () => {
    updateResourcesNextTick()
      .then(getResourcesFromModel)
      .then(resources => socket.emit('get_resources', resources))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, 1000);
};
