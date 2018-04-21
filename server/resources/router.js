const { upgradeResource, getResources } = require('./controller');

module.exports = (app) => {
  app.get('/api/resources', getResources);
  app.patch('/api/resources', upgradeResource);
};
