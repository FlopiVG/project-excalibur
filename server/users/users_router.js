const { getUsers, createUser } = require('./users_controller');

module.exports = (app) => {
  app.get('/api/users', getUsers);
  app.post('/api/user', createUser);
};
