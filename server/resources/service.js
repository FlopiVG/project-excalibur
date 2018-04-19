const ResourcesModel = require('./model');

let resourcesModel = ResourcesModel;

function getResourcesFromModel() {
  return new Promise((resolve) => {
    resolve(resourcesModel.map(resources => ({
      ...resources,
      quantity: Math.floor(resources.quantity),
    })));
  });
}

function updateResourcesFromModel() {
  return new Promise((resolve) => {
    resourcesModel = resourcesModel.map(resource => ({
      ...resource,
      quantity: resource.quantity + resource.perSec,
    }));
    resolve('Done');
  });
}

module.exports = {
  getResourcesFromModel,
  updateResourcesFromModel,
};
