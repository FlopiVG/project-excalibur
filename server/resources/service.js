const Resource = require('./model');

function getResourcesFromModel() {
  return new Promise((resolve, reject) => {
    Resource.find({})
      .then(resources => resolve(resources))
      .catch(error => reject(error));
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
  updateResourcesNextTick,
};
