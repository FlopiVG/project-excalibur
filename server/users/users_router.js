const { getUsers, createUser, loginUser } = require('./users_controller');

module.exports = (app) => {
  app.get('/api/users', getUsers);
  app.post('/api/user', createUser);
  app.post('/api/login', loginUser);
};
