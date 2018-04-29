const { updateUserResources } = require('../resources/resources.service');

const updateUserResourcesShared = data =>
  new Promise((resolve, reject) => {
    updateUserResources(data)
      .then(resolve)
      .catch(reject);
  });

module.exports = {
  updateUserResourcesShared,
};
