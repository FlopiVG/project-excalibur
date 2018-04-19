const { getResourcesFromModel, updateResourcesFromModel } = require('./service');

function updateResources() {
  return new Promise((resolve, reject) => {
    updateResourcesFromModel()
      .then(() => resolve())
      .catch(error => reject(error));
  });
}

function getResources() {
  return new Promise((resolve, reject) => {
    getResourcesFromModel()
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

module.exports = {
  updateResources,
  getResources,
};
