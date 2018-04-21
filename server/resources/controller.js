const { updateLevelFromModel, getResourcesFromModel } = require('./service');

function upgradeResource(req, res) {
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
      .send('Need resource id.')
      .end();
  }

  updateLevelFromModel(id)
    .then(() => res.status(200).end())
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).send('Internal server error.');
    });
}

function getResources(req, res) {
  getResourcesFromModel()
    .then(data => res.status(200).send(data))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).send('Internal server error.');
    });
}

module.exports = {
  upgradeResource,
  getResources,
};
