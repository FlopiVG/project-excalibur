const Build = require('./builds_model');
const BuildService = require('./builds_service')(Build);

async function getBuilds(req, res) {
  BuildService.getUserBuilds()
    .then(builds => res.status(200).send(builds))
    .catch(error => res.status(500).send(error.message));
}

function getBuild(req, res) {
  BuildService.getUserBuild(req.params.id)
    .then(build => res.status(200).send(build))
    .catch(error => res.status(500).send(error.message));
}

function upgradeBuild(req, res) {
  BuildService.upgradeUserBuild(req.params.id)
    .then(build => res.status(200).send(build))
    .catch(error => res.status(500).send(error.message));
}

module.exports = {
  getBuilds,
  getBuild,
  upgradeBuild,
};
