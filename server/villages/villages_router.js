const { getVillage, createVillage } = require('./villages_controller');
const { authorization } = require('../middleware');

module.exports = (app) => {
  app.get('/api/village/:id', getVillage);
  app.post('/api/village', authorization, createVillage);
};
