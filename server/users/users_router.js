const { getUsers } = require('./users_controller');

module.exports = (app) => {
  app.get('/api/users', getUsers);
};
