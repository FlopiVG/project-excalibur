const { getResources } = require('./controller');

module.exports = (app) => {
  app.get('/api/resources', getResources);
};
