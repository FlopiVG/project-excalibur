const Resource = require('../resources/resources_model');
const ResourcesService = require('../resources/resources_service')(Resource);

const updateUserResourcesShared = data =>
  new Promise((resolve, reject) => {
    ResourcesService.updateUserResources(data)
      .then(resolve)
      .catch(reject);
  });
module.exports = {
  updateUserResourcesShared,
};
