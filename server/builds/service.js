const { checkFoundResource, mapUpgradeCost } = require('./utils');
const { updateUserResources } = require('../resources/service');
const Build = require('./model');

function getUserBuilds() {
  return new Promise((resolve, reject) => {
    Build.find({})
      .lean()
      .then(mapUpgradeCost)
      .then(resolve)
      .catch(reject);
  });
}

function getUserBuild(id) {
  return new Promise((resolve, reject) => {
    Build.findById(id)
      .then(checkFoundResource)
      .then(mapUpgradeCost)
      .then(resolve)
      .catch(reject);
  });
}

function upgradeUserBuild(id) {
  return new Promise((resolve, reject) => {
    getUserBuild(id)
      .then(build =>
        updateUserResources(build.upgradeCost)
          .then(() => Promise.resolve(build))
          .catch(error => Promise.reject(error)))
      .then(build =>
        Build.findByIdAndUpdate(
          build._id,
          { $inc: { level: 1 } },
          { new: true },
        ))
      .then(mapUpgradeCost)
      .then(resolve)
      .catch(reject);
  });
}

module.exports = {
  getUserBuilds,
  getUserBuild,
  upgradeUserBuild,
};
