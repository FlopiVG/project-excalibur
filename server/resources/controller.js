const { getResourcesFromModel } = require('./service');

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
  getResources,
};
