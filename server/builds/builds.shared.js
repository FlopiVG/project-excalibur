const { updateUserResources } = require('../resources/resources.service');

require('isomorphic-unfetch');

const updateUserResourcesShared = data =>
  new Promise((resolve, reject) => {
    updateUserResources(data)
      .then(resolve)
      .catch(reject);
  });

module.exports = {
  updateUserResourcesShared,
};
