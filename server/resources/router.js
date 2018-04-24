const { getResources, updateResources } = require('./controller');

module.exports = (app) => {
  app.get('/api/resources', getResources);
  app.put('/api/resources', updateResources);
};
