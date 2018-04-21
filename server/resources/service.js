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
