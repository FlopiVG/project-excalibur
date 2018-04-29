const Resource = require('./resources.model');
const {
  mapResourcesToUpdate,
  checkEnoughResource,
} = require('./resources.utils');

function getResourcesFromModel() {
  return new Promise((resolve, reject) => {
    Resource.find({})
      .then(resources => resolve(resources))
      .catch(error => reject(error));
  });
}

function getUserResource(_id) {
  return new Promise((resolve, reject) => {
    Resource.findById(_id)
      .lean()
      .then(resolve)
      .catch(reject);
  });
}

function updateUserResources(resourcesQuantities) {
  return new Promise((resolve, reject) => {
    Promise.all(resourcesQuantities.map(({ _id }) => getUserResource(_id)))
      .then(resources =>
        Promise.all(resources.map(resource =>
          mapResourcesToUpdate(resource, resourcesQuantities))))
      .then(resources => Promise.all(resources.map(checkEnoughResource)))
      .then(resources =>
        Promise.all(resources.map(resource =>
          Resource.updateOne(
            { _id: resource._id },
            { $inc: { quantity: -resource.needRes } },
          ))))
      .then(resolve)
      .catch(reject);
  });
}

function updateResourcesNextTick() {
  return new Promise(async (resolve, reject) => {
    try {
      const resources = await getResourcesFromModel();
      resources.forEach(async (resource) => {
        try {
          await Resource.findByIdAndUpdate(resource._id, {
            $inc: { quantity: 1 },
          });
        } catch (e) {
          reject(e);
        }
      });
      resolve('Ok');
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  getResourcesFromModel,
  updateUserResources,
  updateResourcesNextTick,
};
