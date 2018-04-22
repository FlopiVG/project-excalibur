const { getBuildsFromModel, updateLevelFromModel } = require('./service');

async function getBuilds(req, res) {
  try {
    const builds = await getBuildsFromModel();
    res.status(200).send(builds);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).send('Internal server error.');
  }
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
  upgradeBuild,
};
