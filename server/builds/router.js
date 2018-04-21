const { getBuilds, upgradeBuild } = require('./controller');

module.exports = (app) => {
  app.get('/api/builds', getBuilds);
  app.patch('/api/build', upgradeBuild);
};
