const { upgradeResource } = require('./controller');

module.exports = (app) => {
  app.patch('/api/resources', upgradeResource);
};
