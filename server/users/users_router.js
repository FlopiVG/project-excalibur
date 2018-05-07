const {
  getUsers,
  createUser,
  deleteUser,
  loginUser,
} = require('./users_controller');

module.exports = (app) => {
  app.get('/api/users', getUsers);
  app.post('/api/user', createUser);
  app.delete('/api/user/:id', deleteUser);
  app.post('/api/login', loginUser);
};
