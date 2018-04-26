const { getBuilds, getBuild, upgradeBuild } = require('./builds.controller');

module.exports = (app) => {
  app.get('/api/builds', getBuilds);
  app.get('/api/build/:id', getBuild);
  app.post('/api/build/:id', upgradeBuild);
};
