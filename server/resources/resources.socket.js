const Resource = require('./resources.model');
const ResourcesService = require('./resources.service')(Resource);

module.exports = (socket) => {
  setInterval(async () => {
    ResourcesService.updateResourcesNextTick()
      .then(ResourcesService.getUserResources)
      .then(resources => socket.emit('get_resources', resources))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, 1000);
};
