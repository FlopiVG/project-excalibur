const { getBuilds } = require('./controller');

module.exports = (app) => {
  app.get('/api/builds', getBuilds);
};
