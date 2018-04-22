const Resource = require('./mongoModel');

function getResourcesFromModel() {
  return new Promise((resolve, reject) => {
    Resource.find({})
      .then(resources => resolve(resources))
      .catch(error => reject(error));
  });
}

function updateResourcesFromModel() {
  return new Promise((resolve, reject) => {
    Resource.updateMany({}, { $inc: { quantity: 1 } })
      .then(() => {
        resolve('Ok');
      })
      .catch(error => reject(error));
  });
}

module.exports = {
  getResourcesFromModel,
  updateResourcesFromModel,
};
