const { getBuilds, getBuild, upgradeBuild } = require('./controller');

module.exports = (app) => {
  app.get('/api/builds', getBuilds);
  app.get('/api/build/:id', getBuild);
  app.post('/api/build/:id', upgradeBuild);
};
