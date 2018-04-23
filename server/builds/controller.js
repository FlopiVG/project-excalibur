const {
  getUserBuilds,
  getUserBuild,
  updateLevelFromModel,
} = require('./service');

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
  const id = Number.parseInt(req.body.id, 10);
  if (Number.isNaN(id)) {
    res
      .status(400)
      .send('Need id in valid format.')
      .end();
  }
  if (!id) {
    res
      .status(400)
      .send('Need build id.')
      .end();
  }

  updateLevelFromModel(id)
    .then(data => res.status(200).send(data))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).send('Internal server error.');
    });
}

module.exports = {
  getBuilds,
  getBuild,
  upgradeBuild,
};
