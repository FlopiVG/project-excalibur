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

function updateLevelFromModel(id) {
  return new Promise((resolve, reject) => {
    if (!resourcesModel.find(resource => resource.id === id)) {
      reject(new Error(`Dont find any resource with id ${id}`));
    }
    resourcesModel = resourcesModel.map((resource) => {
      if (resource.id !== id) return resource;
      return {
        ...resource,
        level: resource.level + 1,
      };
    });
    resolve('Done');
  });
}

module.exports = {
  getResourcesFromModel,
  updateResourcesFromModel,
  updateLevelFromModel,
};
