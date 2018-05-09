const { getVillage } = require('./villages_controller');

module.exports = (app) => {
  app.get('/api/village/:id', getVillage);
};
