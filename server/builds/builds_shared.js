const Resource = require('../resources/resources.model');
const ResourcesService = require('../resources/resources.service')(Resource);

const updateUserResourcesShared = data =>
  new Promise((resolve, reject) => {
    ResourcesService.updateUserResources(data)
      .then(resolve)
      .catch(reject);
  });
module.exports = {
  updateUserResourcesShared,
};
