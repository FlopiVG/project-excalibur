const Resource = require('./resources_model');
const ResourcesService = require('./resources_service')(Resource);

module.exports = (socket) => {
  setInterval(async () => {
    ResourcesService.updateResourcesNextTick()
      .then(ResourcesService.getUserResources)
      .then(resources => socket.emit('get_resources', resources))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, 1000);
};
