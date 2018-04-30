const Resource = require('./resources_model');
const ResourcesService = require('./resources_service')(Resource);

function getResources(req, res) {
  ResourcesService.getUserResources()
    .then(data => res.status(200).send(data))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).send('Internal server error.');
    });
}

function checkUpdateBodyChildren(resource) {
  return !resource._id || !resource.quantity;
}

function checkUpdateBody(body) {
  return new Promise((resolve, reject) => {
    if (!body.length || body.find(checkUpdateBodyChildren)) {
      reject(new Error('Bad request'));
    }
    resolve(body);
  });
}

function updateResources(req, res) {
  checkUpdateBody(req.body)
    .then(ResourcesService.updateUserResources)
    .then(resources => res.status(200).send(resources))
    .catch(error => res.status(500).send(error.message));
}

module.exports = {
  getResources,
  updateResources,
};
