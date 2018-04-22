const ResourcesModel = require('./model');
const Resource = require('./mongoModel');

let resourcesModel = ResourcesModel;

function getResourcesFromModel() {
  return new Promise((resolve, reject) => {
    Resource.find({})
      .then(resources => resolve(resources))
      .catch(error => reject(error));
  });
}

function calculateResource({
  quantity, perSec, level, incPerUpdate,
}) {
  // eslint-disable-next-line no-mixed-operators
  return quantity + perSec * (level * incPerUpdate);
}

function updateResourcesFromModel() {
  return new Promise((resolve) => {
    resourcesModel = resourcesModel.map(resource => ({
      ...resource,
      quantity: calculateResource(resource),
    }));
    resolve('Done');
  });
}

module.exports = {
  getResourcesFromModel,
  updateResourcesFromModel,
};
