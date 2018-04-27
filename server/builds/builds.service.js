const { checkFoundDoc } = require('../utils/validations');
const { mapUpgradeCost } = require('./builds.utils');
const { updateUserResourcesShared } = require('./builds.shared');

function getUserBuilds(Build) {
  return new Promise((resolve, reject) => {
    Build.find({})
      .lean()
      .then(mapUpgradeCost)
      .then(resolve)
      .catch(reject);
  });
}

function getUserBuild(Build, id) {
  return new Promise((resolve, reject) => {
    Build.findById(id)
      .lean()
      .then(checkFoundDoc)
      .then(mapUpgradeCost)
      .then(resolve)
      .catch(reject);
  });
}

function upgradeUserBuild(Build, id) {
  return new Promise((resolve, reject) => {
    getUserBuild(Build, id)
      .then(build =>
        updateUserResourcesShared(build.upgradeCost)
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

module.exports = Build => ({
  getUserBuilds: () => getUserBuilds(Build),
  getUserBuild: id => getUserBuild(Build, id),
  upgradeUserBuild: id => upgradeUserBuild(Build, id),
});
