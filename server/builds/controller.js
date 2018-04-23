const { getUserBuilds, getUserBuild, upgradeUserBuild } = require('./service');

async function getBuilds(req, res) {
  try {
    const builds = await getUserBuilds();
    res.status(200).send(builds);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).send('Internal server error.');
  }
}

function getBuild(req, res) {
  getUserBuild(req.params.id)
    .then(build => res.status(200).send(build))
    .catch(error => res.status(500).send(error));
}

function upgradeBuild(req, res) {
  upgradeUserBuild(req.params.id)
    .then(build => res.status(200).send(build))
    .catch(error => res.status(500).send(error));
}

module.exports = {
  getBuilds,
  getBuild,
  upgradeBuild,
};
