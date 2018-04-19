const ResourcesModel = require('./model');

let resourcesModel = ResourcesModel;

function getResourcesFromModel() {
  return new Promise((resolve) => {
    resolve(resourcesModel);
  });
}

function updateResourcesFromModel() {
  return new Promise((resolve) => {
    resourcesModel = resourcesModel.map(resource => ({
      id: resource.id,
      name: resource.name,
      quantity: resource.quantity + resource.perSec,
      perSec: resource.perSec,
    }));
    resolve('Done');
  });
}

module.exports = {
  getResourcesFromModel,
  updateResourcesFromModel,
};
