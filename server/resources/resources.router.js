const { getResources, updateResources } = require('./resources.controller');

module.exports = (app) => {
  app.get('/api/resources', getResources);
  app.put('/api/resources', updateResources);
};
