const { updateLevelFromModel } = require('./service');

async function upgradeResource(req, res) {
  const id = Number.parseInt(req.body.id, 10);
  if (Number.isNaN(id)) res.status(400).send('Need id in valid format.');
  if (!id) res.status(400).send('Need resource id.');

  try {
    await updateLevelFromModel(id);
    res.status(200).end();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).send('Internal server error.');
  }
}

module.exports = {
  upgradeResource,
};
