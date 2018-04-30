const {
  mapResourcesToUpdate,
  checkEnoughResource,
} = require('./resources_utils');

function getUserResources(Resource) {
  return new Promise((resolve, reject) => {
    Resource.find({})
      .lean()
      .then(resources => resolve(resources))
      .catch(error => reject(error));
  });
}

function getUserResource(Resource, _id) {
  return new Promise((resolve, reject) => {
    Resource.findById(_id)
      .lean()
      .then(resolve)
      .catch(reject);
  });
}

function updateUserResources(Resource, resQuant) {
  return new Promise((resolve, reject) => {
    Promise.all(resQuant.map(({ _id }) => getUserResource(Resource, _id)))
      .then(resources =>
        Promise.all(resources.map(r => mapResourcesToUpdate(r, resQuant))))
      .then(resources => Promise.all(resources.map(checkEnoughResource)))
      .then(resources =>
        Promise.all(resources.map(resource =>
          Resource.findByIdAndUpdate(resource._id, {
            $inc: { quantity: -resource.needRes },
          }))))
      .then(resolve)
      .catch(reject);
  });
}

function updateResourcesNextTick(Resource) {
  return new Promise(async (resolve, reject) => {
    try {
      const resources = await getUserResources(Resource);
      resources.forEach(async (resource) => {
        try {
          await Resource.findByIdAndUpdate(resource._id, {
            $inc: { quantity: 1 },
          });
        } catch (e) {
          reject(e);
        }
      });
      resolve('Ok.');
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = Resource => ({
  getUserResources: () => getUserResources(Resource),
  getUserResource: _id => getUserResource(Resource, _id),
  updateUserResources: resourcesQuantities =>
    updateUserResources(Resource, resourcesQuantities),
  updateResourcesNextTick: () => updateResourcesNextTick(Resource),
});
