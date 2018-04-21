const Builds = require('./model');

function getBuildsFromModel() {
  return new Promise((resolve, reject) => {
    Builds()
      .then(data => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

module.exports = {
  getBuildsFromModel,
};
