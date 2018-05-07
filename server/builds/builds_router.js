const { authorization } = require('../middleware');
const { getBuilds, getBuild, upgradeBuild } = require('./builds_controller');

module.exports = (app) => {
  app.get('/api/builds', authorization, getBuilds);
  app.get('/api/build/:id', getBuild);
  app.post('/api/build/:id', upgradeBuild);
};
