const { checkFoundResource, mapUpgradeCost } = require('./utils');
const Build = require('./model');

function getUserBuilds() {
  return new Promise((resolve, reject) => {
    Build.find({})
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
    Build.findByIdAndUpdate(id, { $inc: { level: 1 } }, { new: true })
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
