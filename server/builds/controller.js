const { getBuildsFromModel } = require('./service');

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

module.exports = {
  getBuilds,
};
