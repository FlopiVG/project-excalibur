const { getUserBuilds, getUserBuild, upgradeUserBuild } = require('./service');

async function getBuilds(req, res) {
  getUserBuilds()
    .then(builds => res.status(200).send(builds))
    .catch(error => res.status(500).send(error.message));
}

function getBuild(req, res) {
  getUserBuild(req.params.id)
    .then(build => res.status(200).send(build))
    .catch(error => res.status(500).send(error.message));
}

function upgradeBuild(req, res) {
  upgradeUserBuild(req.params.id)
    .then(build => res.status(200).send(build))
    .catch(error => res.status(500).send(error.message));
}

module.exports = {
  getBuilds,
  getBuild,
  upgradeBuild,
};
